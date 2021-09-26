import "./App.css";
import React, {useState} from "react";

function App() {
  const value = localStorage.getItem('coolNote');

  const [textArea, setText] = useState(value? value: '');
  
  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
            className="textarea is-large" 
            placeholder="Notes..."
            value={textArea} 
            onChange={(e) => {
              setText(e.target.value);
            }} />
          </div>
        </div>
        <button className="button is-large is-primary is-active" onClick={() => {
          localStorage.setItem('coolNote', textArea);
        }}>Save</button>
        <button className="button is-large" onClick={() => {setText('');}}>Clear</button>
      </div>
    </div>
  );
}

export default App;
