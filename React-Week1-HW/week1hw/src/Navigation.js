import React from 'react';


export default class Navigation extends React.Component {
        render() {
            return (
                <div className="navdiv container  bgColor center rounded border border-primary">
                     <nav className="navbar navbar-expand-lg">
                        <a className="center navbar-brand" href="./">Visit New Hampshire</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavMarkup" aria-controls="navbarNavMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <a className="linkname nav-link" href="./">Home</a><span>    </span>
                                <a className="linkname nav-link" href="./">About</a><span>    </span>
                                <a className="linkname nav-link" href="./">Contact Us</a>
                        </div>
                        </nav>
                </div>
                )
        }
    }