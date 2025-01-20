const initialState = {
    liked: {
        content: []
    }
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                liked: {
                    ...state.liked,
                    content: state.liked.content.concat(action.payload),
                }
            }
        default: return state
    }
}

export default mainReducer