import {IAction, IState} from './interface';
import {
    ADD_NEWS,
    LOAD_NEWS_FAILURE,
    LOAD_NEWS_STARTED,
    LOAD_NEWS_SUCCESS,
    REMOVE_NEWS
} from './constants';

const initialState: IState = {
    loading: false,
    news: [],
    error: null
};

export default function newsReducer(state = initialState, action: IAction) {
    switch (action.type) {
        case LOAD_NEWS_STARTED:
            return {
                ...state,
                loading: true
            };
        case LOAD_NEWS_SUCCESS:
        case REMOVE_NEWS:
            return {
                ...state,
                loading: false,
                error: null,
                news: [...action.payload]
            };
        case LOAD_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ADD_NEWS:
            return {
                ...state,
                news: [...state.news, action.payload]
            };
        default:
            return state;
    }
}
