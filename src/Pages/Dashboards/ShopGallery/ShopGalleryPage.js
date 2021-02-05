import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from "react-router-dom";
import collections from "../../../assets/images/collections.png"; // gives image path

import ShopPage from "../Shop";

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
  CardLink,
  CardTitle,
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

import { makeData } from "../../Tables/DataTables/Examples/utils";

export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);

    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      term: "john",
      activeTab1: "11",
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
    return (
      <Fragment>
        <Row>
          <CardHeader
            style={{
              backgroundColor: "transparent",
              opacity: 100,
            }}
          >
            <a>
              <h4>
                {" "}
                <span className="capsVar">P</span>rimeval.js {" "}
                <span className="capsVar">S</span>hop
              </h4>
            </a>
          </CardHeader>
        </Row>
        <CSSTransitionGroup
          component="div"
          transitionName="MainAnimation4"
          transitionAppear={true}
          transitionEnter={true}
          transitionEnterTimeout={1600}
          transitionAppearTimeout={1600}
          transitionLeave={false}
        >
          <Row>
            <Col>
              <Card
                style={{
                  backgroundColor: "transparent",
                  opacity: 100,
                }}
              >
                <CardBody>
                  <p>
                   There are currently no Primeval.js products.
                  </p>
                  <center>
                  </center>
                </CardBody>
              </Card>
            </Col>
          </Row>
        
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
