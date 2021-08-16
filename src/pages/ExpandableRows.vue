<template>
  <q-page
    padding
    class="flex justify-center"
  >
    <div
      class="full-width q-gutter-xl"
      style="max-width: 650px;"
    >
      <!-- Expandable Row -->
      <q-table
        :rows="[
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
        ]"
        row-key="id"
      >
        <template #body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn
                flat
                round
                :icon="props.expand ? 'remove' : 'add'"
                @click="props.expand = !props.expand"
              />
            </q-td>
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.value }}
            </q-td>
          </q-tr>
          <q-tr
            v-show="props.expand"
            :props="props"
          >
            <q-td colspan="100%">
              <div class="text-left">
                Expanded
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>

      <!-- Expandable Row (cells) -->
      <q-table
        :rows="[
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
        ]"
        row-key="id"
      >
        <template #body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn
                flat
                round
                :icon="props.expand ? 'remove' : 'add'"
                @click="props.expand = !props.expand"
              />
            </q-td>
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.value }}
            </q-td>
          </q-tr>
          <q-tr
            v-show="props.expand"
            :props="props"
          >
            <q-td />
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              breakdown
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const selected = ref()

    return {
      selected
    }
  }
}
</script>
