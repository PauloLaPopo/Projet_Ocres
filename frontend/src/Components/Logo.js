import React from 'react';

import club1 from '../Images/AS_Saint-Etienne.png';
import club2 from '../Images/FC_Nantes_logo.png';
import club3 from '../Images/FC-Metz.png';
import club4 from '../Images/Girondins_de_Bordeaux.png';
import club5 from '../Images/Logo_AS_Monaco_FC.png';
import club6 from '../Images/Logo_Clermont_Foot.png';
import club7 from '../Images/Logo_estac_troyes.png';
import club8 from '../Images/Logo_FC_Lorient.png';
import club9 from '../Images/Logo_LOSC_Lille.png';
import club10 from '../Images/Logo_OGC_Nice.svg.png';
import club11 from '../Images/Logo_Olympique_de_Marseille.svg.png';
import club12 from '../Images/Logo_RC_Lens.png';
import club13 from '../Images/Logo_SCO_Angers.png';
import club14 from '../Images/Logo_Stade_Brestois.png';
import club15 from '../Images/Logo_Stade_de_Reims.png';
import club16 from '../Images/Logo_Stade_Rennais.png';
import club17 from '../Images/Montpellier_Herault.png';
import club18 from '../Images/Olympique_lyonnais_logo.png';
import club19 from '../Images/Paris_Saint-Germain_Logo.svg.png';
import club20 from '../Images/Racing_Club_de_Strasbourg.png';




class Logo extends React.Component {

    logo(team_name) {
        if (team_name === "Paris SG") {
            return (
                club19
            )
        }
        else if (team_name === "Lens") {
            return (
                club12
            )
        }
        else if (team_name === "Nice") {
            return (
                club10
            )
        }
        else if (team_name === "Marseille") {
            return (
                club11
            )
        }
        else if (team_name === "Rennes") {
            return (
                club16
            )
        }
        else if (team_name === "Angers") {
            return (
                club13
            )
        }
        else if (team_name === "Nantes") {
            return (
                club2
            )
        }
        else if (team_name === "Monaco") {
            return (
                club5
            )
        }
        else if (team_name === "Lyon") {
            return (
                club18
            )
        }
        else if (team_name === "Lille") {
            return (
                club9
            )
        }
        else if (team_name === "Lorient") {
            return (
                club8
            )
        }
        else if (team_name === "Montpellier") {
            return (
                club17
            )
        }
        else if (team_name === "Clermont") {
            return (
                club6
            )
        }
        else if (team_name === "Troyes") {
            return (
                club7
            )
        }
        else if (team_name === "Reims") {
            return (
                club15
            )
        }
        else if (team_name === "Bordeaux") {
            return (
                club4
            )
        }
        else if (team_name === "Brest") {
            return (
                club14
            )
        }
        else if (team_name === "Metz") {
            return (
                club3
            )
        }
        else if (team_name === "St Etienne") {
            return (
                club1
            )
        }
        else if (team_name === "Strasbourg") {
            return (
                club20
            )
        }
    }
    render() {
        return (
            <img src={this.logo(this.props.team_name)} height="22" width="22" class="img-fluid" alt="" />
        )
    }

}
export default Logo;