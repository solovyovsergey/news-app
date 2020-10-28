import {connect} from 'react-redux';
import {IArticle} from '../models';
import {addNews} from '../store/actions';
import {SidebarComponent} from '../Components/Sidebar';

const mapDispatchToProps = (dispatch: any) => {
    return {
        submit: (data: Omit<IArticle, 'id'>) =>
            dispatch(addNews(data))
    };
}

export const Sidebar = connect(
    null,
    mapDispatchToProps
)(SidebarComponent);
