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

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        posts.value = response.data
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
