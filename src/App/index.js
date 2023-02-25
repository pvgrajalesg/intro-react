import React from 'react';
import './App.css';
import { TodoProvider } from '../TodoContext';
import {AppUI} from './AppUI';

/*const todosDefault = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];*/

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
