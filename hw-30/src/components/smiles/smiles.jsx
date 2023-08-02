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
    setData(prevValue => {
        return [...prevValue].map((item) => {
            if (item.id === currentId) {
                return {
                    ...item,
                    clicks: item.clicks + 1
                };
            }
            return item;
        });
    })
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
};

const onReset = () => {
    setWinner(null);
    setClick(null);
    setData(Data)
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
            <div className="btns-wrapper">
             <button onClick={winnerClick}>Who's the winner!</button>
             <button onClick={onReset}>Reset</button>
            </div>
            <h2>{ click > 0 ? `With ${click} votes wins ${winner}!!!` : "" }</h2> 
        </div>
    )
};

export default Smiles;