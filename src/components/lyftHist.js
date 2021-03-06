import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLyftHistory, selectHistory } from '../actions/index.js';
import LyftHistItem from './lyftHistItem';
import moment from 'moment';


const LyftHist = (props) => {
  if (!props.history[0]) {
    return <div> Loading...</div>
  }

  const histItem = props.history.map((ride, index) => {
    return (
      <LyftHistItem 
        onRowSelect={props.onHistorySelect}
        key={ride.ride_id} 
        ride={ride} 
      />  
    )
  });

  return (
       <div className="divContainer">  
        {histItem}
      </div>
  );
};

export default LyftHist;
