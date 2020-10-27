import {IArticle} from './article.model';

export interface IFormData extends Omit<IArticle, 'id' | 'author' | 'created_at'> {
    name: string;
    lastname: string;
};
