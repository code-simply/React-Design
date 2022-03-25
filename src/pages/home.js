import React from "react";
import { BackIcon } from "../assests";
import { Card } from "../constants/card";
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import { Link } from "react-router-dom";


const Home = () => {

    const sampledata = {
        "title": "No. of Schools",
        "data": [
            { "index": "CBSE", "value": 13 },
            { "index": "international", "value": 15 }
        ]
    }
    const sampledata1 = {
        "title": "No. of Colleges",
        "data": [
            { "index": "Engineering", "value": 20 },
            { "index": "Medical", "value": 10 }
        ]
    }
    const sampledata2 = {
        "title": "No. of University",
        "data": [
            { "index": "Govt", "value": 9 },
            { "index": "Deemed", "value": 12 }
        ]
    }
    const sampledata3 = {
        "title": "No. of kindergarden schools",
        "data": [
            { "index": "", "value": 12 }
        ]
    }

    const data = {
        columns: [
            ['Colleges', 30, 20, 10, 40, 15, 25],
            ['University', 50, 20, 10, 40, 15, 25],
            ['School', 10, 25, 15, 30, 35, 40],
            ['Academy', 5, 15, 10, 30, 40, 25]
        ]

    };
    const size = {
        height: 240,
        width: 800
    }



    return (
        <div className="main__container">
            <div className="content__menu">
                <div className="breedcrumb">
                    <a href="#"><div className="backMenu"><BackIcon /><span style={{ color: "#000", fontSize: "16px" }}>Unnamed</span></div></a>
                    <div className="active"><a href="#edit">Edit</a></div>
                </div>
                <div className="step">
                    <hr />
                    <div className="step__menu">
                        <Link to="#all"><div className="step__btn"><p>All</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#all"><div className="step__btn"><p>Work</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#all"><div className="step__btn step_active"><p>Education</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#all"><div className="step__btn"><p>Health care</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#all"><div className="step__btn"><p>Transport</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#all"><div className="step__btn"><p>Shopping</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#all"><div className="step__btn"><p>F&B</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#all"><div className="step__btn"><p>Population</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#all"><div className="step__btn"><p>Heatmap</p> <span className="stepbutton"></span></div></Link>
                    </div>
                </div>
                <div className="card__area">
                    {Card(sampledata)}
                    {Card(sampledata1)}
                    {Card(sampledata2)}
                    {Card(sampledata3)}
                </div>
                <div className="chart__area">

                    <div className="chart__view">
                        <h3>Education</h3>
                        <C3Chart data={data} size={size} />
                    </div>
                    <div className="card__deatils">
                        <h4>All</h4>
                        <table>
                            <tr>
                                <td>Rating</td>
                                <td>4.3 - 4.9</td>
                            </tr>
                            <tr>
                                <td>Review</td>
                                <td>100 - 1500</td>
                            </tr>
                            <tr>
                                <td>Dist.Range</td>
                                <td>15 kms</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
