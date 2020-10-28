import React from 'react';

import './Counter.css';

export const Counter: React.FC<{ count: number }> = ({count}) =>
    <div className={'counter'}>Count: {count}</div>;
