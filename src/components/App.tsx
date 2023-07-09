/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import './App.css'
import AppRouter from './Router'
import { authService } from 'fBase';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} ToDoList</footer>
    </>
  )
}

export default App
