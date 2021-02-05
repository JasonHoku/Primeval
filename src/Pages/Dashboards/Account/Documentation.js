import React, { Component, Fragment, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";

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
} from "reactstrap";
import axios from "axios";
class DocumentationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteVar: "",
      textVar2: "Select an Instance ",
      deleteIDVar: "26",
    };
  }

  handleInputChange(event) {
    this.setState({
      noteVar: event.target.value,
    });
  }
  handleInputChange2(event) {
    this.setState({
      deleteIDVar: event.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        <CardHeader>
          <h4> Webtools Documentation </h4>
        </CardHeader>
        <CardBody>
          <div
            style={{
              boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
              borderRadius: "5px",
            }}
          >
            <b> 1/27/21</b>
            <small> V1.3 </small>
            <br />
            <br />{" "}
            <Row>
              <Col>
                <b>Content Editor</b>
              </Col>
              <Col>Used for changing parts of the website easily</Col>
            </Row>{" "}
            <br />
            <br />
            <Row>
              <Col>
                <b>User Management</b>
              </Col>
              <Col>Send Emails, Create Moderators, Ban Accounts</Col>
            </Row>{" "}
            <br />
            <br />
            <Row>
              <Col>
                <b>Products</b>
              </Col>
              <Col>Add, Edit, or Delete Shop Products and Content</Col>
            </Row>{" "}
            <br />
          </div>{" "}
          <br />
          <br />{" "}
          <a href="https://github.com/Maui-Art-Prints/Primeval.js">
            This Sites <b>Source Code</b> And Readme
          </a>{" "}
          <br />
        </CardBody>
      </Fragment>
    );
  }
}
export default DocumentationPage;
