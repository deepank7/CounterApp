import React, { useState } from 'react';
import { render } from 'react-dom';
const App = () => {
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            <h1>Counter Application</h1>
            <h3>Current Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount(count - 1)}>Decrement Count</button>
            <button onClick={() => setCount(0)}>Clear Count</button>
        </React.Fragment>
    );
}
render(<App />, document.getElementById('root'));