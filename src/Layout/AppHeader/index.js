import React, { Fragment } from "react";
import cx from "classnames";

import { connect } from "react-redux";
import { findDOMNode } from "react-dom";
import ReactGA from "react-ga";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import logo2 from "../../assets/images/logo2.png"; // gives image path

import SendToGoogleAnalytics from "./Components/analytics";

import HeaderLogo from "../AppLogo";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { color } from "d3-color";

let clientWidth = Math.min(
  window.innerWidth,
  document.documentElement.clientWidth
);
let logoWidth = null;
let headWidth = null;
let galleryPos = clientWidth;

if (clientWidth <= "800") {
  logoWidth = 0.2;
  headWidth = 0.25;

  galleryPos = 25;
}
if (clientWidth >= "800" && clientWidth <= "1400") {
  logoWidth = 0.25;
  headWidth = 0.3;

  galleryPos = 100;
}
if (clientWidth > "1400") {
  logoWidth = 0.33;
  headWidth = 0.4;

  galleryPos = String(clientWidth / 6);
}

class Header extends React.Component {
  constructor(p) {
    super(p);
    this.valueCheck = this.valueCheck.bind(this);
    this.state = { value: "", store: "" };
    this.onClickGA = this.onClickGA.bind(this);
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.innerWidth > 900) {
      window.location.reload();
    }
  };
  iOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      //  console.log(this.iOS === true)
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }
  componentDidMount() {
    document.addEventListener("click", this.valueCheck);

    this.valueCheck();
    document.getElementById("Notify1").opacity = "100";
    window.addEventListener("localData2", (e) => this.setState({ store: "" }));
    document.addEventListener("click", this.onClickGA.bind(this), false);
    ReactGA.initialize(process.env.REACT_APP_UAANALYTICS);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.onClickGA.bind(this), false);
  }

  onClickGA(event) {
    ReactGA.pageview(window.location.href + window.location);
    const domNode = findDOMNode(event.target);
    ReactGA.outboundLink(
      {
        label: "Clicked :" + domNode.outerHTML,
      },
      function () {
        try {
        } catch (error) {}
      }
    );
  }

  valueCheck() {
    try {
      if (!localStorage.getItem("localData3")) {
        localStorage.setItem("localData3", 0);
      }
      this.setState({ value: localStorage.getItem("localData3").length - 1 });
      setTimeout(() => {
        this.setState({ value: localStorage.getItem("localData3").length - 1 });
      }, 500);
    } catch (error) {}
  }
  render() {
    let { headerBackgroundColor, enableHeaderShadow } = this.props;
    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          transitionName="MainAnimation"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={true}
          transitionEnterTimeout={1000}
          transitionLeave={false}
        >
          <SendToGoogleAnalytics />
          <HeaderLogo />
          <span
            style={{
              color: "white",
              position: "relative",
              textAlign: "left",
              top: 5,
            }}
          >
            <span className="logoFont">
              <a
                href="/"
                style={{
                  textDecorationLine: "none",
                }}
              >
                P
              </a>
            </span>
            <span className="logoFont2">
              <a
                href="/"
                style={{
                  textDecorationLine: "none",
                }}
              >
                rimeval.js
              </a>
            </span>
          </span>

          <br />
          <span
            id="headerText"
            className="fade-in"
            style={{
              color: "white",
              width: 75,
              textAlign: "left",
              hidden: "false",
            }}
          >
            <a href="/#/dashboards/about">
              <span
                className="Notify1   zoom "
                id="Notify1"
                style={{
                  textAlign: "center",
                }}
              >
                &nbsp; <br />
                <b></b>
                <span
                  className="seriesVar"
                  style={{
                    lineHeight: 0,
                    fontSize: "26px",
                  }}
                >
                  Learn More
                </span>
              </span>
            </a>
          </span>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
