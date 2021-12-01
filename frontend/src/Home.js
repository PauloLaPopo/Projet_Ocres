import React from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import Routes from './Routes';

// mettre nos widget avec header et footer
import Header from './Components/Header';
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2';
import Widget3 from './Components/Widget3';
import Widget4 from './Components/Widget4';
import Widget5 from './Components/Widget5';


class Home extends React.Component {

    render() {
        return (


            <div>
                {/*Header debut */}



                {/*Header fin */}

                <main>
                    <div className="container-fluid">
                        <div class="row">
                            <div class="col-md-5">
                                <Widget1 />
                            </div>
                            <div class="col-md-4">
                                <Widget2 />
                            </div>
                            <div class="col-md-3">
                                <Widget5 />
                                <Widget4 />
                            </div>
                        </div>
                    </div>
                </main>

                {/* <Footer /> */}

            </div>
        );
    }

}

export default Home;
