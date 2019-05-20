import ArticleDetails from '@/components/ArticleDetails'
import { mount } from 'vue-test-utils'
import router from '@/router'

describe('ArticleDetails.vue', () => {
  it('should display post details', () => {
    const POST_MESSAGE = 'Header of our content!'

    const EXAMPLE_POST = {
      title: 'Title',
      date: '6 May 2016',
      content: `# ${POST_MESSAGE}`
    }

    const wrapper = mount(ArticleDetails, {
      router,

      mocks: {
        $store: {
          getters: {
            getPostById () {
              return EXAMPLE_POST
            }
          }
        }
      }
    })

    expect(wrapper.vm.$el.querySelector('h1.post-title').textContent.trim()).to.equal(EXAMPLE_POST.title)
    expect(wrapper.vm.$el.querySelector('time').textContent.trim()).to.equal(EXAMPLE_POST.date)
    expect(wrapper.vm.$el.querySelector('.post-content').innerHTML.trim()).to.equal(
      `<h1>${POST_MESSAGE}</h1>`
    )

    console.log(wrapper.vm.$el)
  })
})
