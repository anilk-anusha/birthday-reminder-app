import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // Array of objects are stored in data.js file -- using hooks we retrive the data from the other file to use it here
  const [people, setPeople] = useState(data);

  return <main>
    <section className='container'>
      <h3>0 birthday</h3>
      {/* Setting up the static data - list component */}
      <List />
      <button onClick={() => console.log('You have clicked me :) ')}>Clear All</button>
    </section>
  </main>;
}

export default App;
