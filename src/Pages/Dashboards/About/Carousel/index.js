import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import CarouselDefault from "./Carousel";
import CustomExample from "./CustomTag";

const CarouselBSExample = (props) => {
  return (
    <Fragment>
      <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
        transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
<Col>
<Card
                style={{
                  width: "26rem",
                  backgroundColor: "transparent",
                  opacity: 100,
                }}
              >
              <CardBody>
                  <CarouselDefault />
              </CardBody>
            </Card>
            </Col>
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default CarouselBSExample;
