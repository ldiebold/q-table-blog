
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'setup-data-columns', component: () => import('pages/SetupDataColumns.vue') },
      { path: 'selectable-rows', component: () => import('pages/SelectableRows.vue') },
      { path: 'expandable-rows', component: () => import('pages/ExpandableRows.vue') },
      { path: 'loading-state', component: () => import('pages/LoadingState.vue') },
      { path: 'pagination', component: () => import('pages/Pagination.vue') },
      { path: 'server-side-pagination', component: () => import('pages/ServerSidePagination.vue') },
      { path: 'sorting', component: () => import('pages/Sorting.vue') },
      { path: 'all-the-slots', component: () => import('pages/AllTheSlots.vue') },
      { path: 'styling', component: () => import('pages/Styling.vue') },
      { path: 'aggregators-row-and-average-row', component: () => import('pages/AggregatorsRowAndAverageRow.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
