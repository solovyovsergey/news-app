import React, {useEffect, useState} from 'react';
import {IArticle, IData} from '../../models';
import {Article} from '../Article';
import {Counter} from '../Counter';

import './NewsList.css';

export const NewsList: React.FC = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);

    const api = async <T extends {}>(url: string): Promise<T> => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json: { data: T } = await response.json();
        return json.data;
    }

    useEffect(() => {
        const url = `https://test-api-app-for-react.herokuapp.com/api/v1/news`;
        api<IData>(url)
            .then(data => setArticles([...data.articles]))
            .catch(err => console.log(err));
    }, []);

    const removeArticle = (id: number): void =>
        setArticles(
            [...articles
                .filter(article => article.id !== id)]
        );

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
