import React from 'react';
import './header.css';

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

                <nav class="navbar navbar-expand-sm py-3 navbar-light bg-white">

                    {/* Bouton pour le menu deroulant responsive sur mobile*/}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="mr-auto">
                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAEPC
                            AMAAADCoC6xAAABIFBMVEUJHD7N+wr///8AADAGGz0AAEAGwWcAADIAEDgJGj4GyGkGxWg
                            AACwJADvT/wWWm6YAFTpaY3arr7gJFT0AACr3+PkAFzsAACUITUgAET/W/wAAFj4JBjwcLE
                            xCS2EOIUMHiVeeo60Hj1gGuWUzQFoJEj0JDTwJIz8ADD/Cxs2Kj5wIaE8JADxIXzTf4OQIb1
                            DG8wsJJkCQtCIAACF+nihTbDK75hHI9grm5+kJLEEkNzqx2hZNZTNkgC5qhy0cLztudYVxjy
                            uMriUAAAAHl1sIVUoGo19cdjCWuyBRajKexR02SzcjNjovQziBoidEWzXN0NViaXpQWGwtQT
                            gAABAIQEYISUez3RanzhoqNU8JNEMHe1MIYEwIOEMHgVUGqmH+ARLlAAARoklEQVR4nO2dCV
                            fbuhKADXawHRxjQuLcLCQEyFoawr6vlwItBUK40FJo+f//4knykniTLSvgy7uec9pDlGB/kU
                            ejmZE0MOMfVpioAcILQF9jP6CsIXRW5T6cqKyGzjEfTrgYPQKJ0aOQGD0KidGjkBg9ConRo5
                            AYPQqJ0aOQGD0KidGjkBg9ConRo5AYPQqJ0aOQGD0KGTk6x4miqBaL+XyzlLBIqZnP14pFVR
                            RHc7ORoANctWaS5tXK0e717f7F4cm6ISdADi6+fr66PmoUm/pXydfo7kqPDiiW8kdXG4frN5c
                            /935sdrfkAhDZTWD7Vnfzx9630/XDr1cMDTs9euJ070dXNlHHgoj+PTYTkaIn1gvBcF2+wHWe
                            gpwaPbFRCAk+Jp8maMhp0fO7Ybt8bKybECNEVxPd0Ojy1yYVOR06l/gZnvwbnbpQooMhGpZ8bG
                            ynGCF66XN4RZdPaDudBr240g1Pvkdl0inRaRR9TL6iMumU6Il1CnJKk06H3qRQ9LHNJp1Jp0JX
                            ufCKPiZvUJp0GnQucUmhLtQmnQY9cUChLltHNpNeC2Xiw6EXv2+FJ3eY9PxtKHsTCp3OLtpNOp
                            f4sVkKMWxDoSdOKNTFYdLB1eTLEDNUGPTafXhwp0kvroDWwgH5yA2BziX2KDq9a9eNxDd0tXtid
                            Q+BjlUX12B6OK62e+nNfeR9yj+IAw9y9OJ3nDrs/fy2enNyeHCxsX91vfsdyO79/fXV1dXt1wuY
                            3bBbFy6hT23yDanKkKPj1AUMNySpZrOZzxcHUsvn881maSmRsl/txria/JlwiiVGTxxiyDdJn3r
                            tfhCsdBXlTdHVCk5diLMTiR+DjiD1D0jRdXvgKoVDUnVNHA5HiIQWkhBdtwfuff6NdF5ROdsl7M
                            7NCNFNe+AmXU4lI3c8QrKwjwx9YA9cOn2f1Al3PkKiYJsIvYjJdcmrpIouJjadl9mtvQ06zqSTx
                            2xuj5BEZUjQSxeYMUo6oTD5e7d+IFAZAnQRM0bJ1cXTiQtsZQjQcdmLbpFsJoQhovsjlH8G7YTg6
                            MUjzGR0USIkLza8QsTCxdKo0THzaIgQH5NR2KoFG/CB0fO3mKwu0SyIroablS+DdURQdFxoFCJrW
                            9zFpBQKt4G8uKDoOMMYZiEugblewAsGRHed+YxOIjbpiB2TPgv2GAOiY+JRzBjlFJZnWV5QXK6uq
                            hhPTm4E8OSCoYuKt2rKHisrnCDx/fZUtTp1vMhLguMGKdzcHGSkBkPHeIxe4TAv3bWyxtnKbKufE
                            RwXxUUtAVJ5gdAVTFS35RqOKrl21noytDOdsylBseF9VfmH/0gNhI7r9AO3uY+f7TiPtfaKto738
                            gVQtx/Ycweh0BXv7pE33dRFunM/k1vmrffGZV3917KDoGM6vfDZRSelY6/zxH0rO84tktf9RmoAd
                            Fynu7l57LT3WeiyVWcSJ5iJyc9ABkDHafq1Mx5TZjHHuLMVCw83nIexX9svBPBHVzzdU9fZiMv0M
                            OjjvYzlTvkrjHHfxTt1/uiYCMPt4qynomtyzFqvvup9dZ95yRddLHpO2G6PlGO38ejb1luJTcw8j
                            Z+XfNFx2XQXN13wsIsDubONVO/0q08E44eOcRldV8ullh96S7ICYHxSfLf7oTe9F0i3GKf14oSsH
                            3rW5olh0pj4bqdBX3GiK4t+5OPji7bkAWZOdTO+gdExz9NNYQQf+wLl2ObK5K/CGRmqYfrdMUz5KX
                            /0Kd5+C0zA5LxFcHSccXT2CVv1R6+ytl8qHnmS4zbOBJiSSPyAUOhM4tR7QDU802r+6Lg+cXhfoRS
                            GUTEOnneEHcT9wszV9oxJmGHKYJ0N78RGAHTMGq8jDlODGEenTRWb3gPqwCtVEijUwHS7Lb7jeN8p
                            aZt33gvXO1TouKV1e1Tt7wikJecdMOaRSmHw3W6zXgImRNKk71T1ousCBxJMeB0IHRtDWicNTnLJB
                            QxLJ+O8FSYjg1m6D5hCwnT7T7Jun3Z2OsYTwC2AB0NHO4W8rr5hXdHIYLW9lXHpGO/8N26/RNB0KW
                            at15YxUXF+b5Z3WsbmfqhOD5ykzmNW7+wjFWPbF53qwmCyAthNKkGXBqx7KGzstmCG73uR9x3uC1x
                            0CGNeCNBxawOy3fbyZVedyZYd3gt+NRa/MyjwMlgTc4rHkWQTVJdkTIt30Rac+1I4wC5pBkbH5jZl
                            +64ENXNns++d6YxbIk5teJtdn0R18HXT/DUG3bkrQZAWqyZ9tjUtuXU51gUo+GwVJ1lo956XxgpOt
                            5pT2MxT/3iq2r4ruy3IaP3hnbjz3aRBsr0hj9s+7bo7VBUE3mMZTLs7Ll3qt3pKsqkEayBDHXnBXN
                            F/8Z4EnUtsEqmMryiK91OU7/32IxHtQsKllMfGron3/mPGaIANNoTb1jAjVXZbm8FKE7djwn/Rlww
                            dM/WNaNuacTXflSTiLZreuxy6AvG2NdyupgCbg4k3xnrMqYUL33VOm7hvWzOuFmDHBCl6ccf9Af8k
                            tY3YDTZ7I9yZMRD3E0ky8T4k3LpjwWcBLCS6q8qQG/UabqNqsMOFIQ48OFXG4bD73xa3UdV9x8QI0
                            F1UJsgWENs1MNYl0BgNh+5QGXKTjklfBN+jGQa9uGJ1IYkLAog4Z0jGLGRQozMJSyRMvrUU608EmEc
                            p0C33Dr4J1/ztDewhm6Ao4dDF5uCJe21b85TiESZk8Q0waNGB02eehHKe7zKK8DTzA2kO1ejBxecEI
                            z7s2WrDujkeMJdYvVw9PV0/ObzY2P9syP4GPMV2err67ecmrswGydmDsOhGbsN5evTAvR6PKd7chEd
                            VQh/GL+503R6w9770AEI2QYQvgVCCCdqu/QHTnHQf28yTTBAUNTMSN7Js99KpCiMQHlWhQAculN2ki
                            0veMZs/OWE1CpoiK8VdexIAt4LgS0564pOqtI1qI8fFbP7opCc+R1kojuq8OHm0Mkp03PZi3z4nDm5
                            Hia7SmPStBnHubIToNCa98JXUcR4lOmYN0VdCVekZGTouDedLHirDPTJ0GpNOfppslOg1CpMu75Mm/
                            UaJTmPSC4Gj0TdBpygwRH6Gf6ToFCYduC6kp2xHik5h0mXywjCjRA9t0mW5cBG6kNYo0LnEplF1NSg
                            xLHIjdzf3LikKDI6k1yvfr283Tm5WL0G43+1ujckepW4hL6x1u/dt9ebw830DVpIJf9cRDdNivpnSC
                            ww3jnavr273Nw5O1tdvTk9PV1dXT09vblB24/Pt1f1RXi8wXKSskjzqws6cKCqwqnO+2Vyy1nXWckq
                            wsPOobhWX045AYvQoJEaPQmL0KCRGj0Ji9CgkRo9CYvQoJEaPQv4T6AILRMC1cAIrZXIZieX1Xd+K5
                            QODj3OsRRyb8jnepTE8unCXBjJcv0BrMU+Pcizfr7Z6251Wul3m4VEYpQw/0NY/IEwbH+cq1fSw2Io
                            icDzfdjTSoGvnd4cPF2stab1F4KeGSk5sQ2CtkoNR8oBvGx9XK9ZjHJZjv5wgHWftjW+KzpettTLav
                            HEczw0964kuGOdT3g2dtZ+imlVDobPlnrPxTdHNcjbZXqsFe207x/iitwwZHLYeOlX+Xug57bRjZxr
                            YF2Bkyukq74ue/VvSZTAgtc+8J7pSRndr5QTDKKL7+qDnnDdBJTey6XdEZ9HNtlnbGQW/Xs8gGT5RCA
                            udVDP9d0TPIKMwZT/W6KPrPSSd9PCvsW2G1X7tndBzSF/M894qD/RdCWphepZzv4LKvCv6GmIo68tZa
                            nmq1cuCV2HQGeZ90XMIxZi6NcbFoOidSNG1Ul/pjCt6z9JcHQzT2iyUp1n7AaR3RddnkifBiq4V0Mjq
                            hSa0k+7QQdDR11RN7Hd6V3T1SXv0DKI00TkJKUY7x0F38MkcEN52/S3Rp/7JaZLhhmdTCRn28exxLZfJ
                            5Ko6utHclkBjH30NVLDMsOv6pXK2IhpvhJ41ZJvnhtA5Xvcbs51eTxuDEF1/GsCz6envozJx+jA1r9Wz
                            sr8RuilZCzrwv+z14ZCpZNvWxhYqmGH3HG025p3RGaVorTeR1twZycLeklDju6NbCzRB9OoQOqNm+uYB
                            fFggVr+gVDa/UudYb7RHSXZ0FFxVR4euLk5bRNVbyuaWECEzO92GwWi/OFTZVsnM3k2l09XjRbORY6yX6
                            lt3lXCzsNGl7FBYdHjEe1iMFsXyER5F+JztF2GrMITCWS9l3w+D3vYvj/yfyMP86yRGj0Ji9CgkRo9CYv
                            Qo5P8YXZGkofdYCbitKiu51MDCiViyyIi23PmgK+VWK226U2y61ZpVFkETEbv4cDY/JGe/3Nlr9Xp9hGf
                            woNufNWtHwnzLrFDWc9CBZeav5OSQJB9mXMk/PT8/NwjY3wl9Ykg80FOv4Auu/CvRFwyZ8EA/Bx96H3QQa
                            FgrS6nKoIHjYO5F5Uz0ybMlURdGwxNngG7XwKuZmRn4P0JvoBfwXaj59RmKQnGe6IL01J8uC5IZzIDwDjT
                            wWo5d5XlelZSnCjdAT4kmO5Ra/XH5z/PLSqry8PDwa+bXw69XgA5+ftgBXyT16+XPnz+fHur1kaP/ra2zZ
                            dOzWvTLSdM9rYETYBybzbbUVlYvyaujD19XXHqBqj2ZnJh7TCaT86XzJBoP4Ofkc73263wSjezkwou3KQ2J
                            njbD+WMJkZsN2bKA1lVQ0siCPtTrYmreGLmTC+DfXOl80hjFk8ul3xPgFSAH/yX/eP6lsHDoqH/bbZSnuGP
                            1VGivfZyGCZYnRa/C3uvdDaHXGoaITGoOkE+CkTuBiCH6UK+nwPeYnDibm18A7yYfXQc1BXqPy/B85gmqjaq
                            ics53OZ6VVNDQy2mrWYs5PX1hM46vddQwefYrlWo8JxF66vHLX6D7J74A+V2HbWKqlFqaT04mz7wOFoZE72V
                            QBkKBucY0m9uGigM/pcDCpWVUArRszrg29IUS6ta51AzUnC9J1OszMymIXqkDE7MDmhYaKfDjzvn5+fyI0Y0
                            /qMIfw0Q5aOn8o62BrrXHx6sSQN8e1OPV0M3JdKG0g76ANv5SZ/BrADyEvoIGAvqG589fGqVSKuV5mjPkMDW4
                            OAl8j2Ibpnh12YYaA9A7g/QtQn/9tKzLpzrU/Tnd4tRekjZ0pr6sfdVkcmH+MUVlYfLGm3C5C6GbS1ecBFCfb
                            Pncjgs6sDB1XWqI9lm32DMP9l4HPy5PJLXxC1Td0yXz8xyh1hqrPSozbncEuAxoqgD0ztD+linWFX3w+hG8nt
                            eNnkuvg36vfzpbSCL85JnX+R8fdFSU3PizL2ilRdP1WT1PKMCV5bU+1HV9S5HEsryCRxfxus7MpJCsvMxB6zix
                            49HtfqEGtNjbWsFUFS0NaejpNfQL3FoHZs0zWc28M3CNQNCmJG+FqYsuFkZHbwB1qr8svL4+p4AbU0q9Tnobdt
                            8oCXZrD4RKrCSguV+369U1XhB4tCNjUUGPo5wRVEFitrcXFRf0ifOXT7os79SAxgBNAHa9ptt1iP4Kbf3Ly8tv
                            BrY9ppaA2V+g6HUmk0ZT5/GxPtUbs2mn3Z9Gf3WtLQGNh98qfffUh6sFHckNfWI41Ej9gX2dXFhIGrMpw5TO0M
                            QPZ1M41yZfz86gLzl5HlLXoQ0ZrLS0TOM4qCBchSNWZQdVeTuC6oo+HGqIS3M2HwaZGu17LNeXzvXvCt/26vQAG
                            QEuc6wtcW23/zYtzD9T2nJQZ1ojVDNt7UPZNvCDnegWAaEG0HHdc/zzgDxH8LH642tS8xzF1PKC5jlOzFe8XJgg
                            hF6I9foDCFWXvzCY9EGgPAz8s5No2yVaFue0/wUexBXc8IdAfGEkD6zr56JV9EY9SmIGTczgffQuVZT0b5YYPQqJ
                            0aOQGD0KidGjkBg9ConRo5AYPQqJ0aOQGD0KidGjkBg9ConRo5AYPQqJ0aOQGD0KMdBV7sOJqqGvsR9Q1hD6R5UPj
                            P4/vFZHptq6LyAAAAAASUVORK5CYII=" height="56" width="85" class="img-fluid" alt="   " />



                            <ul class="navbar-nav ">
                                <li class="nav-item active">
                                    {/*eslint-disable-next-line */}
                                    <a class="nav-link " href="#">Page principale <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="https://www.google.fr/">Notre API</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mx-auto">
                        <div class="text-success font-weight-bold px-5 py-2 rounded-pill border">
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


            </div >
        );
    }
}

export default Header;