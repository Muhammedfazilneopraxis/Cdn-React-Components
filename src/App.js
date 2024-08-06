import React, { useEffect, useState } from 'react';

const App = () => {
  const [MyComponent, setMyComponent] = useState(null);

  useEffect(() => {
    if (window.React) {
      console.log('React version:', window.React.version);
    }
    if (window.ReactDOM) {
      console.log('ReactDOM version:', window.ReactDOM.version);
    }
    if (window.MyComponent) {
      console.log('window MyComponent is here', window.MyComponent);
      setMyComponent(() => window.MyComponent.Button);
    }
  }, []);

  return (
    <div className="App">
      {MyComponent ? <MyComponent /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
