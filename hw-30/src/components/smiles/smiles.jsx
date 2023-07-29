import React, { useState } from "react";
import './smiles.css'

const Data = [
    {
        id: "1",
        smile: "😁",
        description: "Grinning face.",
        clicks: 0,
    },
    {
        id: "2",
        smile: "😉",
        description: "Winking face.",
        clicks: 0,
    },
    {
        id: "3",
        smile: "😡",
        description: "Pouting face.",
        clicks: 0,
    },
];

function Smiles () {
const [data, setData] = useState(Data);
const [winner, setWinner] = useState(null);
const [click, setClick] = useState(null);

const clickedSmile = (currentId) => {
    const appData = [...data];
    const smile = appData.find((item) => item.id === currentId);
        smile.clicks += 1;
        setData(appData);
};

const maxClicks = Math.max(...data.map((smile) => smile.clicks));
const winnerItem = data.filter((smile) => smile.clicks === maxClicks && smile.clicks !== 0).length;
const result = data.find((smile) => smile.clicks === maxClicks);

const winnerClick = () => {
    if (winnerItem > 1) {
        alert("We have more than one winner, so let's start from the beginning.");
        window.location.reload();
    }
    setWinner(result.smile);  
    setClick(maxClicks); 
    const reloadPage = () => {
        window.location.reload()
    } 
    setTimeout( reloadPage , 3500)      
};

    return (
        <div className="smileContainer">
            <h2>Leave your vote for one of the smiles. And find out who will be the winner!</h2>
            <ul className="smileBox">
            {Data.map((smile) => (
                <li className="smileItem" key={smile.id} onClick={() => clickedSmile(smile.id)}>
                    <p>{smile.smile}</p>
                    <p>{smile.description}</p> 
                </li>
            ))}
            </ul>
            <button onClick={winnerClick}>Who's the winner!</button>
            <h2>{ click > 0 ? `With ${click} votes wins ${winner}!!!` : "" }</h2> 
        </div>
    )
};

export default Smiles;