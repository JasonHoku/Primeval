import React, { Component } from "react";
import Product from "./Product";
import LoadingProducts from "./loaders/Products";
import NoResults from "./empty-states/NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import ArticleMeta from "./ArticleMeta";
import { features } from "process";

class Products extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let propData1 = this.props.productsList;
    localStorage.setItem("localData1" === propData1, propData1);
  }

  render() {
    let productsData;
    let term = this.props.searchTerm;
    let x;

    function searchingFor(term) {
      return function (x) {
        if (window.location.hash === "#/dashboards/shop") {
          return x.name.toLowerCase();
        }
        return x.category.toLowerCase().includes(term.toLowerCase());
      };
    }

    productsData = this.props.productsList
      .filter(searchingFor(term))
      .map((product) => {
        return (
          <Product
            key={product.id}
            price={product.price}
            name={product.name}
            image={product.image}
            id={product.id}
            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            productSize={product.size}
            productStyle={product.style}
            productStock={product.stock}
            updateQuantity={this.props.updateQuantity}
            openModal={this.props.openModal}
          />
        );
      });

    // Empty and Loading States
    let view;

    if (productsData.length <= 0 && !term) {
      view = <LoadingProducts />;
    } else if (productsData.length <= 0 && term) {
      view = <NoResults />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={1200}
          transitionLeaveTimeout={300}
          component="div"
          className="products"
        >
          {productsData}
        </CSSTransitionGroup>
      );
    }
    return (
      <span className="products-wrapper">
        {view} <br />
        <br /> <br />
        <br />
      </span>
    );
  }
}

export default Products;
