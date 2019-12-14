import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Hello world!  Component</div>
                            <div className="card-body">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {

    ReactDOM.render(<Main />, document.getElementById('app'));
}
