import logo from './logo.svg';
import React from 'react';
import './styles/styles.css';
import Button from "./components/button/button";

function App() {
  return (
    <div className="App">
      <Button size="small" label="Маленькая кнопка" />
      <Button size="large" label="Большая кнопка" />
    </div>
  );
}

export default App;
