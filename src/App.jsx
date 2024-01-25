import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import QuoteFetcherLoader from "./QuoteFetcherLoader";

function App() 
{
  const headerStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    margin: '20px 0',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',

  };

  const cardStyle = {
    width: '25rem',  // Adjust the width as needed
    margin: '10px',
    backgroundColor: '#f8f9fa', 
    border: '1px solid yellow', 
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

  };

  return (
    <div className="App">

      <div style={headerStyle}>
        <h1>INSPIRATIONAL QUOTES</h1>
      </div>

      <hr />
      <div style={cardContainerStyle}>

        <div className="card text-white bg-primary" style={cardStyle}>
          <div className="card-body">
            <h5 className="card-title">Quote</h5>
            <QuoteFetcherLoader />
          </div>
        </div>

        <div className="card text-white bg-success" style={cardStyle}>
          <div className="card-body">
            <h5 className="card-title">Quote</h5>
            <QuoteFetcherLoader />
          </div>
        </div>

        <div className="card text-white bg-info" style={cardStyle}>
          <div className="card-body">
            <h5 className="card-title">Quote</h5>
            <QuoteFetcherLoader />
          </div>
        </div>

      </div>
      </div>
  );
}

export default App;
