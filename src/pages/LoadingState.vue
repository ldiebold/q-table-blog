<template>
  <q-page padding>
    <q-page
      padding
      class="flex justify-center"
    >
      <div
        class="full-width q-gutter-xl"
        style="max-width: 650px;"
      >
        <!-- Basic Loading State -->
        <q-table
          :loading="true"
          color="primary"
        />

        <!-- Inner Loading State (untouchable!) -->
        <q-table
          :loading="true"
        >
          <template #loading>
            <q-inner-loading
              showing
              color="secondary"
            />
          </template>
        </q-table>
      </div>
    </q-page>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup () {
    const loading = ref(true)
    const dogs = ref([])

    const columns = [
      { name: 'name', label: 'Name', field: 'name', align: 'left' },
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
      dogs
    }
  }
})
</script>
