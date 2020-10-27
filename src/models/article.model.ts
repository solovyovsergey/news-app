export interface IAuthor {
    name: string;
    lastname: string;
};

export interface IArticle {
    id: number;
    title: string;
    description: string;
    created_at: string;
    author: IAuthor;
};
