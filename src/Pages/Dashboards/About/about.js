import React, { Component, Fragment } from "react";
import scriptLoader from "react-async-script-loader";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from "react-router-dom";
import CarouselBSExample from "./Carousel";

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
  CardLink,
  CardTitle,
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

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../assets/utils/images/avatars/3.jpg";

const CLIENT = {
  sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};

export default class ProjectElements extends Component {
  constructor(props) {
    super(props);

    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      var element2 = document.getElementById("showCol");
      element2.style.opacity = 1;
    }, 1000);
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
        <CSSTransitionGroup
          component="div"
          transitionName="MainAnimation5"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={true}
          transitionLeave={false}
        >
          <br />
          <br />
          <Row
            style={{
              justifyContent: "center",
              backgroundColor: "transparent",
              width: "100%",
            }}
          >
            <Card
              className="fadeIn"
              id="showCol"
              style={{
                backgroundColor: "transparent",
                opacity: 100,
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              <CardBody style={{ width: "23rem" }}>
                <CardHeader
                  style={{
                    backgroundColor: "transparent",
                    opacity: 100,
                  }}
                >
                  <h3>
                    <span class="capsVar">P</span>rimeval.js{" "}
                  </h3>
                </CardHeader>
                Discord utility web app.
              </CardBody>
            </Card>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
