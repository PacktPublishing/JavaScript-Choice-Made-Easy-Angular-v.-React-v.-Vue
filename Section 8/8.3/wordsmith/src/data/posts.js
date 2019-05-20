import FirstPostContent from './posts-content/0'
import SecondPostContent from './posts-content/1'

const POSTS = [
  {
    id: 0,
    image: 'static/bearded-man-200.jpeg',
    title: 'FIRST BLOG POST',
    excerpt: `Blogging about programming gets more and more popular. Is it hard to begin writing? See for yourself.
    For the past year I have observed blogging trends. I’ll share with you my research. You can draw your own conclusions.
    Be careful! This is powerful knowledge. Please use it carefully and remember about this article when you’ll get to the top.
    Tips to become fulfilled blogger...`,
    date: '23 May 2017',
    content: FirstPostContent
  },
  {
    id: 1,
    image: 'static/rapper-200.png',
    title: 'SECOND BLOG POST',
    excerpt: `Hello, I’m humble developer who works with a lot of JavaScript frameworks, libraries, modules, addons, plugins, browsers, preprocessors, processors, postprocessors, plugins for processors (Autoprefixer), plugins for browsers (Ember inspector), plugins for libraries (jQuery), addons for frameworks.
    Isn’t it a lot of tools that we need to work with on daily basis? How big is your package.json file? Do you know what...`,
    date: '06 May 2017',
    content: SecondPostContent
  }
]

export default POSTS
