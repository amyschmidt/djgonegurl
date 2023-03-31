import { ReactElement } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from "theme"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "pages/Header";
import Home from "pages/Home";
import Upcoming from "pages/Upcoming";
import Mixes from "pages/Mixes";
import About from "pages/About";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="mixes" element={<Mixes />} />
            <Route path="about" element={<About />} /> 
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
};

export default App;