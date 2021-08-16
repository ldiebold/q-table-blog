<template>
  <q-page
    padding
    class="flex justify-center"
  >
    <div
      class="full-width q-gutter-xl"
    >
      <q-table
        color="secondary"
        :loading="loading"
        :rows="posts"
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
    const posts = ref([])
    const pagination = ref({
      rowsNumber: 0
    })

    axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20')
      .then(response => {
        posts.value = response.data
        pagination.value.rowsNumber = 5
      })
      .finally(() => {
        loading.value = false
      })

    return {
      loading,
      posts
    }
  }
})
</script>
