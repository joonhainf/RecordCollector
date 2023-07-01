import React, { useState } from 'react';
import './App.css';
import JsonDataDisplay from './geekdata.jsx';

function App() {
  //Use state has two components, the state and the state updater
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [company, setCompany] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [university, setUniversity] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  

  //Sets the comment const to whatever the event is referencing the set function
  const handleInputChange = (event, setInputValue) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = () => {
    // You can perform any logic here to handle the submitted comment
    // For now, let's just log the comment to the console
    const data = {
      name,
      age,
      occupation,
      company,
      educationLevel,
      university,
      salary,
      location,
    };

    // Turn data into JSON string
    const jsonData = JSON.stringify(data);

    // Instantiate Blob object
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Generate a unique file name
    const fileName = `data_${Date.now()}.json`;

    // Make a temporary link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // When clicked it downloads
    link.click();

    // Clean up
    URL.revokeObjectURL(link.href);
    link.remove();
    setName('');
    setAge('');
    setOccupation('');
    setCompany('');
    setEducationLevel('');
    setUniversity('');
    setSalary('');
    setLocation('');
  };


  //Look at the logic of the code, make sense?
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Record Collector</h1>
        <p>Give me some data to mess around with. Input your career details below.</p>
        <div className="input-container">
          <div className="input-row">
            <input type="text" value={name} onChange={(event) => handleInputChange(event, setName)} placeholder="Name Here" />
          </div>
          <div className="input-row">
            <input type="text" value={age} onChange={(event) => handleInputChange(event, setAge)} placeholder="Age Here" />
          </div>
          <div className="input-row">
            <input type="text" value={occupation} onChange={(event) => handleInputChange(event, setOccupation)} placeholder="Occupation Here" />
          </div>
          <div className="input-row">
            <input type="text" value={company} onChange={(event) => handleInputChange(event, setCompany)} placeholder="Company Here" />
          </div>
          <div className="input-row">
            <input type="text" value={educationLevel} onChange={(event) => handleInputChange(event, setEducationLevel)} placeholder="Education Level Here" />
          </div>
          <div className="input-row">
            <input type="text" value={university} onChange={(event) => handleInputChange(event, setUniversity)} placeholder="University Here" />
          </div>
          <div className="input-row">
            <input type="text" value={salary} onChange={(event) => handleInputChange(event, setSalary)} placeholder="Salary Here" />
          </div>
          <div className="input-row">
            <input type="text" value={location} onChange={(event) => handleInputChange(event, setLocation)} placeholder="Location Here" />
          </div>
          <div className="input-row">
            <button onClick={handleSubmit}>Submit Data, Save as JSON</button>
          </div>
        </div>
        <JsonDataDisplay />
      </header>
    </div>
  );
}


export default App;
