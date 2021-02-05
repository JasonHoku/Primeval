import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from "react-router-dom";
import PayPalButton from "../Shop/PayPalExpress";

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
  Container,
  CardBody,
  CardHeader,
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
import { stringify } from "querystring";
import { toInteger } from "lodash";

export default class CRMDashboard2 extends Component {
  constructor() {
    super();
    this.valueCheck = this.valueCheck.bind(this);

    this.state = { value: "", store: "" };
    this.toggle = this.toggle.bind(this);
    this.checkCart = this.checkCart.bind(this);
    this.ClearCart = this.ClearCart.bind(this);

    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.state = {
      term: "dave",
      cartText: ["Loading..."],
      cartShip: [],
      cartShipText: [],
      activeTab2: "1",
      data: makeData(),
      total: "",
      totalItems: "",
      cartItems: ["property:a, id:2"],
      cart: ["property:a, id:2"],
      handleCategory: "",
      categoryTerm: "",
      updateQuantity: "",
      productQuantity: "",
    };
  }
  updateLocalProp() {
    try {
      this.setState({ value: localStorage.getItem("localData2") });
    } catch (error) {}
  }

  toggle(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }
  valueCheck() {
    if (!localStorage.getItem("localData3")) {
      localStorage.setItem("localData3", 0);
    }
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex((x) => x.id === id);
    cart.splice(index, 1);
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }

  checkCart() {
    try {
      if (JSON.stringify(localStorage.getItem("localData2")).length <= 5) {
        this.state.cartText = `Your cart is empty!`;
        document.getElementById("emptyCartButton").hidden = false;
        document.getElementById("clearCartButton").hidden = true;
        document.getElementById("checkoutCartButton").hidden = true;
      } else {
        this.state.cartText = localStorage
          .getItem("localData2")
          .toString()
          .split("\n")
          .map((str) => <p key={str}>{str}</p>);

        if (localStorage.getItem("localData7") === "") {
          localStorage.setItem("localData7", 0);
        }

        if (localStorage.getItem("localData7")) {
          this.state.cartShipText =
            "Shipping x" +
            (localStorage.getItem("localData3").length - 1) +
            ": $";
          this.state.cartShip = localStorage.getItem("localData7");
          if (this.state.cartShip > 200) {
            this.state.cartShipText = "Contact for Accurate Shipping or: $";
          }
        } else {
          this.state.cartShip = "0$ Ship";
        }
      }
    } catch (error) {}
  }

  componentDidMount() {
    this.checkCart();
    this.setState({ value: localStorage.getItem("localData3").length - 1 });
    this.intervalID2 = setInterval(() => {
      this.setState({ value: localStorage.getItem("localData3").length - 1 });
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID2);
  }

  ClearCart() {
    localStorage.setItem("localData1", "");
    localStorage.setItem("localData2", "");
    localStorage.setItem("localData3", "");
    localStorage.setItem("localData4", "");
    localStorage.setItem("localData5", "");
    localStorage.setItem("localData6", "");
    localStorage.setItem("localData7", 0);
    window.location.reload();
  }

  render() {
    const { data } = this.state;
    {
      this.valueCheck();
    }
    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Row
            className="mapTitle"
            style={{
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <TabContent
              className="mapTitle"
              activeTab={this.state.activeTab2}
              style={{
                justifyContent: "center",
                alignSelf: "center",
                width: "100%",
                backgroundColor: "transparent",
                opacity: 100,
              }}
            >
              <CardHeader
                className="mapTitle"
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "transparent",
                  opacity: 100,
                }}
              >
                <Button
                  size="lg"
                  outline
                  style={{
                    color: "#00005c",
                    fontFamily: "Cinzel-Regular",
                    lineHeight: "10px",
                    zIndex: 3,
                  }}
                  color="primary"
                  className={
                    "btn-pill btn-wide " +
                    classnames({ active: this.state.activeTab2 === "1" })
                  }
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Review
                </Button>
                <Button
                  size="lg"
                  style={{
                    color: "#00005c",
                    fontFamily: "Cinzel-Regular",
                    lineHeight: "10px",
                    zIndex: 3,
                  }}
                  color="success"
                  className={
                    "btn-pill btn-wide " +
                    classnames({ active: this.state.activeTab2 === "2" })
                  }
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  CheckOut
                </Button>
              </CardHeader>
              <br />
              <TabPane
                tabId="1"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "transparent",
                  opacity: 100,
                }}
              >
                <Card
                  className="mapTitle"
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "transparent",
                    boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
                    opacity: 100,
                  }}
                >
                  <center>
                    <br />
                    <br />
                    <br />
                    <h1
                      key="a"
                      style={{
                        height: "100%",
                        width: "100%",
                        textAlign: "left",
                        fontSize: "22px",
                      }}
                    >
                      {this.state.cartText}
                      {this.state.cartShipText} {this.state.cartShip}
                    </h1>
                    <Button
                      id="emptyCartButton"
                      hidden
                      onClick={() =>
                        (window.location = "/#/dashboards/shopgallery")
                      }
                    >
                      {" "}
                      View Gallery
                    </Button>
                    <br />
                    <button
                      style={{ opacity: 0.8, backgroundColor: "#00000055" }}
                      id="clearCartButton"
                      onClick={this.ClearCart}
                    >
                      Clear Cart
                    </button>{" "}
                    &nbsp;
                    <button
                      style={{ opacity: 0.9, backgroundColor: "#22CC22BB" }}
                      id="checkoutCartButton"
                      onClick={() => this.toggle("2")}
                    >
                      CheckOut
                    </button>
                    <br />
                    <div style={{ top: "700px" }}>
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </center>
                </Card>
              </TabPane>
              <TabPane
                className="mapTitle"
                tabId="2"
                style={{ height: "26rem", justifyContent: "center" }}
              >
                <Card
                  className="mapTitle"
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "transparent",
                    boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
                    opacity: 100,
                  }}
                >
                  <CardBody>
                    <br />
                    <br />
                    • Guest checkout receives shipping information through
                    PayPal.
                    <br />
                    <br />
                    • For NON-Domestic orders, please reach out for a custom
                    shipping quote.
                    <br />
                    <br />
                    <span style={{ width: "15rem" }}>
                      <PayPalButton
                        valueCheck={this.valueCheck()}
                        cartBounce={this.state.cartBounce}
                        cart={this.state.cart}
                        total={
                          toInteger(localStorage.getItem("localData4")) +
                          toInteger(this.state.cartShip)
                        }
                        totalItems={this.state.value}
                        cartItems={this.state.cart}
                        removeProduct={this.handleRemoveProduct}
                        handleCategory={this.handleCategory}
                        categoryTerm={this.state.category}
                        updateQuantity={this.updateQuantity}
                        productQuantity={this.state.moq}
                        style={{ width: "15rem" }}
                      />
                    </span>
                    <br />
                    <br />
                  </CardBody>
                </Card>
              </TabPane>
            </TabContent>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
