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
          <MdArrowCircleLeft
            onClick={() => setToggle(!toggle)}
            className={`arrow-icon ${toggle ? "rotate" : ""}`}
          />
        </div>

        <div
          className={`commonStyleItem ${
            currPageName === "home" && "selectedItemStyle"
          } ${toggle && "commonStyleItemHide"} `}
          onClick={() => setCurrPageName("home")}
        >
          <MdHome />
          <span
            className={`${
              toggle ? "commonStyleItemFontHide" : "commonStyleItemFont"
            }`}
          >
            Home
          </span>
        </div>
        <div
          className={`commonStyleItem ${
            currPageName === "profile" && "selectedItemStyle"
          } ${toggle && "commonStyleItemHide"}`}
          onClick={() => setCurrPageName("profile")}
        >
          <MdAccountCircle />
          <span
            className={`${
              toggle ? "commonStyleItemFontHide" : "commonStyleItemFont"
            }`}
          >
            Profile
          </span>
        </div>
        <div
          className={`commonStyleItem ${
            currPageName === "myTeam" && "selectedItemStyle"
          } ${toggle && "commonStyleItemHide"}`}
          onClick={() => setCurrPageName("myTeam")}
        >
          <MdGroups />

          <span
            className={`${
              toggle ? "commonStyleItemFontHide" : "commonStyleItemFont"
            }`}
          >
            My Team
          </span>
        </div>
        <div
          className={`commonStyleItem ${
            currPageName === "finances" && "selectedItemStyle"
          } ${toggle && "commonStyleItemHide"}`}
          onClick={() => setCurrPageName("finances")}
        >
          <MdMoney />

          <span
            className={`${
              toggle ? "commonStyleItemFontHide" : "commonStyleItemFont"
            } `}
          >
            My Finances
          </span>
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
