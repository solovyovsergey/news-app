import React, {useEffect} from 'react';
import {IArticle} from '../../models';
import {Article} from '../Article';
import {Counter} from '../Counter';

import './NewsList.css';

interface IProps {
    articles: IArticle[],
    onLoadNews: () => void;
    removeArticle: (id: number) => void;
}

export const Component: React.FC<IProps> = (
    {
        articles,
        onLoadNews,
        removeArticle
    }
) => {
    useEffect(() => {
        onLoadNews();
    }, []);

    const showArticle = (article: IArticle) =>
        <Article key={article.id} article={article} removeHandler={removeArticle}/>

    const mapArticles = () => articles.map(showArticle);

    return (
        <div className='news-list'>
            <ul className='collection'>
                {mapArticles()}
            </ul>
            <Counter count={articles.length}/>
        </div>
    );
}
