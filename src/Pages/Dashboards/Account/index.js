import React, { Component, Fragment } from "react";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import {
  FirestoreProvider,
  FirestoreCollection,
  FirestoreDocument,
  FirestoreMutation,
} from "@react-firebase/firestore";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Container,
  Input,
  FormText,
  CardHeader,
  CardLink,
  CardImg,
  NavLink,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

import AccountElements from "./account";
import AdminElements from "./admin";
import ModeratorElements from "./moderator";
import { throwServerError } from "@apollo/client";
//

var CLIIP;
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "Primeval.js.firebaseapp.com",
  projectId: "Primeval.js",
  storageBucket: "Primeval.js.appspot.com",
  messagingSenderId: "976385059528",
  appId: "1:976385059528:web:5b934ff9014d7fc134d3fd",
  measurementId: "G-WVZRL7G536",
};
export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://api.ipify.org")
      .then((response) => response.text())
      .then((response) => {
        CLIIP = response;
      })
      .then(function (parsedData) {})
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    let adminCardEle;
    let isSignedIn, user, providerId;
    {
      adminCardEle = (
        <Row
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            height: "min-content",
          }}
        >
          <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
            <FirebaseAuthConsumer>
              {({ isSignedIn, user, providerId }) => {
                if (isSignedIn === false) {
                  console.log(user);
                  return (
                    <Card
                      className="main-card mb-3"
                      style={{
                        width: "85%",
                        maxWidth: "750px",
                        backgroundColor: "#CCCCCCC",
                        borderRadius: "25px",
                        background:
                          "linear-gradient(0.25turn, #303030, #202020, #303030)",

                        boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      }}
                    >
                      <br />
                      <CardHeader
                        style={{
                          boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                          borderRadius: "25px",
                        }}
                      >
                        <h2
                          style={{
                            color: "white",
                          }}
                        >
                          Login
                        </h2>
                      </CardHeader>
                      <br />
                      <CardBody
                        style={{
                          backgroundColor: "#CCCCCCC",
                          borderRadius: "10px",
                          color: "white",
                          background:
                            "linear-gradient(0.25turn, #303030, #202020, #303030)",
                        }}
                      >
                        <h2
                          style={{
                            color: "white",
                          }}
                        >
                          Sign-In Coming Soon.
                        </h2>
                        <br />
                        <div style={{ textAlign: "left" }}>
                          <h3 style={{ color: "white", textAlign: "left" }}>
                            <li>Website Tools</li>
                          </h3>
                          <br />
                          <div style={{ width: "100%", textAlign: "center" }}>
                            <button
                              disabled={true}
                              className="zoom"
                              style={{
                                width: "160px",
                                backgroundColor: "#335599",
                                height: "60px",
                                alignSelf: "center",
                                fontSize: "15px",
                                borderRadius: "10px",
                              }}
                              onClick={() => {
                                const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                firebase
                                  .auth()
                                  .signInWithPopup(googleAuthProvider);
                              }}
                            >
                              Sign In With Google
                            </button>{" "}
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  );
                } else {
                  if (
                    user.uid === "qQThMDeCSIMhfxw99csS5kq1ARI3" ||
                    user.uid === "MDp3B6aNl9fzXRDgfsIS9aT9xh62"
                  ) {
                    localStorage.setItem("username", user.displayName);
                    localStorage.setItem("userEmail", user.email);
                    localStorage.setItem("userUID", user.uid);
                    return (
                      <Card
                        style={{
                          width: "85%",
                          maxWidth: "750px",
                          backgroundColor: "#CCCCCCC",
                          borderRadius: "25px",
                          background:
                            "linear-gradient(0.25turn, #303030, #202020, #303030)",

                          boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                        }}
                      >
                        <CardBody
                          style={{
                            width: "100%",
                            justifyContent: "center",
                            alignContent: "center",
                            boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                            width: "100%",
                            alignItems: "center",
                            borderRadius: "25px",
                            textAlign: "center",
                          }}
                        >
                          {" "}
                          <button
                            className="zoom"
                            style={{
                              width: "90px",
                              backgroundColor: "#AA3322",
                              height: "33px",
                              alignSelf: "right",
                              float: "right",
                              display: "flex",
                              position: "relative",
                              borderRadius: "10px",
                              fontSize: "15px",
                            }}
                            onClick={() => {
                              firebase.auth().signOut() &
                                localStorage.setItem("username", null);
                              localStorage.setItem("jwt", null);
                              window.location.reload();
                            }}
                          >
                            Sign&nbsp;Out
                          </button>
                          <h2
                            style={{
                              backgroundColor: "transparent",
                              color: "white",
                            }}
                          >
                            {" "}
                            Welcome, {localStorage.getItem("username")}
                          </h2>
                          <IfFirebaseAuthed>
                            {() => (
                              <div>
                                <br />
                                <ModeratorElements />
                                <br />
                              </div>
                            )}
                          </IfFirebaseAuthed>
                        </CardBody>
                      </Card>
                    );
                  } else {
                    // Normal User

                    localStorage.setItem("username", user.displayName);
                    localStorage.setItem("userEmail", user.email);
                    localStorage.setItem("userUID", user.uid);

                    if (this.state.username === undefined) {
                      this.setState({
                        username: localStorage.getItem("username"),
                      });
                    }
                    if (this.state.userEmail === undefined) {
                      this.setState({
                        userEmail: localStorage.getItem("userEmail"),
                      });
                    }
                    if (this.state.userUID === undefined) {
                      this.setState({
                        userUID: localStorage.getItem("userUID"),
                      });
                    }
                  }
                  return (
                    <Card
                      style={{
                        width: "85%",
                        maxWidth: "750px",
                        backgroundColor: "#CCCCCCC",
                        borderRadius: "25px",
                        background:
                          "linear-gradient(0.25turn, #303030, #202020, #303030)",

                        boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      }}
                    >
                      ;
                      <CardBody
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          alignContent: "center",
                          boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                          width: "100%",
                          alignItems: "center",
                          borderRadius: "25px",
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        <button
                          className="zoom"
                          style={{
                            width: "90px",
                            backgroundColor: "#AA3322",
                            height: "33px",
                            alignSelf: "right",
                            float: "right",
                            display: "flex",
                            position: "relative",
                            borderRadius: "10px",
                            fontSize: "15px",
                          }}
                          onClick={() => {
                            firebase.auth().signOut() &
                              localStorage.setItem("username", null);
                            localStorage.setItem("jwt", null);
                            window.location.reload();
                          }}
                        >
                          Sign&nbsp;Out
                        </button>
                        <h2
                          style={{
                            backgroundColor: "transparent",
                            color: "white",
                          }}
                        >
                          {" "}
                          Welcome , {localStorage.getItem("username")}
                        </h2>
                        <IfFirebaseAuthed>
                          {() => (
                            <div>
                              <AccountElements />{" "}
                              <FirestoreProvider
                                {...firebaseConfig}
                                firebase={firebase}
                              >
                                <FirestoreMutation
                                  type="set"
                                  path={
                                    `/Users/` + localStorage.getItem("username")
                                  }
                                >
                                  {({ runMutation }) => {
                                    return (
                                      <div>
                                        <span
                                          style={{
                                            alignSelf: "center",
                                            display: "block",
                                            position: "relative",
                                            borderRadius: "5px",
                                            width: "100%",
                                          }}
                                          onClick={runMutation({
                                            username: localStorage.getItem(
                                              "username"
                                            ),
                                            useruuid: localStorage.getItem(
                                              "userUID"
                                            ),
                                          }).then((res) => {
                                            console.log("Ran mutation ", res);
                                          })}
                                        ></span>
                                      </div>
                                    );
                                  }}
                                </FirestoreMutation>
                              </FirestoreProvider>
                            </div>
                          )}
                        </IfFirebaseAuthed>
                      </CardBody>
                    </Card>
                  );
                }
              }}
            </FirebaseAuthConsumer>
          </FirebaseAuthProvider>
        </Row>
      );
    }

    return <Fragment>{adminCardEle}</Fragment>;
  }
}
