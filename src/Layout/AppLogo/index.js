import React, { Fragment } from "react";
import { connect } from "react-redux";
import { findDOMNode } from "react-dom";

import { Slider } from "react-burgers";
import AppMobileMenu from "../AppMobileMenu";

import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";

class HeaderLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      mobile: false,
      activeSecondaryMenuMobile: false,
    };
  }

  toggleEnableClosedSidebar = () => {
    let { enableClosedSidebar, setEnableClosedSidebar } = this.props;
    setEnableClosedSidebar(!enableClosedSidebar);
  };
  handleClickOutside(event) {
    if (String(event.target.className).includes("Burger")) {
    } else {
      if (this.state.active === true) {
        this.toggleEnableClosedSidebar();
      }
    }
    this.setState({ active: false });
  }

  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }
  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      false
    );
  }
  state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 12,
    noTouchOpen: false,
    noTouchClose: false,
  };

  render() {
    let clientWidth = Math.min(
      window.innerWidth,
      document.documentElement.clientWidth
    );
    let logoWidth = null;
    let galleryPos = clientWidth;

    let mobileVar = null;

    if (clientWidth <= "800") {
      logoWidth = clientWidth * -0.15;
      galleryPos = 25;
      mobileVar = 3000;
    }
    if (clientWidth >= "800" && clientWidth <= "992") {
      logoWidth = clientWidth * 0.4;
      galleryPos = 1000;
      mobileVar = -250;
    }
    if (clientWidth > "1400") {
      mobileVar = 0;
      logoWidth = clientWidth * 0.2;
      galleryPos = String(clientWidth / 6);
    }

    return (
      <Fragment>
        <div className="app-header__logo">
          <div className="logo-src" />
          <div className="header__pane ml-auto">
            <span
              className="slideClass"
              style={{
                position: "fixed",
                top: 10,
                left: "-5px",
                zIndex: 10,
                textDecorationLine: "none",
              }}
            >
              <span
                style={{ zIndex: 2 }}
                onClick={this.toggleEnableClosedSidebar}
                style={{
                  textDecorationLine: "none",
                }}
              >
                <Slider
                  width={55}
                  lineHeight={6}
                  lineSpacing={13}
                  color="#ffffff"
                  active={this.state.active}
                  onClick={() => this.setState({ active: !this.state.active })}
                />
              </span>
            </span>
          </div>
        </div>
        <AppMobileMenu />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);
