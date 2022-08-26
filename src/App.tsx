import React from 'react';
import './App.css';


function App() {
  return (
      <>
          <div className="row">
              <div className="col align-self-start">
                  One of three columns
              </div>
              <div className="col align-self-center">
                  One of three columns
              </div>
              <div className="col align-self-end">
                  One of three columns
              </div>
          </div>
          <div className="container main-box">
              <div className="row">
                  <div className="col align-self-center">
                      One of three columns
                  </div>
                  <div className="col align-self-center">
                      One of three columns
                  </div>
                  <div className="col align-self-center">
                      One of three columns
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
