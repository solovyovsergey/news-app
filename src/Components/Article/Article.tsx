import React from 'react';
import {IArticle} from '../../models';
import {formatAuthor, formatDate} from '../../utils';
import {Button} from '../Button';

import './Article.css';

interface IComponent {
    article: IArticle;
    removeHandler: (id: number) => void;
};

export const Article: React.FC<IComponent> = ({article, removeHandler}) => {
    const icon = <i className='material-icons'>delete</i>;
    const onClick = (): void => {
        removeHandler(article.id);
    }
    return (
        <li className='article collection-item avatar'>
            <span className='title'>{article.title}</span>
            <p className='description'>{article.description}</p>
            <Button icon={icon} onClick={onClick} className='btn'/>
            <div className='info'>
                <span>{formatAuthor(article.author)}</span>
                <span>{formatDate(article.created_at)}</span>
            </div>
        </li>
    );
}
