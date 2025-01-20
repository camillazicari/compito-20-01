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
        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state,
                liked: {
                    ...state.liked,
                    content:
                        state.liked.content.filter((azienda) => {
                            if (azienda === action.payload) {
                                return false
                            } else {
                                return true
                            }
                        })
                }
            }
        default: return state
    }
}
export default mainReducer