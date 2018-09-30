const initState = {
    posts: [
        { id: '1', title: 'come back soon', body: 'Lorem ipsum dolor sit amet.'},
        { id: '2', title: 'come back later', body: 'Lorem ipsum dolor sit amet.'}
    ]
}

const rootReducers = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        }) 
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducers