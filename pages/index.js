import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SectionCharacter from "components/SectionCharacter";
import SectionCar from "components/SectionCar";
import SectionMap from "components/SectionMap";
import SectionSpecialMod from "components/SectionSpecialMod";
import SectionSource from "components/SectionSource";
import Header from "components/Header";
export default function Index() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <SectionSource />
      <div id="section-character">
        <SectionCharacter />
      </div>
      <div id="section-car">
        <SectionCar />
      </div>
      <div id="section-map">
        <SectionMap />
      </div>
      <div id="section-special">
        <SectionSpecialMod />
      </div>
    </>
  );
}
