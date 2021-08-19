<template>
  <q-page
    class="column items-center"
    padding
  >
    <div
      style="max-width: 600px;"
      class="full-width q-gutter-xl"
    >
      <!-- Generic Cell Slots -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #body-cell="props">
          <q-td
            :props="props"
          >
            <q-btn
              flat
              color="primary"
              :label="props.value"
              @click="copyToClipboard(props.value)"
            />
          </q-td>
        </template>
      </q-table>

      <!-- Specific Cell Slots -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #body-cell-name="props">
          <q-td
            class="bg-blue-1"
            :props="props"
          >
            {{ props.value }}
          </q-td>
        </template>

        <template #body-cell-email="props">
          <q-td
            class="bg-blue-2"
            :props="props"
          >
            {{ props.value }}
          </q-td>
        </template>

        <template
          #body-cell-age="props"
        >
          <q-td
            class="bg-blue-1"
            :props="props"
          >
            {{ props.value }}
          </q-td>
        </template>
      </q-table>

      <!-- Row Cell Slots -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #body="props">
          <q-tr
            :props="props"
          >
            <q-td
              key="name"
              :props="props"
            >
              <q-input
                v-model="props.row.name"
                borderless
                dense
              />
            </q-td>
            <q-td
              key="email"
              :props="props"
            >
              <q-input
                v-model="props.row.email"
                borderless
                dense
              />
            </q-td>
            <q-td
              key="age"
              :props="props"
            >
              <q-input
                v-model="props.row.age"
                borderless
                dense
                input-class="text-center"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>

      <!-- Header Cell Slots -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #header-cell="props">
          <q-th
            style="font-size: 1.4em;"
            class="text-primary"
            :props="props"
          >
            {{ props.col.label }}
          </q-th>
        </template>
      </q-table>

      <!-- Specific Header Cell Slot  -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #header-cell-email="props">
          <q-th :props="props">
            <q-icon
              size="sm"
              name="email"
              class="q-mr-sm"
              color="grey-7"
            />{{ props.col.label }}
          </q-th>
        </template>
      </q-table>

      <!-- Header Row Slot  -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #header="props">
          <q-tr>
            <q-th
              key="name"
              :props="props"
            >
              <q-input
                v-model="columns[0].label"
                dense
                borderless
                input-class="text-bold"
              />
            </q-th>

            <q-th
              key="email"
              :props="props"
            >
              <q-input
                v-model="columns[1].label"
                dense
                borderless
                input-class="text-bold"
              />
            </q-th>

            <q-th
              key="age"
              :props="props"
            >
              <q-input
                v-model="columns[2].label"
                dense
                borderless
                input-class="text-bold text-center"
              />
            </q-th>
          </q-tr>
        </template>
      </q-table>

      <!-- Bottom And Top Row -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #top-row>
          <q-tr class="bg-blue-1">
            <q-td class="text-bold">
              Average:
            </q-td>
            <q-td />
            <q-td class="text-center">
              {{ meanBy(rows, 'age') }}
            </q-td>
          </q-tr>
        </template>

        <template #bottom-row>
          <q-tr class="bg-green-1">
            <q-td class="text-bold">
              Total:
            </q-td>
            <q-td />
            <q-td class="text-center">
              {{ sumBy(rows, 'age') }}
            </q-td>
          </q-tr>
        </template>
      </q-table>

      <!-- Top Slot -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #top>
          <div
            class="text-bold"
            style="font-size: 1.3em;"
          >
            Cute Pups
          </div>
          <q-input
            class="q-ml-md"
            dense
            outlined
            placeholder="Search"
          >
            <template #prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>

      <!-- Bottom Slot -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #bottom>
          <span>
            dogs from <a href="https://poochypoochypooch.com">poochypoochypooch.com</a>
          </span>
        </template>
      </q-table>

      <!-- Top Left and Top Right -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #top-left>
          <div
            class="text-bold"
            style="font-size: 1.3em;"
          >
            Cute Pups
          </div>
        </template>
        <template #top-right>
          <q-input
            class="q-ml-md"
            dense
            outlined
            placeholder="Search"
          >
            <template #prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>

      <!-- No Data Slot -->
      <q-table
        :rows="[]"
        :columns="columns"
        row-key="id"
      >
        <template #no-data>
          <div>Hmmm, I can't find any dang data!</div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { copyToClipboard } from 'quasar'
import { ref } from 'vue'
import { sumBy, meanBy } from 'lodash-es'

export default {
  setup () {
    const rows = ref([
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
    ])

    const columns = ref([
      { label: 'name', field: 'name', name: 'name', align: 'left' },
      { label: 'email', field: 'email', name: 'email', align: 'left' },
      { label: 'age', field: 'age', name: 'age', align: 'center' }
    ])

    return {
      copyToClipboard,
      rows,
      columns,
      sumBy,
      meanBy
    }
  }
}
</script>
