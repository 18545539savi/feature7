import React from "react";
import { Container } from "reactstrap";
import Footer from "./../components/footer/footer";
import TopMenu from "../components/top-menu/top-menu";
import Report from "./../components/form/report";



const flagging = ({ history }) => (
  <>
    <TopMenu />
    <br />
    <br />
    <Report />
    <br />
    <br />
    
      
    <Footer />
  </>
);

export default flagging;