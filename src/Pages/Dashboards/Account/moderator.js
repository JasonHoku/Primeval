import React, { Component, Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import FormQueryComponent from "./FormQueryComponent.js";
import UserQueryComponent from "./UserQueryComponent.js";
import { toInteger } from "lodash";
import ProductManagerComponent from "./ProductManagerComponent.js";
import ChatManagerComponent from "./ChatManagerComponent.js";
import ContentManagerComponent from "./ContentManagerComponent.js";
import EventManagerComponent from "./EventManagerComponent.js";
import NoteManagerComponent from "./NoteManagerComponent.js";
import CommentManagerComponent from "./CommentManagerComponent.js";
import SurveyManagerComponent from "./SurveyManagerComponent.js";
import LiveChatManagerComponent from "./LiveChatManagerComponent.js";
import DocumentationPage from "./Documentation.js";
import VideoManager from "./VideoManager.js";
import IssueManager from "./IssueManager.js";

import classnames from "classnames";

import PayPalButton from "../Shop/PayPalExpress";
import TextareaAutosize from "react-textarea-autosize";
import {
  Row,
  Col,
  Button,
  ListGroupItem,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Container,
  Input,
  FormText,
  CardHeader,
  CardTitle,
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { relative } from "path";
import AccountElements from "./account";
import { resolveModuleName } from "typescript";
import { get, initial } from "lodash";

// This setup is only needed once per application;
function ModeratorElements() {
  const [message, setMessage] = useState("Hi there, how are you?");
  const [formName, setformName] = useState([]);
  const [formEmail, setformEmail] = useState([]);
  const [activeTab, setactiveTab] = useState("1");
  const [activeTab2, setactiveTab2] = useState("1");
  const [userMetric, setuserMetric] = useState("");
  const [issuesMetric, setissuesMetric] = useState("");
  const [commentsMetric, setcommentsMetric] = useState("");
  const [SurveyMetric, setSurveyMetric] = useState("");
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  const [adminPrice, setadminPrice] = useState("");
  function loadProducts(props) {
    if (activeTab === "Products") {
      return <ProductManagerComponent />;
    }
  }
  function loadEvents(props) {
    if (activeTab === "Events") {
      return <EventManagerComponent />;
    }
  }
  function loadContentManagerComponent(props) {
    if (activeTab === "Content") {
      return <ContentManagerComponent />;
    }
  }
  function loadCommentManagerComponent(props) {
    if (activeTab === "Comments") {
      return <CommentManagerComponent />;
    }
  }
  function loadUserQueryComponent(props) {
    if (activeTab === "Users") {
      return <UserQueryComponent />;
    }
  }

  function handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex((x) => x.id === id);
    cart.splice(index, 1);
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  function getMetrics() {
    console.log("Updating Metrics"),
      setState({
        userMetric: localStorage.getItem("ActiveUserCount"),
        chatMetric: localStorage.getItem("ActiveChatUserCount"),
        issuesMetric: localStorage.getItem("ActiveIssueCount"),
        commentsMetric: localStorage.getItem("CommentsCount"),
        SurveyMetric: localStorage.getItem("NewSurveyCount"),
      });
  }
  function toggle(tab) {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  }
  function toggle2(tab) {
    if (activeTab2 !== tab) {
      setState({
        activeTab2: tab,
      });
    }
  }
  function onImageChange(event) {
    console.log(event.target.files);

    setState({
      images: event.target.files,
    });
  }

  function handleInputChange(event) {
    setState({
      formName: event.target.value,
    });
  }
  function handlePriceInputChange(event) {
    localStorage.setItem(
      "localData7",
      event.target.value - localStorage.getItem("localData4")
    ) & setadminPrice(event.target.value);
  }
  function valueCheck() {
    if (!localStorage.getItem("localData3")) {
      localStorage.setItem("localData3", 0);
    }
  }

  function handlePriceInputChange(event) {
    localStorage.setItem(
      "localData7",
      event.target.value - localStorage.getItem("localData4")
    ) & setadminPrice(event.target.value);
  }

  function heartBeat() {
    setInterval(getData, 3000);
  }
  function getMetrics() {
    console.log("Updating Metrics"),
      setState({
        userMetric: localStorage.getItem("ActiveUserCount"),
        chatMetric: localStorage.getItem("ActiveChatUserCount"),
        issuesMetric: localStorage.getItem("ActiveIssueCount"),
        commentsMetric: localStorage.getItem("CommentsCount"),
        SurveyMetric: localStorage.getItem("NewSurveyCount"),
      });
  }
  function loadPayPalButton() {
    if (localStorage.getItem("localData2") === null) {
      localStorage.setItem("localData2", "0");
    }

    if (activeTab === "4") {
      localStorage.setItem(
        "ProductInfo",
        localStorage.getItem("localData2") +
          "X" +
          localStorage.getItem("username")
      );
      return (
        <span>
          <PayPalButton
            valueCheck={valueCheck()}
            cart={localStorage
              .getItem("localData2")
              .toString()
              .split("\n")
              .map((str) => (
                <p key={str}>{str}</p>
              ))}
            total={
              toInteger(localStorage.getItem("localData4")) +
              toInteger(localStorage.getItem("localData7"))
            }
            cartItems={localStorage
              .getItem("localData2")
              .toString()
              .split("\n")
              .map((str) => (
                <p key={str}>{str}</p>
              ))}
            removeProduct={handleRemoveProduct}
            style={{ width: "15rem" }}
          />
          {localStorage
            .getItem("localData2")
            .toString()
            .split("\n")
            .map((str) => (
              <p key={str}>{str}</p>
            ))}
        </span>
      );
    }
  }

  function getData() {
    console.log("x");
    try {
      let concData = "";
      for (var i = 0; i < JSON.parse(respData).length; i++) {
        concData =
          concData + "\r\n A"[i] + JSON.stringify(JSON.parse(respData)[i]);
        ponoMapDATA = concData;
      }

      setState({ ponoMapDATA: ponoMapDATA });
    } catch (error) {
      console.log(error);
    }
  }

  function valueCheck() {
    if (!localStorage.getItem("localData3")) {
      localStorage.setItem("localData3", 0);
    }
  }
  return (
    <Fragment>
      <Container
        fluid
        style={{
          backgroundColor: "transparent",
          backgroundColor: "transparent",
          borderRadius: "55px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <TabContent
          activeTab={activeTab}
          style={{
            backgroundColor: "transparent",
            opacity: 0.9,
            justifyContent: "center",
            alignSelf: "center",
            width: "100%",
          }}
        >
          <CardHeader
            className="ponoTitle"
            style={{
              justifyContent: "center",
              backgroundColor: "transparent",
              alignSelf: "center",
              borderBottom: "none",
              marginBottom: "-25px",
              width: "100%",
              opacity: 100,
            }}
          >
            <h3>Moderator Controls</h3>
          </CardHeader>
          <CardHeader
            style={{
              marginBottom: "-35px",
              justifyContent: "center",
              backgroundColor: "transparent",
              borderBottom: "none",
              alignSelf: "center",
            }}
          >
            <Button
              size="sm"
              fill="true"
              color="alternate"
              className={
                "btn-pill btn-wide " + classnames({ active: activeTab === "1" })
              }
              onClick={() => {
                toggle("1");
              }}
            >
              Main Tools
            </Button>
            <Button
              fill="true"
              color="alternate"
              className={
                "btn-pill btn-wide " + classnames({ active: activeTab === "2" })
              }
              onClick={() => {
                toggle("2");
              }}
            >
              Normal User View:
            </Button>
            <Button
              fill="true"
              color="alternate"
              className={
                "btn-pill btn-wide " + classnames({ active: activeTab === "4" })
              }
              onClick={() => {
                toggle("4");
              }}
            >
              Invoice
            </Button>
          </CardHeader>
          <br />
          <br />
          <Row style={{ justifyContent: "center" }}>
            <Row>
              {" "}
              <Card
                style={{
                  width: "auto",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  height: "100%",
                  marginTop: "-5px",
                  backgroundColor: "transparent",
                  marginBottom: "-10px",
                  marginLeft: "25px",
                  marginRight: "25px",
                  alignItems: "center",
                }}
              >
                <CardTitle
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    backgroundColor: "transparent",
                    marginBottom: "-15px",
                    color: "black",
                  }}
                >
                  <h4
                    style={{
                      backgroundColor: "transparent",
                    }}
                  >
                    Website Management Tools:
                  </h4>
                </CardTitle>
                <span
                  style={{
                    marginLeft: "10px",
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#009900",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      toggle("Documentation");
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                    }}
                  >
                    {" "}
                    Documentation{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#009999",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Content");
                    }}
                  >
                    {" "}
                    Content Editor{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#0033AA",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Users");
                    }}
                  >
                    {" "}
                    User Management{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#3300CC",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Products");
                    }}
                  >
                    {" "}
                    Products{" "}
                  </button>
                  &nbsp;
                  <br />
                  <br />
                </span>
              </Card>
            </Row>
            <TabPane
              className="ponoTitle"
              tabId="1"
              style={{
                height: "100%",
                backgroundColor: "transparent",
                alignContent: "center",
                opacity: 100,
              }}
            >
              <Row>
                {" "}
                <Card
                  style={{
                    width: "18rem",
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    alignContent: "center",
                    height: "100%",
                    marginTop: "15px",
                    marginLeft: "25px",
                    backgroundColor: "transparent",
                    alignItems: "center",
                    marginBottom: "25px",
                  }}
                >
                  <CardTitle
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <h4>Highlight Metrics:</h4>
                    <span id="id002"></span>
                  </CardTitle>
                  <TabContent
                    activeTab={activeTab2}
                    style={{
                      backgroundColor: "transparent",
                      opacity: 0.9,
                      justifyContent: "center",
                      alignSelf: "center",
                      width: "100%",
                    }}
                  >
                    <TabPane
                      className="ponoTitle"
                      tabId="1"
                      style={{
                        height: "100%",
                        opacity: 100,
                      }}
                    >
                      <h4>
                        Users: {userMetric}
                        <br />
                      </h4>
                    </TabPane>
                  </TabContent>
                </Card>
              </Row>
            </TabPane>
          </Row>
          <TabPane tabId="2">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <CardHeader> Registered User View:</CardHeader>
                <CardBody>
                  <AccountElements />
                </CardBody>
              </Card>
            </Row>
          </TabPane>{" "}
          <TabPane tabId="3">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {loadProducts()}
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row style={{ justifyContent: "center" }}>
              <Input
                onChange={handlePriceInputChange}
                placeholder={
                  toInteger(localStorage.getItem("localData4")) +
                  toInteger(localStorage.getItem("localData7"))
                }
              ></Input>{" "}
              <Button id="PriceSet" style={{ width: "150px" }}>
                {" "}
                Set Price
              </Button>
            </Row>{" "}
            <br />
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {loadPayPalButton()}
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="Comments">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {loadCommentManagerComponent()}
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="Events">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {loadEvents()}
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="Products">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {loadProducts()}
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="Content">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {loadContentManagerComponent()}
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="Notes">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              ></Card>
            </Row>
          </TabPane>
          <TabPane tabId="Surveys">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              ></Card>
            </Row>
          </TabPane>
          <TabPane tabId="Live">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              ></Card>
            </Row>
          </TabPane>
          <TabPane tabId="Documentation">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <DocumentationPage />
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="Users">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {loadUserQueryComponent()}
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="Issue">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "transparent",
                  alignContent: "center",
                  alignItems: "center",
                }}
              ></Card>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </Fragment>
  );
}

export default ModeratorElements;
