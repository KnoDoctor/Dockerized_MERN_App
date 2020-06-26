export default (state, action) => {
    switch (action.type) {
        case "GET_REDDIT_DATA":
            return {
                ...state,
                redditData: action.payload,
                isLoading: false,
            };
        case "REDDIT_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
