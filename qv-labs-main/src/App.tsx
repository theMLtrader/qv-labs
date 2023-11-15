import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Homepage from "pages/Homepage";
import ContactUs from "pages/ContactUs";
import {Box} from "@chakra-ui/react";
import {Header} from "components/Header";


const App = () => (
  <Box h="100vh">
      <Header />
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  </Box>
)

export default App;
