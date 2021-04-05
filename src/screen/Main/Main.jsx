import React from "react";
import Header from "../../components/Header/Header";
import BioPage from "../Bio/BioPage";
import "./Main.css";

export default function Main() {
  const onclick = () => {};
  return (
    <div className="bio-page">
      <Header />
      <BioPage/>
    </div>
  );
}
