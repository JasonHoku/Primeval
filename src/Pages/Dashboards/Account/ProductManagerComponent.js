import React, { Component, Fragment, useEffect, useState, useRef } from "react";

import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  FormText,
  CardHeader,
  CardTitle,
  CardLink,
  CardImg,
} from "reactstrap";
import axios from "axios";

import { gql, useQuery } from "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";
import { reverse, toInteger } from "lodash";

import FireBaseImageUpload from "./firebaseImageUpload";

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

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "Primeval.js.firebaseapp.com",
  projectId: "Primeval.js",
  storageBucket: "Primeval.js.appspot.com",
  messagingSenderId: "976385059528",
  appId: "1:976385059528:web:5b934ff9014d7fc134d3fd",
  measurementId: "G-WVZRL7G536",
};

function ProductManagerComponent() {
  const [loadStage, setloadStage] = useState("1");
  const [textVar, settextVar] = useState("");
  const [proImageURL, setproImageURL] = useState("");
  const [activeProURL, setactiveProURL] = useState("");
  const [deleteIDVar, setdeleteIDVar] = useState(0);
  const [loadedEzID, setloadedEzID] = useState("0");
  const [loadedTitle, setloadedTitle] = useState("0");
  const [loadedSizes, setloadedSizes] = useState("0");
  const [loadedShop, setloadedShop] = useState("0");
  const [loadedPrice, setloadedPrice] = useState("0");
  const [loadedImageURLtoImg, setloadedImageURLtoImg] = useState("");
  const [loadedTotalIDs, setloadedTotalIDs] = useState("0");
  const [proStatusText, setproStatusText] = useState("Ready");

  const isInitialMount = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("X" + loadStage);
      if (isInitialMount.current) {
        if (loadStage === "2") {
          setloadStage("3");
          return () => clearInterval(interval);
        }
        if (loadStage === "1") {
          setproStatusText("Ready " + loadedEzID + " / " + loadedTotalIDs);
          localStorage.setItem("gotDownloadURL", "") & setloadStage("3");

          setloadStage("2");
          return () => clearInterval(interval);
        }
        return () => clearInterval(interval);
      } else {
        isInitialMount.current = false;
        return () => clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  function handleChange(event) {
    setState({ [event.target.name]: event.target.value });
  }
  function handleInputChange3(event) {
    seteditIDVar(event.target.value);
  }
  function clearForms() {
    console.log((document.forms[1].input = " "));
  }
  function formResetter() {
    try {
      document.forms[0].reset();
      document.forms[1].reset();
      document.forms[2].reset();
      document.forms[3].reset();
      document.forms[4].reset();
      document.forms[5].reset();
    } catch (error) {}
  }

  function onImageChange(event) {
    console.log(event.target.files);

    setimages(event.target.files);
  }
  function gotDownloadURLFunction() {
    if (localStorage.getItem("gotDownloadURL")) {
      setactiveProURL(localStorage.getItem("gotDownloadURL"));
      if (localStorage.getItem("gotDownloadURL").length > 5) {
        console.log("clearing interval");
      }
    }
  }
  function componentWillUnmount() {
    clearInterval(intervalId);
    clearInterval(intervalId2);
  }
  function gotDownloadIDsFunction() {
    if (localStorage.getItem("activeID")) {
      if (localStorage.getItem("activeID").length > 1) {
      }
    }
  }
  function handleFireBaseUpload(e) {
    gotDownloadURLFunction();
  }

  function handleFireBaseSubmit(e) {
    e.preventDefault();
    firebase.firestore().collection("products").add({
      Title: "Success",
    });
  }

  return (
    <Fragment>
      <CardHeader style={{ marginBottom: "-55px" }}>
        <h5>Product Manager</h5>
      </CardHeader>
      <CardBody style={{ maxWidth: "400px" }}>
        <div>
          <div>
            <IfFirebaseAuthed>
              <CardBody style={{ marginBottom: "-25px" }}>
                <span style={{ marginLeft: "2px", marginRight: "2px" }}>
                  <div
                    style={{
                      boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
                      marginRight: "5px",
                      maxWidth: "375px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      paddingTop: "5px",
                    }}
                  >
                    ID #:
                    <input
                      onChange={(e) => setloadedEzID(e.target.value)}
                      value={loadedEzID}
                      name="loadedEzID"
                      style={{ width: "25px" }}
                    ></input>
                    &nbsp;
                    <button
                      onClick={() =>
                        setloadedEzID(toInteger(loadedEzID) - 1) &
                        setloadedImageURLtoImg(undefined) &
                        setloadStage("1")
                      }
                    >
                      ←
                    </button>{" "}
                    &nbsp;
                    <button
                      onClick={() =>
                        setloadedEzID(toInteger(loadedEzID) + 1) &
                        setloadedImageURLtoImg(undefined) &
                        setloadStage("1")
                      }
                    >
                      →
                    </button>
                    &nbsp;
                    <button
                      style={{ float: "right" }}
                      onClick={() => formResetter()}
                    >
                      Reset
                    </button>
                    <br />
                    <h3> {proStatusText}</h3>
                    <div className="App">
                      <FireBaseImageUpload />
                      <form
                        id="fireimguploadform"
                        onSubmit={() => handleFireBaseUpload}
                      ></form>
                      Image URL (Upload To Update):
                      <br />
                      <input
                        disabled
                        value={activeProURL}
                        style={{ position: "relative", float: "right" }}
                      ></input>{" "}
                      <br />
                      <br />
                      Title : &nbsp;
                      <input
                        onChange={() => handleChange(event)}
                        value={loadedTitle}
                        name="loadedTitle"
                        style={{ position: "relative", float: "right" }}
                      ></input>{" "}
                      <br />
                      <br />
                      Options: &nbsp;
                      <input
                        value={loadedSizes}
                        name="loadedSizes"
                        onChange={() => handleChange(event)}
                        placeholder="Sizes: ex. 12x20,8x20"
                        style={{ position: "relative", float: "right" }}
                      ></input>{" "}
                      <br />
                      <br />
                      Category: &nbsp;
                      <input
                        value={loadedShop}
                        name="loadedShop"
                        onChange={() => handleChange(event)}
                        placeholder="Shively,Horak,Kelly"
                        style={{ position: "relative", float: "right" }}
                      ></input>{" "}
                      <br />
                      <br />
                      Price: &nbsp;
                      <input
                        value={loadedPrice}
                        name="loadedPrice"
                        onChange={() => handleChange(event)}
                        placeholder="Starting Price(Number)"
                        style={{ position: "relative", float: "right" }}
                      ></input>{" "}
                      <br />
                      <br />
                      <p></p>
                      <FirestoreProvider
                        {...firebaseConfig}
                        firebase={firebase}
                      >
                        <FirestoreMutation
                          type="set"
                          path={`/products/` + loadedEzID}
                        >
                          {({ runMutation }) => {
                            return (
                              <div>
                                <button
                                  style={{
                                    alignSelf: "center",
                                    display: "block",
                                    position: "relative",
                                    borderRadius: "5px",
                                    width: "100%",
                                  }}
                                  onClick={() => {
                                    runMutation({
                                      ImageURL: activeProURL,
                                      ImageURL: JSON.stringify(activeProURL),
                                      Title: JSON.stringify(loadedTitle),
                                      Sizes: JSON.stringify(loadedSizes),
                                      Shop: JSON.stringify(loadedShop),
                                      Price: JSON.stringify(loadedPrice),
                                    }).then((res) => {
                                      console.log("Ran mutation ", res);
                                      formResetter();
                                    });
                                  }}
                                >
                                  Update/Add Product
                                </button>
                              </div>
                            );
                          }}
                        </FirestoreMutation>
                      </FirestoreProvider>
                      <br />
                      Selected Product:
                      <br />
                      <img
                        width="100%"
                        id="loadImageSrc"
                        src={String(loadedImageURLtoImg).replace(/( |")/gm, "")}
                      ></img>
                      <FirestoreProvider
                        {...firebaseConfig}
                        firebase={firebase}
                      >
                        <FirestoreDocument path={`/products/${loadedEzID}`}>
                          {(d) => {
                            if (d) {
                              if (d.value != undefined) {
                                if (loadStage === "3") {
                                  setloadedImageURLtoImg(
                                    JSON.parse(JSON.stringify(d.value)).ImageURL
                                  );
                                  return d.isLoading ? (
                                    "Loading"
                                  ) : (
                                    <pre>
                                      <h4>
                                        {String(JSON.stringify(d.value))
                                          .replace(/("|{|\[|\\|}|\/])/gm, " ")
                                          .replace(/(,)/gm, "\r\n ")}
                                      </h4>
                                    </pre>
                                  );
                                }
                              }
                            }
                          }}
                        </FirestoreDocument>
                      </FirestoreProvider>
                      <FirestoreProvider
                        {...firebaseConfig}
                        firebase={firebase}
                      >
                        <FirestoreCollection path="/products/">
                          {(d) => {
                            if (loadStage === "3") {
                              if (d.isLoading === false) {
                                setloadedTotalIDs(d.value.length);
                              }
                            }
                          }}
                        </FirestoreCollection>
                      </FirestoreProvider>
                      <br />
                      <br />
                    </div>
                    {textVar}
                    <img style={{ maxWidth: "250px" }} src={proImageURL}></img>
                  </div>
                </span>
              </CardBody>
            </IfFirebaseAuthed>
          </div>
        </div>
      </CardBody>
    </Fragment>
  );
}

export default ProductManagerComponent;
