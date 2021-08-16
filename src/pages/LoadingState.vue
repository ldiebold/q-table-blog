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
        />

        <!-- Inner Loading State (untouchable!) -->
        <q-table
          :loading="true"
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
        >
          <template #loading>
            <q-inner-loading
              showing
              color="primary"
            />
          </template>
        </q-table>
      </div>
    </q-page>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
