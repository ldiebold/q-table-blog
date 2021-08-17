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
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #body="props">
          <q-tr :props="props">
            <!-- Expand cell/button -->
            <q-td
              key="expand"
              name="expand"
              :props="props"
              auto-width
            >
              <!--
          The important part here is
          @click="props.expand = !props.expand"
        -->
              <q-btn
                flat
                round
                :icon="props.expand ? 'remove' : 'add'"
                @click="props.expand = !props.expand"
              />
            </q-td>
            <!--
        Notice that we the "key" matches the columns "name" property
        Notice that we "proxy" the props from #body="props" to our q-td
      -->
            <q-td
              key="id"
              :props="props"
            >
              {{ props.row.id }}
            </q-td>
            <q-td
              key="name"
              :props="props"
            >
              {{ props.row.name }}
            </q-td>
            <q-td
              key="email"
              :props="props"
            >
              {{ props.row.email }}
            </q-td>
            <q-td
              key="age"
              :props="props"
            >
              {{ props.row.age }}
            </q-td>
          </q-tr>
          <!-- We show the row if "props.expand" is toggled to true! -->
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
        :rows="rows"
        :columns="columns"
        row-key="id"
      >
        <template #body="props">
          <!-- PARENT ROW -->
          <q-tr :props="props">
            <!-- Expand cell/button -->
            <q-td
              key="expand"
              name="expand"
              :props="props"
              auto-width
            >
              <q-btn
                flat
                round
                :icon="props.expand ? 'remove' : 'add'"
                @click="props.expand = !props.expand"
              />
            </q-td>
            <q-td
              key="id"
              :props="props"
            >
              {{ props.row.id }}
            </q-td>
            <q-td
              key="name"
              :props="props"
            >
              {{ props.row.name }}
            </q-td>
            <q-td
              key="email"
              :props="props"
            >
              {{ props.row.email }}
            </q-td>
            <q-td
              key="age"
              :props="props"
            >
              {{ props.row.age }}
            </q-td>
          </q-tr>
          <!-- CHILD ROW -->
          <q-tr
            v-show="props.expand"
            :props="props"
          >
            <!--
  Might want to leave the first cell blank, as it is
  simply space for the "expand" column
-->
            <q-td
              key="expand"
              :props="props"
            />
            <q-td :props="props">
              summary
            </q-td>
            <q-td
              key="id"
              :props="props"
            >
              summary
            </q-td>
            <q-td
              key="name"
              :props="props"
            >
              summary
            </q-td>
            <q-td
              key="email"
              :props="props"
            >
              summary
            </q-td>
            <q-td
              key="age"
              :props="props"
            >
              summary
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  setup () {
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
      columns
    }
  }
}
</script>
