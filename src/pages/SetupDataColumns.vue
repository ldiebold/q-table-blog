<template>
  <q-page
    padding
    class="flex justify-center"
  >
    <div
      class="full-width q-gutter-xl"
      style="max-width: 650px;"
    >
      <!--
  Most Basic Example!
-->
      <q-table
        :rows="[
          {
            name: 'Panda',
            email: 'panda@chihuahua.com',
          },
          {
            name: 'Lily',
            email: 'lily@chihuahua.com',
          }
        ]"
      />
      <!--
        Custom Columns
      -->
      <q-table
        title="My Chihuahuas"
        :rows="[
          {
            name: 'Panda',
            email: 'panda@chihuahua.com',
            age: 6
          },
          {
            name: 'Lily',
            email: 'lily@chihuahua.com',
            age: 5
          }
        ]"
        :columns="[
          {
            label: 'Dog Name',
            field: 'name',
            name: 'name',
            align: 'left'
          },
          {
            label: 'Email',
            field: 'email',
            name: 'email',
            align: 'left'
          },
          {
            label: 'Age',
            field: 'age',
            name: 'age',
            align: 'center',
            format: age => `${age} years`
          }
        ]"
      />
      <!--
        Dark Mode Is Easy!
      -->
      <q-table
        dark
        :rows-per-page-options="[0]"
        hide-bottom
        separator="cell"
        dense
        :rows="[
          {
            name: 'Panda',
            email: 'panda@chihuahua.com',
          },
          {
            name: 'Lily',
            email: 'lily@chihuahua.com',
          },
        ]"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
