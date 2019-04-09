import React from "react";
import ReactDOM from "react-dom";
import Main from "@/js/components/Main";
import  "@/scss/style.scss";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

ReactDOM.render(<Main/>, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}