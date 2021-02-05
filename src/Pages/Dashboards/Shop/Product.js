import React, { Component } from "react";
import Counter from "./Counter";
import SizeCounter from "./SizeCounter";

/*
Todo: 
*/

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      quickViewProduct: {},
      isAdded: false,
    };
  }
  componentDidMount() {
  }

  addToCart(image, name, price, id, quantity, size, style, stock) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity,
          size: size,
          style: style,
          stock: stock,
        },
      },
      function () {
        this.props.addToCart(this.state.selectedProduct);
      }
    );

    this.setState(
      {
        isAdded: true,
      },
      function () {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {},
          });
        }, 3500);
      }
    );
  }

  quickView(image, name, price, id, quantity, size, sizeForm, style, stock) {
    try {
      if (sizeForm.includes("12x18 ")) {

        document.getElementById("RDM2").disabled = false;
        document.getElementById("RDF4").disabled = true;
        document.getElementById("RDF5").disabled = true;
        document.getElementById("RDF6").disabled = true;
      } else {
        document.getElementById("RDM2").disabled = true;
      }
    } catch (error) {
    }
    this.setState(
      {
        quickViewProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity,
          size: size,
          sizeForm: sizeForm,
          style: style,
          stock: stock,
        },
      },
      function () {
        this.props.openModal(this.state.quickViewProduct);
      }
    );
  }

  render() {
    let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let quantity = this.props.productQuantity;
    let size = this.props.productSize;
    let sizeForm = this.props.productSize;
    let style = this.props.productStyle;
    let stock = this.props.productStock;

    return (
      <span style={{ width: "26rem" }}>
        <div className="producto" style={{ width: "25rem" }}>
          <h4 className="product-name">{this.props.name}</h4>

          <div className="product-image">
            <img
              width="100%"
              class="zoom"
              src={image}
              alt={this.props.name}
              onClick={this.quickView.bind(
                this,
                image,
                name,
                price,
                id,
                quantity,
                size,
                sizeForm,
                style,
                stock
              )}
            />
          </div>
        </div>
        <br></br>
      </span>
    );
  }
}

export default Product;
