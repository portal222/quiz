import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Home';
import EasyStart from './EasyStart';
import MediumStart from './MediumStart';
import HardStart from './HardStart';
import Footers from './Footers';
import EasyOption from './EasyOption';
import MediumOption from './MediumOption';
import HardOption from './HardOption';

export default function Navigation() {
return (
    <HashRouter basename="/">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/easy' element={<EasyStart />} />
            <Route path='/medium' element={<MediumStart />} />
            <Route path='/hard' element={<HardStart />} />
            <Route path='/option/:event' element={<EasyOption />} />
            <Route path='/option2/:event' element={<MediumOption />} />
            <Route path='/option3/:event' element={<HardOption />} />
        </Routes>
        <Footers />
    </HashRouter>
)

}