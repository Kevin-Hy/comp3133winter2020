import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';

function App() {
  return (
    <div>
      <AddStudent />
      <StudentList />
    </div>
  );
}

export default App;
