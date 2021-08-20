<template>
  <q-page
    class="column items-center"
    padding
  >
    <div
      style="max-width: 600px;"
      class="full-width q-gutter-xl"
    >
      <!-- color, dense, dark, flat -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        color="green"
        :loading="true"
        dense
        dark
        flat
      />

      <!-- bordered, flat, square (cleancut) -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        flat
        square
      />

      <!-- specific classes and styles -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        title="Blue Chihuahua's"
        title-class="text-bold text-blue-9"
        table-class="bg-blue-9 text-white"
        table-style="border: 3px solid black;"
        table-header-style="height: 65px;"
        table-header-class="bg-blue-8"
      />

      <!-- specific column classes and styles -->
      <q-table
        :rows="rows"
        :columns="columnsStyled"
        row-key="id"
      />

      <!-- pagination -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        :rows-per-page-options="[2, 0]"
        rows-per-page-label="records/page"
        icon-first-page="home"
        icon-last-page="all_inclusive"
        icon-next-page="arrow_right"
        icon-prev-page="arrow_left"
        :pagination-label="(firstRowIndex, endRowIndex, totalRowsNumber) => {
          return `page ${endRowIndex}/${totalRowsNumber}`
        }"
      />

      <!-- hiding header row and bottom (pure table) -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        hide-header
        hide-bottom
      />

      <!-- Hiding pagination (may auto remove bottom) -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        hide-pagination
        :rows-per-page-options="[0]"
      />

      <!-- Hiding no-data -->
      <q-table
        :rows="[]"
        :columns="columns"
        row-key="id"
        hide-no-data
      />

      <!-- Visible Columns -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        :visible-columns="['name', 'age']"
      />

      <!-- Fullscreen -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        :fullscreen="fullscreen"
        title="dogs"
      >
        <template #top-right>
          <q-btn
            dense
            flat
            icon="fullscreen"
            @click="fullscreen = !fullscreen"
          />
        </template>
      </q-table>

      <!-- Separator, wrap-cells -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        separator="cell"
        style="width: 300px;"
        wrap-cells
      />

      <!-- no-data label -->
      <q-table
        :rows="[]"
        :columns="columns"
        row-key="id"
        no-data-label="I can't find any data 😞"
      />

      <!-- loading-data label -->
      <q-table
        :rows="[]"
        :columns="columns"
        row-key="id"
        :loading="true"
        loading-label="Gimme a sec and I'll fetch ya data!"
      />

      <!-- grid mode -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
        grid
        card-class="bg-indigo-9 text-white"
        card-style="padding: 22px;"
      />

      <!-- no-hover (q-td and q-tr) -->
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #body="props">
          <q-tr
            no-hover
            :props="props"
          >
            <q-td
              key="name"
              no-hover
              :props="props"
            >
              {{ props.row.name }}
            </q-td>

            <q-td
              key="email"
              no-hover
              :props="props"
            >
              {{ props.row.email }}
            </q-td>

            <q-td
              key="age"
              no-hover
              :props="props"
            >
              {{ props.row.age }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { colors } from 'quasar'
const { getPaletteColor } = colors

export default {
  setup () {
    const fullscreen = ref(false)

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
      },
      {
        id: 3,
        name: 'Moe',
        email: 'moe@rip.com',
        age: 7
      },
      {
        id: 4,
        name: 'Avo Cado',
        email: 'free@shivacadoo.com',
        age: 3
      },
      {
        id: 5,
        name: 'Oscar',
        email: 'oscar@comehome.com',
        age: 14
      }
    ]

    const columns = [
      { label: 'name', field: 'name', name: 'name', align: 'left' },
      { label: 'email', field: 'email', name: 'email', align: 'left' },
      { label: 'age', field: 'age', name: 'age', align: 'center' }
    ]

    const columnsStyled = [
      {
        label: 'name',
        field: 'name',
        name: 'name',
        align: 'left',
        classes: 'bg-pink-1 text-bold',
        style: {
          fontSize: '1.2em',
          borderLeft: `6px solid ${getPaletteColor('pink-4')}`
        },
        headerClasses: 'bg-grey-1',
        headerStyle: {
          fontSize: '1.2em'
        }
      },
      {
        label: 'email',
        field: 'email',
        name: 'email',
        align: 'left',
        headerClasses: 'bg-grey-3',
        classes: 'bg-pink-2'
      },
      {
        label: 'age',
        field: 'age',
        name: 'age',
        align: 'center',
        headerClasses: 'bg-grey-1',
        classes: 'bg-pink-1'
      }
    ]

    return {
      rows,
      columns,
      columnsStyled,
      fullscreen
    }
  }
}
</script>
