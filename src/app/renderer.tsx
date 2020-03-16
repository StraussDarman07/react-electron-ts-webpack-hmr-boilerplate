import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Root from "../components/root";

declare global
{
    const __static :string;
}

ReactDOM.render(<Root/>, document.getElementById('renderer'));