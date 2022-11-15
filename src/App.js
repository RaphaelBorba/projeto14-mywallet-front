import { GlobalStyle } from './Assets/GlobalStyles/ResetCss'
import { colors } from './Assets/GlobalStyles/colors'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle colors={colors} />

        <Routes>
          <Route path='' element={} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
