import React, {useState} from 'react';
import Header from './components/Header';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);
  
  const toggleTheme = () => {
    setTheme(theme.title ==='light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div >
        <GlobalStyles/>
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
