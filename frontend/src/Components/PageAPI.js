import React from 'react';
import { useState, useEffect } from 'react';
import './PageAPI.css';
import Axios from 'axios';


function PageAPI() {

    const [Team1, SetTeam1] = useState("");
    const [Team2, SetTeam2] = useState("");
    const [ScoreTeam1, SetScoreTeam1] = useState(0);
    const [ScoreTeam2, SetScoreTeam2] = useState(0);
    const [Place, SetPlace] = useState("");
    const [ListMatchs, SetListMatchs] = useState([]) // [] car on return une array

    const addMatch = () => {
        Axios.post('http://localhost:3001/addMatch', {
            Team1: Team1,
            Team2: Team2,
            ScoreTeam1: ScoreTeam1,
            ScoreTeam2: ScoreTeam2,
            Place: Place
        }).then(() => {
            alert("CA MARCHEEEEEE FREESTILE");
        }).catch(() => {
            alert("marche pas ...");
        });
    };
    //useEffect fonction qui ce lance a chaque fois qu'on ouvre/ raffraichi une page

    useEffect(() => {
        Axios.get('http://localhost:3001/readMatch')
            .then((response) => {
                SetListMatchs(response.data);
            })
            .catch(() => {
                console.log("erreur pour afficher l'API");
            });
    }, []);

    return (
        <div className="global">

            <input type="text" placeholder="Nom équipe 1 ..."
                onChange={(event) => {
                    SetTeam1(event.target.value);
                }}
            />  <br /><br />

            <input type="text" placeholder="Nom équipe 2 ..."
                onChange={(event) => {
                    SetTeam2(event.target.value);
                }}
            />  <br /><br />
            <input type="number" placeholder="But équipe 1 ..."
                onChange={(event) => {
                    SetScoreTeam1(event.target.value);
                }}
            />  <br /><br />

            <input type="number" placeholder="But equipe 2 ..."
                onChange={(event) => {
                    SetScoreTeam2(event.target.value);
                }}
            />  <br /><br />

            <input type="text" placeholder="Emplacement du match ..."
                onChange={(event) => {
                    SetPlace(event.target.value);
                }}
            />  <br /><br />


            <button onClick={addMatch}> Ajouter un Match </button>


            {ListMatchs.map((valeur) => {
                return <div>
                    Equipe 1 :
                    {"  "}{valeur.Team1}{"  "}
                    Equipe 2 :
                    {"  "}{valeur.Team2}{"  "}
                    Score Equipe 1 :
                    {"  "}{valeur.ScoreTeam1}{"  "}
                    Score Equipe 2 :
                    {"  "}{valeur.ScoreTeam2}{"  "}
                    Emplacement du match:
                    {"  "}{valeur.Place}{"  "}
                </div>
            })}
        </div>
    )

}


export default PageAPI;