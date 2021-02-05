import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from "react-router-dom";

import MetaTags from "react-meta-tags";

import collections from "../../../../assets/images/collections.png"; // gives image path

import productsandservices from "../../../../assets/images/productsandservices.png"; // gives image path

import LazyLoad from "react-lazy-load";
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
  faAlignCenter,
} from "@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import { makeData } from "../../../Tables/DataTables/Examples/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

import Main from "../../../Main";
import CenterMode from "../../../Components/Carousel/Examples/Slideshow/CenterMode";

import bgimg3 from "../../../../assets/images/abg3.jpg";

import bgimg1 from "../../../../assets/images/abg1.jpg";

import bgimg2 from "../../../../assets/images/abg2.jpg";
import bgimg4 from "../../../../assets/images/abg4.jpg";
import { max } from "lodash";

export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "hiddenText",
    };
  }
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>
            Primeval.js Home: Specializing In Dye-Infused Metal Prints
          </title>
          <meta
            name="description"
            content="Primeval.js: Featuring Hawaii's William Horak, John Kelly, &amp; Dave Shively. Luxurious Wood, Canvas &amp; Aluminum Artwork."
          />
          <meta
            property="og:title"
            content="Primeval.js Homepage: Featuring Hawaii's William Horak, John Kelly, &amp; Dave Shively. Luxurious Wood, Canvas &amp; Aluminum Artwork."
          />
          <meta
            property="og:image"
            content="\images\Raw\Dave\DS Kapalua Radiance 12x30 FINAL.jpg"
          />
        </MetaTags>
        <CSSTransitionGroup
          component="div"
          transitionName="MainAnimation"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={true}
          transitionEnterTimeout={1000}
          transitionLeave={false}
        >
          <Row>
            <Col>
              <Card>
                <CardBody>
                  {" "}
                  <CardTitle>Primeval.js</CardTitle> <br />
                  Site and tools coming soon
                  <br />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
