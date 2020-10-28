import {connect} from 'react-redux';
import {IArticle} from '../models';
import {IState} from '../store';
import {loadNews, removeNews} from '../store/actions';
import {NewsListComponent} from '../Components/NewsList';


const mapStateToProps = (state: IState): { articles: IArticle[] } => ({
    articles: state.news
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLoadNews: (): void => {
            dispatch(loadNews());
        },
        removeArticle: (id: number) => {
            dispatch(removeNews(id));
        }
    };
}

export const NewsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsListComponent);
