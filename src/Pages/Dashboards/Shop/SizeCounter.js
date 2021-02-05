import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";

class SizeCounter extends Component {
  constructor(props) {
    super(props);
    this.sizeSet = this.sizeSet.bind(this);
    this.selectClicked = this.selectClicked.bind(this);
    this.state = {
      size: this.props.productSize,
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  selectClicked(size) {
    document.getElementById(size).checked = true;
  }
  handleChange(ex) {
    this.setState({ value: ex });
  }
  componentDidMount() {
    this.sizeSet();
    this.setState({
      size: this.props.productSize,
    });
  }
  sizeSet() {}
  check() {
    let inputs = document.getElementById("checkId");
    inputs.checked = true;
  }
  render() {
    const { size } = this.state;
    return (
      <form id="myForm">
        <b
          style={{
            position: "relative",
            left: "5px",
          }}
        >
          Size:
        </b>
        &nbsp; &nbsp;
        {[this.props.productSize]
          .toString()
          .split(/\s*,\s*/)
          .map((size) => (
            <span style={{ display:"inline-table" }}>
              <input
                type="radio"
                id={size}
                defaultChecked={size === "8x20" || size === "12x18" || size === "8x16"}
                name="RF3"
                onClick={() => this.selectClicked(size)}
                key={size}
                value={size}
              />
              {size}&nbsp;
            </span>
          ))}
      </form>
    );
  }
}

SizeCounter.propTypes = {
  size: PropTypes.number,
};

export default SizeCounter;
