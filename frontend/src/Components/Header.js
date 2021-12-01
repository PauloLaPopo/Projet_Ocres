import React from 'react';
import './header.css';
import Logo from '../images/Logo_LIGUE1.png';
import { Link } from 'react-router-dom';
import Routes from '../Routes';

class Header extends React.Component {

    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <title>Header</title>

                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" /> {/*permet de controler la mse en page et de pas zoomer*/}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                <header>
                    <nav class="navbar navbar-expand-sm py-3 navbar-light bg-white">

                        {/* Bouton pour le menu deroulant responsive sur mobile*/}
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="mr-auto">
                            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                <img src={`${Logo}`} height="40" width="65" class="img-fluid" alt="" />
                                <ul class="navbar-nav ">
                                    <li class="nav-item active">
                                        {/*eslint-disable-next-line */}
                                        <Link to="/">Home</Link>
                                        {/*<a class="nav-link " href="#">Page principale <span class="sr-only">(current)</span></a>*/}
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/pageAPI">Notre API</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mx-auto">
                            <div class="px-5 py-2 rounded-pill border">
                                <div class="titre"> DASBOARD LIGUE 1</div>
                            </div>
                        </div>
                        <div class="ml-auto">
                            <form class="form-inline">
                                <a class="navbar-brand" href="https://www.google.fr/">
                                    Admin
                                </a>
                            </form>
                        </div>
                    </nav >
                </header>
                <Routes />

            </div >
        );
    }
}

export default Header;