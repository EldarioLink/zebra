import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import helpers from '@/helpers'
import type { Common } from '@/types/common'

//*===🍃===🍃===🍃===🍃===🍃===🍃===🍃===🍃===🍃===🍃===🍃===🍃Constants
const newsApi = 'https://flems.github.io/test/api/news/'

export const newsStore = defineStore('newsStore', () => {
  const loading = ref(false)
  const justLoadedNews = ref<Common.Cards>([])
  const allNews = ref<Common.Cards>([])
  const currentPage = ref<number>(1)
  const err = ref<boolean>(false)

  //*===🌐===🌐===🌐===🌐===🌐===🌐===🌐===🌐===🌐===🌐===🌐===🌐Methods

  async function loadNews(page: number) {
    loading.value = true
    try {
      const response = await axios.get(`${newsApi}${page}`)
      if (!response.data.items.length) err.value = true
      justLoadedNews.value = response.data.items
      justLoadedNews.value.map((news: any) => {
        news['id'] = helpers.getUniqNumber()
        news['date'] = helpers.getDate(news.date)
      })

      allNews.value = [...allNews.value, ...justLoadedNews.value]
    } catch (error: any) {
      console.log(error)
      err.value = true
    } finally {
      loading.value = false
    }
  }

  function loadMoreNews() {
    currentPage.value++
    loadNews(currentPage.value)
  }

  return {
    loading,
    justLoadedNews,
    allNews,
    err,
    loadNews,
    loadMoreNews
  }
})
