<template>
  <q-page
    padding
    class="flex justify-center"
  >
    <div
      class="full-width q-gutter-xl"
    >
      <q-table
        v-model:pagination="pagination"
        :rows-per-page-options="[3, 5, 10, 0]"
        color="secondary"
        :loading="loading"
        :rows="dogs"
        :columns="columns"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup () {
    const loading = ref(true)
    const dogs = ref([])
    const pagination = ref({
      sortBy: 'name',
      descending: false,
      page: 1,
      rowsPerPage: 3
    })

    const columns = [
      { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
      { name: 'age', label: 'Age', field: 'age', align: 'center' },
      { name: 'email', label: 'Email', field: 'email' }
    ]

    // Fetch dogs
    axios.get('https://table.quasarcomponents.com/dogs')
      .then(response => {
        dogs.value = response.data.data
      })
      .finally(() => {
        loading.value = false
      })

    return {
      columns,
      loading,
      dogs,
      pagination
    }
  }
})
</script>
