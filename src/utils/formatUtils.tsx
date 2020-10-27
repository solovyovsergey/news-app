import {IAuthor} from '../models';

export const formatDate = (date: string): string =>
    date ? new Date(date).toDateString() : '';

export const formatAuthor = ({lastname, name}: IAuthor): string =>
    `${lastname} ${name}`;
