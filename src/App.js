import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // Array of objects are stored in data.js file -- using hooks we retrive the data from the other file to use it here
  const [people, setPeople] = useState(data);

  return <main>
     
    <section className='container'>
    <h2>Welcome to the birthday Reminder App</h2>
      <h3>Today there are {people.length} birthdays and here is the list:</h3>
      {/* Setting up the static data - list component */}
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
      <button onClick={() => window.location.reload(false)}>Reset Page</button>
    </section>

  </main>;
}

export default App;

// REF: https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react#:~:text=What%20is%20this%3F&text=import%20React%20from%20'react'%3B,refreshPage%7D%3EClick%20to%20reload! 
// REL: https://www.freecodecamp.org/news/toggle-elements-in-react-using-hooks/