import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";

import { Home } from "views/Home";
import { Schedule } from "views/Schedule";
import { Travel } from "views/Travel";
import { FAQ } from "views/FAQ";
import { Registry } from "views/Registry";

const AppLayout = () => (
  <>
    <main className="mb-4">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-day" element={<Schedule time={'DAY'} />} />
        <Route path="/the-night" element={<Schedule time={'NIGHT'} />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/registry" element={<Registry />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default AppLayout;
