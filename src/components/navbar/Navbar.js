import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Images/logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import admin from "../Images/admin.png";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const popupOpen = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Nav>
        <NavBrand>
          <NavLink to="/">
            <img
              src={logo}
              alt="Disney+/logo"
              style={{width: "70%", minWidth: "120px" }}
            />
          </NavLink>
        </NavBrand>
        <MenuLinks>
          <li>
            <NavLink className="nav-link" to="/home">
              <span>
                {/* <FontAwesomeIcon icon="fa-duotone fa-house" />  */}
                HOME
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="#">
              <span>SEARCH</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="#">
              <span>WATCHLIST</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="#">
              <span>ORIGINALS</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="#">
              <span>MOVIES</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="#">
              <span>SERIES</span>
            </NavLink>
          </li>
        </MenuLinks>
        <UserAuth>
          <img src={admin} alt="admin" onClick={popupOpen} />
        </UserAuth>
        <PopupMenu activeState={toggle}>
          <li>
            <NavLink className="nav-link" to="#">
              <span>HOME</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="#">
              <span>LOGOUT</span>
            </NavLink>
          </li>
        </PopupMenu>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9vh;
  /* position: relative; */
`;
const NavBrand = styled.div`
  width: 10%;
  @media screen and (max-width: 900px) {
    width: 100px;
  }
`;
const MenuLinks = styled.div`
  display: flex;
  bottom: 1rem;
  /* margin-left: 16%; */
  padding: 1rem;
  margin: auto;
  /* margin-top: 3.4%; */
  margin-left: 10px;
  li {
    list-style: none;
    padding: 10px;

    .nav-link {
      text-decoration: none;

      span {
        color: #fff;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          margin-top: 25px;
          border-top: 1px solid #f9f9f9;
          width: 0%;
          transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        @media screen and (max-width: 900px) {
          font-size: 0.7rem;
        }
        @media screen and (min-width: 900px) and (max-width: 1100px) {
          font-size: 0.8rem;
        }
      }
    }
    &:hover {
      span::before {
        width: 100%;
      }
    }
  }
`;
const UserAuth = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 20px;
  object-position: center;
  img {
    width: 100%;
    border-radius: 100px;
  }
`;

const PopupMenu = styled.div`
  display: ${(props) => (props.activeState ? "flex" : "none")};
  position: absolute;
  right: 3.5rem;
  top: 3.5rem;
  z-index: 5;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0.5rem 1rem;
  background-color: #040714;
  border-radius: 5px;
  border: 1.3px solid rgba(151, 151, 151);
  box-shadow: rgb(0 0 0 / 50%) 0 0 10px 0;
  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    list-style: none;
    padding: 3px;
    border-bottom: 1.3px solid rgba(151, 151, 151);
    width: 100%;

    .nav-link {
      text-decoration: none;

      span {
        color: #fff;
        position: relative;

        @media screen and (max-width: 900px) {
          font-size: 0.7rem;
        }
        @media screen and (min-width: 900px) and (max-width: 1100px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
