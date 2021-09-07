import Home from './home';
import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #7b1fa2;
  }

`;


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
