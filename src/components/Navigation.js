import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Home';
import EasyStart from './EasyStart';
import MediumStart from './MediumStart';
import HardStart from './HardStart';
import Footers from './Footers';

export default function Navigation() {
return (
    <HashRouter basename="/">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/easy' element={<EasyStart />} />
            <Route path='/medium' element={<MediumStart />} />
            <Route path='/hard' element={<HardStart />} />
        </Routes>
        <Footers />
    </HashRouter>
)

}