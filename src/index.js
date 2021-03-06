import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import * as themes from './theme/schema.json';
import {setToLS} from './util/storage';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
    setToLS('all-themes', themes.default);
    return (
        <Main/>
    )
}

ReactDOM.render(<Index/>, document.getElementById("root"));