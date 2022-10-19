import React from 'react';
import { ContextDemoFC } from './Components/ContextDemo/ContextDemo';
import { ButtonThemeContextProvider } from './Contexts';

function App() {
  return (
    <div className="App">
      <ButtonThemeContextProvider>
        <ContextDemoFC />
      </ButtonThemeContextProvider>
    </div>
  );
}

export default App;
