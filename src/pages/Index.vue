<template>
  <q-page class="flex flex-center">
    <q-list
      bordered
      width="350px"
    >
      <q-item
        v-for="page in pages"
        :key="page.title"
        clickable
        :to="page.slug"
      >
        <q-item-section>
          {{ page.title }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',

  setup () {
    const pages = [
      { slug: 'setup-data-columns', title: 'Setup data columns' },
      { slug: 'selectable-rows', title: 'Selectable Rows' },
      { slug: 'expandable-rows', title: 'Expandable Rows' },
      { slug: 'loading-state', title: 'Loading state' },
      { slug: 'pagination', title: 'Pagination' },
      { slug: 'server-side-pagination', title: 'Server Side Pagination' },
      { slug: 'sorting', title: 'Sorting' },
      { slug: 'all-the-slots', title: 'All the slots' },
      { slug: 'styling', title: 'styling' },
      { slug: 'aggregators-row-and-average-row', title: 'Aggregators row and average row' }
    ]

    return {
      pages
    }
  }
})
</script>
