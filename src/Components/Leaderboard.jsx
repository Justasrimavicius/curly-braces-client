import React, { useEffect } from 'react';
import { useState } from 'react';

import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Leaderboard() {

  const [userTestAnswers, setUserTestAnswers] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [username, setUsername] = useState(null);
  const [options, setOptions] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:8080/leaderboardData')
          .then(res=>{
            res.json()
              .then(finalData=>{
                setLeaderboardData(finalData);
              })
          })
          const userID = window.location.href.slice(-36,-12);
          fetch(`http://localhost:8080/user-${userID}`)
            .then(res=>{
              res.json()
                .then(finalData=>{
                  setUserTestAnswers(finalData.correctTestAnswers);
                  setUsername(finalData.username);
                })
            })

    },[])
  useEffect(()=>{
    if(leaderboardData!=null){
      console.log(leaderboardData);
      // line chart options
      setOptions({
        theme: "dark1",
        title: {
          text: ""
        },
        data: [{				
          type: "column",
          dataPoints: 
          leaderboardData.map((field,index)=>{
          return {label: `${leaderboardData[index][0]}`, y:leaderboardData[index][1]};
          })

        }]
      })
    }
  },[leaderboardData])




    return (
      <React.Fragment>
        <div className='leaderboard'>
          <h1>Your test score: {userTestAnswers}0%</h1>
          <h4>Take a look how you compare to others who took the test!</h4>
          {leaderboardData!=null ? <CanvasJSChart options={options}/> : null}
        <button onClick={()=>{window.location.href=window.location.href.slice(0,-12)}}>Go back</button>

        </div>
      </React.Fragment>

    );
}

export default Leaderboard;