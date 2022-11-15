import { GlobalStyle } from './Assets/GlobalStyles/ResetCss'
import { colors } from './Assets/GlobalStyles/colors'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingInPage from './Pages/Sing-in/SingInPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle colors={colors} />

        <Routes>
          <Route path='/' element={<SingInPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
