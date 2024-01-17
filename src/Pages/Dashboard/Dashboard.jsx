import React, { useState } from "react";
import "./Dashboard.css";
import {
  MdAccountCircle,
  MdArrowCircleLeft,
  MdArrowCircleRight,
  MdArrowLeft,
  MdGroups,
  MdHome,
  MdMoney,
  MdOutlineArrowLeft,
} from "react-icons/md";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

const Dashboard = () => {
  const [currPageName, setCurrPageName] = useState("home");
  const [toggle, setToggle] = useState(false);

  console.log("Side>>>>>>>>>>", toggle);

  const leftSec = () => {
    return (
      <>
        <div className="commonStyleItem">
          {toggle ? (
            <MdArrowCircleRight
              onClick={() => setToggle(!toggle)}
              style={{ fontSize: "2rem" }}
            />
          ) : (
            <MdArrowCircleLeft
              onClick={() => setToggle(!toggle)}
              style={{ fontSize: "2rem" }}
              className="toggleLeftIcon"
            />
          )}
        </div>
        <div
          className={`commonStyleItem ${
            currPageName === "home" && "selectedItemStyle"
          }`}
          onClick={() => setCurrPageName("home")}
        >
          <MdHome /> Home
        </div>
        <div
          className={`commonStyleItem ${
            currPageName === "profile" && "selectedItemStyle"
          }`}
          onClick={() => setCurrPageName("profile")}
        >
          <MdAccountCircle /> Profile
        </div>
        <div
          className={`commonStyleItem ${
            currPageName === "myTeam" && "selectedItemStyle"
          }`}
          onClick={() => setCurrPageName("myTeam")}
        >
          <MdGroups /> My Team
        </div>
        <div
          className={`commonStyleItem ${
            currPageName === "finances" && "selectedItemStyle"
          }`}
          onClick={() => setCurrPageName("finances")}
        >
          <MdMoney /> Finances
        </div>
      </>
    );
  };

  const currentPage = () => {
    if (currPageName === "home") return <Home />;
    else if (currPageName === "profile") return <Profile />;
  };

  return (
    <div className="dashboardContainer">
      <div className="topBarCont">HRM Point</div>
      <div className="bottomBarCont">
        <div className={`sideBarCont ${toggle && "sideBarContHide"}`}>
          {leftSec()}
        </div>
        <div className="mainBarCont">{currentPage()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
