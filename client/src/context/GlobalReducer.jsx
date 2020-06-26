export default (state, action) => {
    switch (action.type) {
        case "GET_TRANSACTIONS":
            return {
                ...state,
                isLoading: false,
                transactions: action.payload,
            };

        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction._id !== action.payload
                ),
            };
        case "ADD_TRANSACTION":
            return {
                ...state,
                error: null,
                transactions: [...state.transactions, action.payload],
            };
        case "REDDIT_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        case "TRANSACTION_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        case "GET_LOGIN_STATUS":
            return {
                ...state,
                loginStatus: action.payload,
            };
        case "SET_LOGIN_STATUS":
            return {
                ...state,
                loginStatus: action.payload,
            };
        default:
            return state;
    }
};
