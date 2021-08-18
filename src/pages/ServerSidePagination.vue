<template>
  <!--
    Why hello there!
    Meet me at the "script" section. That's where the magic happens 🪄
  -->
  <q-page
    padding
    class="flex justify-center"
  >
    <div
      class="full-width q-gutter-xl"
    >
      <!--
        Two things to notice here
        1. "rows-per-page-options" has been emptied.
            We're going to let the server decide how many "rows per page"
        2. @request is fired whenever a pagination is clicked! Handy 🙂
       -->
      <q-table
        v-model:pagination="pagination"
        :rows-per-page-options="[]"
        color="secondary"
        :loading="loading"
        :rows="dogs"
        :columns="columns"
        @request="onRequest"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup () {
    // And here we are!
    // I'll only comment in that parts that are different 😉
    const loading = ref(true)
    const dogs = ref([])

    const pagination = ref({
      // No longer using sort. if needed, this can now be done using the backend!
      // sortBy: 'name',
      // descending: false,
      page: 1,
      rowsPerPage: 15,
      // When using server side pagination, QTable needs
      // to know the "rows number" (total number of rows).
      // Why?
      // Because Quasar has no way of knowing what the last page
      // will be without this information!
      // Therefore, we now need to supply it with a "rowsNumber" ourself.
      rowsNumber: 0
    })

    const columns = [
      { name: 'name', label: 'Name', field: 'name', align: 'left' },
      { name: 'age', label: 'Age', field: 'age', align: 'center' },
      { name: 'email', label: 'Email', field: 'email' }
    ]

    // Fetch dogs
    const fetchDogs = (page = 0) => { // we can specify the "page" to jump to
      loading.value = true
      return axios.get('https://table.quasarcomponents.com/dogs', {
        params: { page: page } // here, we tell the api what "page" to jump to
      })
        .then(response => {
          dogs.value = response.data.data
          // The api gives us "meta data".
          // this meta data gives us everything we
          // need to get pagination working!
          const meta = response.data.meta

          // We now update "pagination" with our meta data
          // from the server. This is where the magic happens 🪄
          pagination.value.page = meta.current_page
          pagination.value.rowsPerPage = meta.per_page
          pagination.value.rowsNumber = meta.total
        })
        .finally(() => {
          loading.value = false
        })
    }

    // QTable exposes a @request method (see the <template>)
    // This will be called when one of the pagination buttons are clicked.
    // it gives us everything we need, including the new page number!
    const onRequest = (props) => {
      fetchDogs(props.pagination.page)
    }

    // The initial fetch
    fetchDogs()

    return {
      onRequest,
      columns,
      loading,
      dogs,
      pagination
    }
  }
})
</script>
