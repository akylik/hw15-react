import React from 'react';

import Post from './component/template.js';

import './App.css';
import './component/template.css';

const postData = [
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
 ];

function App() {
   return (
     <div className="App">
       { postData.map(post => <Post {...post} /> )}
     </div>
   );
 }

export default App;
