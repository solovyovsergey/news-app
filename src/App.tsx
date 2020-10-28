import React from 'react';
import {NewsList} from './Containers/NewsList';
import {Sidebar} from './Containers/Sidebar';

function App() {
    return (
        <div>
            <Sidebar/>
            <NewsList/>
        </div>
    );
}

export default App;
