import logo from './logo.svg';
import './App.css';
import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import DatePicker from "react-datepicker";

function App() {
  var today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="no
          opener noreferrer"
        > */}

          {/* Learn React
        </a> */}
        <ReactBootStrap.InputGroup className="customdatepicker">

      
        <DatePicker

// inputProps={{readOnly: true}}

className="form-control"

selected={today}

onKeyDown={(e) => e.preventDefault()}

// ref={el => this.onDatepickerRef(el)}

// onChange={(evt) => {

//   props.data.setBoardData(evt);

// }}

showMonthYearPicker

dateFormat="yyyy-MM"

locale="ja"

// openToDate={

//   props.data.month_data

//     ? ""

//     : new Date(

//         new Date().getFullYear(),

//         new Date().getMonth() - 1,

//         new Date().getDate()

//       )

// }

></DatePicker>
</ReactBootStrap.InputGroup>
      </header>
    </div>
  );
}

export default App;
