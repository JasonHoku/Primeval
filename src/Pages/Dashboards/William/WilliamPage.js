import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from "react-router-dom";

import ShopPage from "../Shop/";

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  faAngleUp,
  faDotCircle,
  faAngleDown,
  faStrikethrough,
} from "@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import { makeData } from "../../Tables/DataTables/Examples/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);

    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
      term: "william",
      hover: "hiddenText",
    };
  }

  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <span
          style={{
            width: "26rem",
            height: "100%",
            backgroundColor: "transparent",
            opacity: 100,
          }}
        />
        <span
          style={{
            width: "26rem",
            height: "100%",
            backgroundColor: "transparent",
            opacity: 100,
          }}
        >
          <span
            style={{
              backgroundColor: "transparent",
              opacity: 100,
            }}
          >
            <h1>
              William
              <span class="capsVar">
                {" "}
                <span class="lastName">H</span>orak
              </span>
            </h1>
          </span>{" "}
          <CardBody
            onClick={() =>
              this.setState({ hover: "visibleText" }) &
              (document.getElementsByClassName("xd123")[0].hidden = true)
            }
            id={this.state.hover}
          >
            &nbsp; &nbsp; &nbsp;{" "}
            <p>
              William Horak has conducted geological reconnaissance on O‘ahu,
              Kaua‘i, Moloka‘i and Hawai‘i; often in remote locations in
              association with various kama'aina and their aloha.
            </p>{" "}
            <p>
              His images of Hawai‘i are influenced by the ho‘okahiko
              (bygone/ancient) of the kanaka maoli (native Hawaiian) and a way
              of life that has been consumed by the past. His interests in
              historical cartography, Hawai‘ian antiquity, and the natural
              history of the Islands are the foundation for his work.
            </p>{" "}
            <p>
              These phenomenal works fuse elements of Hawaii's ancient times
              with intricate geographic details, that form sublime contemporary
              maps. Mr. Horak's mastery of this form transcends historical
              boundaries and portrays Hawaii in a unique way.
            </p>{" "}
            <p>
              Our Wood Horak prints are exclusive to us and are an ideal match
              for our Black frames. Also available as Metal and framed Canvas
              prints
            </p>
          </CardBody>
          <CardBody
            className="xd123"
            style={{ justifyContent: "center", textAlign: "center" }}
            onClick={() =>
              this.setState({ hover: "visibleText" }) &
              (document.getElementsByClassName("xd123")[0].hidden = true)
            }
            id={this.state.hover}
          >
            {" "}
            <span id="readMore">
              <span id="readMore">Click To Read More</span>
            </span>
          </CardBody>
        </span>
        <ShopPage searchTerm={this.state.term} />
      </Fragment>
    );
  }
}
