import logo from './logo.svg';
import './App.css';

import React from 'react';
import Post from './component/template.js';
import './component/template.css';

const pData = [
   { 
     name: "Anakin Skywalker",
     photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
     nickname: "@dart_vader",
     date: "26 февр.",    
     content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
     image: "./img/sw9_ReySabre-laser.jpg",    
     message: 482,
     reTweet: 146,
     like: 887    
   },
   // { 
   //   name: "Emperor Palpatine",
   //   photo: "./img/sheevPalpatine-ava.jpg",
   //   nickname: "@sheva-imperator",
   //   date: "17 apr.",   
   //   content: "That woman could turn any Ewok into a Wookie.", 
   //   image: "./img/sw9_PadmeAmidala-pictol.jpg",    
   //   message: 321,
   //   reTweet: 97,
   //   like: 784    
   // },
   // { 
   //   name: "Princess/General Leia Organa",
   //   photo: "./img/leiaOrgana-ava.jpg",
   //   nickname: "@princess-Leia",
   //   date: "25 sep.",    
   //   content: "What if you took Han Solo and gave him no depth?",
   //   image: "./img/sw9_PoeDameron-jet.jpg",    
   //   message: 296,
   //   reTweet: 138,
   //   like: 754    
   // }
 ];

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
   return (
     <div className="App">
       { pData.map(post => <Post {...post} /> )}
     </div>
   );
 }


export default App;
