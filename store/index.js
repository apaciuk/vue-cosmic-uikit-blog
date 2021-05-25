import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
       state: {
           loadedPosts: [],
           token: null
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
           },
           setToken(state, token) {
               state.token = token
           }
       },
       actions: {
           // Init server
            nuxtServerInit(vuexContext, context) {
               {
                   return context.app.$axios.$get(process.env.BASE_URL + '/posts.json')
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
                };
                return this.$axios
                  .$post(
                    "https://nuxtblog-4e44e-default-rtdb.europe-west1.firebasedatabase.app/posts.json?auth=" +
                      vuexContext.state.token,
                    createdPost
                  )
                  .then(data => {
                    vuexContext.commit("addPost", { ...createdPost, id: data.name });
                  })
                  .catch(e => console.log(e));
              },
              // Edit Post
              editPost(vuexContext, editedPost) {
                return this.$axios
                  .$put(
                    "https://nuxtblog-4e44e-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
                      editedPost.id +
                      ".json?auth=" +
                      vuexContext.state.token,
                    editedPost
                  )
                  .then(res => {
                    vuexContext.commit("editPost", editedPost);
                  })
                  .catch(e => console.log(e));
            },
           // Set Post
           setPosts(vuexContext, posts) {
               vuexContext.commit('setPosts', posts)
           },
           // Authenticate
           authenticateUser(vuexContext, authData) {
            let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + 
            process.env.fbAPIKey
            if(!authData.isLogin) {
            authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + 
            process.env.fbAPIKey;
            }
            return this.$axios.$post(authUrl, {
             email: authData.email,
             password: authData.password,
             returnSecureToken: true 
            })
            .then(result => {
              vuexContext.commit('setToken', result.idToken )
            })
            .catch(e => console.log(e)); 
           }
    
       },
       getters: {
           loadedPosts(state) {
               return state.loadedPosts
           }
       }
    })
}
export default createStore