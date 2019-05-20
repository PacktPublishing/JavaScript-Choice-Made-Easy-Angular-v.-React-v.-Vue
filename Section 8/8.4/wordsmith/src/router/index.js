import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ArticleDetails from '@/components/ArticleDetails'
import AddArticle from '@/components/AddArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:post_id',
      name: 'ArticleDetails',
      component: ArticleDetails
    },
    {
      path: '/add-post',
      name: 'AddArticle',
      component: AddArticle
    }
  ]
})
