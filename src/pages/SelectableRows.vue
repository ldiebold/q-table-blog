<template>
  <q-page
    padding
    class="flex justify-center"
  >
    <div
      class="full-width q-gutter-xl"
      style="max-width: 650px;"
    >
      <!-- Standard Selection -->
      <q-table
        v-model:selected="selected"
        selection="single"
        :rows="rows"
        row-key="id"
      />

      <!-- Customizing The Selection Component -->
      <q-table
        v-model:selected="selected"
        selection="multiple"
        :rows="rows"
        row-key="id"
      >
        <template #header-selection="scope">
          <q-toggle v-model="scope.selected" />
        </template>

        <template #body-selection="scope">
          <q-toggle v-model="scope.selected" />
        </template>
      </q-table>
    </div>
    <pre>{{ selected }}</pre>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const selected = ref()

    const rows = [
      {
        id: 1,
        name: 'Panda',
        email: 'panda@chihuahua.com',
        age: 6
      },
      {
        id: 2,
        name: 'Lily',
        email: 'lily@chihuahua.com',
        age: 5
      }
    ]

    const columns = [
      { label: 'expand', name: 'expand', field: 'expand' },
      { label: 'id', field: 'id', name: 'id' },
      { label: 'name', field: 'name', name: 'name' },
      { label: 'email', field: 'email', name: 'email' },
      { label: 'age', field: 'age', name: 'age' }
    ]

    return {
      rows,
      columns,
      selected
    }
  }
}
</script>
