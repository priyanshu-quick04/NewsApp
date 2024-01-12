import React, { Component } from "react";
import sun from "./sun.png";
import moon from "./moon.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      icon: sun,
      light: "light",
      final_class_navbar:
        "navbar navbar-expand-lg bg-light d-flex justify-content-between",
      data_bs_theme: false,
    };
  }
  modeChange = () => {
    this.props.changeTheme();
    console.log("Some Changes");
    if (this.state.icon === sun) {
      this.setState({
        icon: moon,
        final_class_navbar:
          "navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark d-flex justify-content-between",
        data_bs_theme: "dark",
        theme: { backgroundColor: "black", color: "white" },
      });
    } else {
      this.setState({
        icon: sun,
        final_class_navbar:
          "navbar navbar-expand-lg bg-light d-flex justify-content-between",
        data_bs_theme: "light",
        theme: { backgroundColor: "white", color: "black" },
      });
    }
  };
  render() {
    return (
      <>
        <nav
          className={this.state.final_class_navbar}
          data-bs-theme={this.state.data_bs_theme}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              TrendTeller
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ color: "white" }}
              >
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="theme-btn" style={{ cursor: "pointer" }}>
              <img
                className="my-1"
                src={this.state.icon}
                alt="icon_image"
                style={{ height: "30px", widht: "30px" }}
                onClick={this.modeChange}
              />
            </div>
          </div>
        </nav>
      </>
    );
  }
}
