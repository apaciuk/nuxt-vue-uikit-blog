import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
       state: {
           loadedPosts: []
       },
       mutations: {
           setPosts(state, posts) {
               state.loadedPosts = posts
           },
           addPost(state, post) {
               state.loadedPosts.push(post)
           },
           editPost(state, editedPost) {
               const postIndex = state.loadedPosts.findIndex(
               post => post.id === editedPost.id
               );
               state.loadedPosts[postIndex] = editedPost
           }
       },
       actions: {
           // Init server
            nuxtServerInit(vuexContext, context) {
               {
                   return $axios.$get(process.env.BASE_URL + '/posts.json')
                   .then(res => {
                    const postsArray = [];
                    for (const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key })
                   }
                   vuexContext.commit('setPosts', postsArray)
                
               }) 
               .catch (e =>  context.error(e));
               }
            },
            // Add Post
            addPost(vuexContext, post) {
            const createdPost = {
                ...post,
                updatedDate: new Date()
            }
            return $axios.$post(process.env.BASE_URL + '/posts.json', createdPost )
            .then(result => {
                vuexContext.commit('addPost', {...createdPost, id: result.data.name } )
                })
                .catch(e => console.log(e))
           },
           // Edit Post
           editPost(vuexContext, editedPost) {
            return $axios.$put(process.env.process.env.BASE_URL + '/posts/' +
              editedPost.id +
              ".json", editedPost)
              .then(res => {
                 vuexContext.commit('editPost', editedPost)
              })
              .catch(e => console.log(e))
           },
           // Set Post
           setPosts(vuexContext, posts) {
               vuexContext.commit('setPosts', posts)
           }
       },
       getters: {
           loadePosts(state) {
               return state.loadedPosts
           }
       }
    })
}
export default createStore