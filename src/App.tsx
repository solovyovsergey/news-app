import React from 'react';
import {NewsList} from './Components/NewsList';
import {Sidebar} from './Components/Sidebar';

function App() {
    const onSubmit = (data: any): void => {

        console.log('a', data);
    }
    return (
        <div>
            <Sidebar onSubmit={onSubmit}/>
            <NewsList/>
        </div>
    );
}

export default App;
