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
            alert(" match ajouté");
            SetListMatchs([...ListMatchs, { Team1: Team1, Team2: Team2, ScoreTeam1: ScoreTeam1, ScoreTeam2: ScoreTeam2, Place: Place }]);
            // ... list matchs correspond a tous les matchs dans la database + on ajoute celui qu'on vient de saisir à l'ecran
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

    const modifierMatch = (id) => {
        const newTeam1 = prompt("Enter new team: ");

        Axios.put('http://localhost:3001/updateMatch', {
            newTeam1: newTeam1,
            id: id
        });
    };


    const supprimerMatch = (id) => {

        Axios.delete(`http://localhost:3001/deleteMatch/${id}`).then(() => {
            SetListMatchs(
                ListMatchs.filter((valeur) => {
                    console.log(valeur._id);
                    return valeur._id !== id;
                })
            );
        });
        alert(" match supprimé");
    };

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

            <div className="ListMatchs">
                {ListMatchs.map((valeur) => {
                    return (
                        <div className="MatchContainer">
                            <div className="Matchs">

                                <div className="size">Team 1 : {valeur.Team1} </div>
                                <div className="size">Team 2 : {valeur.Team2}</div>
                                <div className="size">But {valeur.Team1} : {valeur.ScoreTeam1} </div>
                                <div className="size">But {valeur.Team} : {valeur.ScoreTeam2} </div>
                                <div className="size">Emplacement match: {valeur.Place} </div>
                            </div>
                            <button onClick={() => {
                                modifierMatch(valeur._id);
                            }}>Update</button>

                            <button id="btn" onClick={() => {
                                supprimerMatch(valeur._id);
                            }}>X</button>

                        </div>
                    );
                })}
            </div>
        </div>
    )


}


export default PageAPI;