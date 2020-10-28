import {IArticle} from '../models';

export interface IState {
    loading: boolean;
    news: IArticle[];
    error: null | string;
};

export interface IAction {
    type: string;
    payload?: any;
};
