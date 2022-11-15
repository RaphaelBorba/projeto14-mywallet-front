import { GlobalStyle } from './Assets/GlobalStyles/ResetCss'
import { colors } from './Assets/GlobalStyles/colors'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingInPage from './Pages/Sing-in/SingInPage';
import SingUnPage from './Pages/Sing-up/SingUpPage';
import HomePage from './Pages/Home/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle colors={colors} />

        <Routes>
          <Route path='/' element={<SingInPage />} />
          <Route path='/sing_up' element={<SingUnPage />} />
          <Route path='/home' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
