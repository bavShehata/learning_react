import { useState } from 'react';

const Home = () => {
  //   let name = 'bavly';
  const [name, setName] = useState('Bavly');
  const handleClick = () => {
    alert('Hello Ninjas');
    setName('Luigi');
  };
  const handleClickAgain = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <div className="home">
      <h1>Dojo Blogs</h1>
      <p>Where all ninjas write their stuff, right {name}?</p>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          handleClickAgain(name);
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
