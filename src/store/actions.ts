import {IAction} from './interface';
import {IArticle, IData} from '../models';
import {store} from './index';
import {api} from '../service';
import {getMax} from '../utils';
import {
    ADD_NEWS,
    LOAD_NEWS_FAILURE,
    LOAD_NEWS_STARTED,
    LOAD_NEWS_SUCCESS,
    REMOVE_NEWS
} from './constants';


export const loadNews = () => async (dispatch: any) => {
    const url = `https://test-api-app-for-react.herokuapp.com/api/v1/news`;
    dispatch(loadNewsStarted());
    api<IData>(url)
        .then(data => dispatch(loadNewsSuccess<IArticle[]>([...data.articles])))
        .catch(err => dispatch(loadNewsFailure(err)));
}

const loadNewsStarted = (): IAction => ({
    type: LOAD_NEWS_STARTED
});

const loadNewsSuccess = <T>(data: T): IAction => ({
    type: LOAD_NEWS_SUCCESS,
    payload: data
});

const loadNewsFailure = (error: string): IAction => ({
    type: LOAD_NEWS_FAILURE,
    payload: {
        error
    }
});

export const removeNews = (id: number): IAction => {
    const news = store.getState().news
        .filter(value => value.id !== id);

    return {
        type: REMOVE_NEWS,
        payload: news
    }
}

export const addNews = (data: Omit<IArticle, 'id'>): IAction => {
    const news = [...store.getState().news];
    const maxId = getMax(news, 'id');
    const value = {...data, id: (maxId + 1)}

    return {
        type: ADD_NEWS,
        payload: value
    }
}
