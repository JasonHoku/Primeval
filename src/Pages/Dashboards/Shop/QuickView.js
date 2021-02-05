import { toInteger } from "lodash";
import { doc } from "prettier";
import React, { Component, useEffect } from "react";
import { findDOMNode } from "react-dom";
import { isLineBreak } from "typescript";
import Counter from "./Counter";
import SizeCounter from "./SizeCounter";

class QuickView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      quickViewProduct: {},
      isAdded: false,
      viewPrice: toInteger(this.props.product.price),
      steadyPrice: [],
      newPrice: [],
      shipPrice: [],
    };
    this.loadUp = this.loadUp.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.onClick = this.onClick.bind(this);
    this.formResetter = this.formResetter.bind(this);
  }
  onClick(e) {
    this.updateForm();
    let newPrice = this.state.newPrice;
    this.setState({
      newPrice,
    });
  }
  addToCart(image, name, price, id, quantity, size, style, stock) {
    var CartData;
    var x = document.forms.myForm.elements;
    var y = document.forms.medForm.elements;
    var z = document.forms.fraForm.elements;
    try {
      if (y[0].checked) {
        CartData = "\r\n Metal, ";
      } else if (y[1].checked) {
        CartData = "\r\n Wood, ";
      } else {
        CartData = "\r\n Canvas, ";
      }
      if (z[0].checked) {
        CartData = CartData + "Basic Hanger, ";
      } else if (z[1].checked) {
        CartData = CartData + "Gallery Mount, ";
      } else if (z[2].checked) {
        CartData = CartData + "Floating Mount, ";
      } else if (z[3].checked) {
        CartData = CartData + "Black Frame, ";
      } else if (z[4].checked) {
        CartData = CartData + "Hawaii Frame,";
      } else if (z[5].checked) {
        CartData = CartData + "Maui Frame,";
      }

      if (x[0].checked) {
        CartData =
          CartData + (x[0].value + "\n  $" + this.props.product.price + "\n ");
      } else if (x[1].checked) {
        CartData =
          CartData + (x[1].value + "\n  $" + this.props.product.price + "\n ");
      } else if (x[2].checked) {
        CartData =
          CartData + (x[2].value + "\n  $" + this.props.product.price + "\n ");
      } else if (x[3].checked) {
        CartData =
          CartData + (x[3].value + "\n  $" + this.props.product.price + "\n ");
      } else {
        CartData =
          CartData + (x[0].value + "\n  $" + this.props.product.price + "\n ");
      }
    } catch (error) {}
    try {
      localStorage.setItem(
        "localData2",
        this.props.product.name +
          CartData +
          `\n` +
          localStorage.getItem("localData2") +
          `\n`
      );
      localStorage.setItem(
        "localData3",
        quantity + localStorage.getItem("localData3")
      );
      localStorage.setItem(
        "localData4",
        toInteger(this.props.product.price) +
          toInteger(localStorage.getItem("localData4"))
      );
    } catch (error) {}
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
    let Data6 = localStorage.getItem("localData6");
    let Data7 = localStorage.getItem("localData7");
    if (Data6 < 1) {
      Data6 = 25;
    }
    localStorage.setItem(
      "localData7",
      toInteger(toInteger(Data6) + toInteger(Data7))
    );
  }
  formResetter() {
    try {
      document.forms.medForm.reset();
      document.forms.fraForm.reset();
      document.forms.myForm.elements[0].disabled = false;
      document.forms.fraForm.elements[0].disabled = false;
      document.forms.medForm.elements[0].disabled = false;
      if (document.forms.myForm.elements[0].checked !== true) {
        document.forms.myForm.elements[0].checked = true;
      }
      if (document.forms.medForm.elements[0].checked !== true) {
        document.forms.medForm.elements[0].checked = true;
      }
      if (document.forms.fraForm.elements[0].checked !== true) {
        document.forms.fraForm.elements[0].checked = true;
      }
    } catch (error) {}
  }

  componentDidMount() {
    this.setState({
      viewPrice: toInteger(this.state.viewPrice),
    });
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }
  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      false
    );
  }

  useMountEffect = (fun) => this.useEffect(fun, []);

  updateForm = () => {
    var CartData;
    var x = document.forms.myForm.elements; //size
    var y = document.forms.medForm.elements; //medium
    var z = document.forms.fraForm.elements; //style
    var x1 = 0;
    var y1 = 0;
    var z1 = 0;
    ////on select wood , cancel GALLERY MOUNT, FLOATING FRAME, MAUI & HAWAII
    try {
      if (window.location.hash === "#/dashboards/william") {
        if (x[0].value === "12x18") {
          if (y[1].checked) {
            z[0].disabled = true;
            z[1].disabled = true;
            z[2].disabled = false;
            z[3].disabled = false;
            z[4].disabled = true;
            z[5].disabled = true;
            //if wood & not selected float or black select float
            if (z[2].checked === false) {
              if (z[3].checked === false) {
                z[2].checked = true;
              }
            }
          }
        }
      } ////on select metal , enableall but, black MAUI & HAWAII

      ////on select wood , cancel GALLERY MOUNT, FLOATING FRAME, MAUI & HAWAII

      if (window.location.hash === "#/dashboards/john") {
        if (x[0].value === "12x18") {
          if (y[1].checked) {
            z[0].disabled = true;
            z[1].disabled = true;
            z[2].disabled = false;
            z[3].disabled = false;
            z[4].disabled = true;
            z[5].disabled = true;
            //if wood & not selected float or black select float
            if (z[2].checked === false) {
              if (z[3].checked === false) {
                z[2].checked = true;
              }
            }
          }
        }
      } ////on select metal , enableall but, black MAUI & HAWAII

      if (window.location.hash !== "#/dashboards/dave") {
        if (y[0].checked) {
          z[0].disabled = false;
          z[1].disabled = false;
          z[2].disabled = true;
          z[3].disabled = true;
          z[4].disabled = true;
          z[5].disabled = true;
          if (z[0].checked === false) {
            if (z[1].checked === false) {
              if (z[2].checked === false) {
                z[0].checked = true;
              }
            }
          }
        }

        ////on select canvas , disable  BASIC HANGE, GALLERY MOUNT, FLOATING FRAME
        if (y[2].checked) {
          if (z[0].checked) {
            z[3].checked = true;
          }
          if (z[1].checked) {
            z[3].checked = true;
          }
          if (z[2].checked) {
            z[3].checked = true;
          }
          z[0].disabled = true;
          z[1].disabled = true;
          z[2].disabled = true;
          z[3].disabled = false;
          z[4].disabled = false;
          z[5].disabled = false;
        }
      }
      // medium     var y
      //size     var x
      //style    var z
      ////on daveshop, not alt
      if (window.location.hash === "#/dashboards/dave") {
        if (x[0].value === "8x20") {
          //on select canvas ,
          if (y[2].checked) {
            z[0].disabled = true;
            z[1].disabled = false;
            z[2].disabled = false;
            z[3].disabled = true;
            z[4].disabled = true;
            z[5].disabled = true;

            //if not 1 style checked, check lowest
            if (!z[1].checked) {
              if (!z[2].checked) {
                z[1].checked = true;
              }
            }
          }
        }
        //select metal : basic gallery for small + gall float else
        if (y[0].checked) {
          if (x[0].checked) {
            z[0].disabled = false;
            z[1].disabled = false;
            z[2].disabled = true;
            z[3].disabled = true;
            z[4].disabled = true;
            z[5].disabled = true;
          }
        }
        // medium     var y
        //size     var x
        //style    var z
        if (x[0].value === "12x18") {
          if (!x[0].checked) {
            if (y[0].checked) {
              if (z[0].checked) {
                z[1].checked = true;
              }
              z[0].disabled = true;
              z[1].disabled = false;
              z[2].disabled = false;
              z[3].disabled = true;
              z[4].disabled = true;
              z[5].disabled = true;
            }
          }
          ////on select canvas , disable  BASIC HANGE, GALLERY MOUNT, FLOATING FRAME
          else if (y[2].checked) {
            if (z[0].checked) {
              z[3].checked = true;
            }
            if (z[1].checked) {
              z[3].checked = true;
            }
            if (z[2].checked) {
              z[3].checked = true;
            }
            //on select canvas ,
            if (y[2].checked) {
              //if not metal 1 checked
              if (!z[3].checked) {
                if (!z[4].checked) {
                  if (!z[5].checked) {
                    z[3].checked = true;
                  }
                }
              }
            }
            z[0].disabled = true;
            z[1].disabled = true;
            z[2].disabled = true;
            z[3].disabled = false;
            z[4].disabled = false;
            z[5].disabled = false;
          }
        }
      }

      // medium     var y
      //style    var z
      //size     var x
      ////on daveshop, alt,
      if (window.location.hash === "#/dashboards/dave") {
        if (x[0].value === "8x20") {
          //if metal
          if (y[0].checked) {
            //disable basic
            z[1].disabled = false;
          }
          //select wood , enable float & black only
          if (y[1].checked) {
            z[0].disabled = true;
            z[1].disabled = true;
            z[2].disabled = false;
            z[3].disabled = false;
            z[4].disabled = true;
            z[5].disabled = true;
          }
          if (y[2].checked) {
            z[0].disabled = true;
            z[1].disabled = false;
            z[2].disabled = true;
            z[3].disabled = true;
            z[4].disabled = true;
            z[5].disabled = true;
          }
        }
      }
      ////on select float , cancel 12x18, select 16x24

      // medium     var y
      //size     var x
      //style    var z
      if (window.location.hash !== "#/dashboards/dave") {
        if (y[2].checked) {
          if (x[0].checked) {
            if (z[2].checked) {
              x[1].checked = true;
            }
          }
        }
      }

      ////on select gallery , cancel 12x18, select 16x24

      if (!(window.location.hash === "#/dashboards/dave")) {
        if (z[1].checked) {
          if (x[0].checked) {
            x[0].disabled = true;
            x[1].checked = true;
          }
          x[0].disabled = true;
        }
      }
      // medium     var y
      //size     var x
      //style    var z
      ////if william & not wood & not smallest size checked, remove basic
      if (window.location.hash === "#/dashboards/william") {
        if (!y[1].checked) {
          if (!x[0].checked) {
            if (z[0].checked) {
              z[1].checked = true;
            }
            z[0].disabled = true;
          }
        }
      }
      if (window.location.hash === "#/dashboards/john") {
        if (!y[1].checked) {
          if (!x[0].checked) {
            if (z[0].checked) {
              z[1].checked = true;
            }
            z[0].disabled = true;
          }
        }
      }

      // medium     var y
      //size     var x
      //style    var z
      //if 12x18 exist then on metal allow

      if (x[0].value === "12x18") {
        if (y[0].checked) {
          if (!x[0].checked) {
            z[0].disabled = true;
            z[2].disabled = false;
          }
        }
      }
      if (x[0].value !== "12x18") {
        if (y[0].checked) {
          z[0].disabled = false;
          z[1].disabled = false;
          z[2].disabled = true;
          z[3].disabled = true;
          z[4].disabled = true;
          z[5].disabled = true;
          if (z[0].checked === false) {
            if (z[1].checked === false) {
              if (z[2].checked === false) {
                z[0].checked = true;
              }
            }
          }
          if (!x[0].checked) {
            z[0].disabled = true;
            z[2].disabled = false;
          }
        }
      }

      //dave metal alt size difference section
      //
      if (window.location.hash === "#/dashboards/dave") {
        if (x[0].value === "12x18") {
          // medium     var y
          //size     var x
          //style    var z

          if (x[0].checked) {
            if (y[0].checked) {
              if (!z[0].checked) {
                z[0].checked = true;
              }
            }
          }
          if (!x[0].checked) {
            if (document.forms.medForm.elements[0].checked) {
              if (document.forms.fraForm.elements[0].checked === true) {
                document.forms.fraForm.elements[1].checked = true;
              }
              document.forms.fraForm.elements[0].disabled = true;
            }

            if (document.forms.medForm.elements[1].checked) {
              if (document.forms.fraForm.elements[1].disabled === true) {
                document.forms.fraForm.elements[1].disabled = false;
                document.forms.fraForm.elements[2].disabled = false;
                document.forms.fraForm.elements[3].disabled = true;
              }
            }
          }
          if (x[0].checked) {
            if (document.forms.medForm.elements[0].checked) {
              document.forms.fraForm.elements[1].disabled = true;
            }
          }
        }
      }
      //dave metal alt size difference section
      //
      if (window.location.hash === "#/dashboards/dave") {
        if (x[0].value === "8x16") {
          if (!x[0].checked) {
            if (document.forms.medForm.elements[0].checked) {
              if (document.forms.fraForm.elements[0].checked === true) {
                document.forms.fraForm.elements[1].checked = true;
              }
              document.forms.fraForm.elements[0].disabled = true;
            }
          }
          if (document.forms.fraForm.elements[1].checked === true) {
            if (document.forms.myForm.elements[0].checked === true) {
              document.forms.myForm.elements[1].checked = true;
              document.forms.fraForm.elements[0].disabled = true;
              document.forms.fraForm.elements[2].disabled = false;
              document.forms.myForm.elements[0].disabled = true;
            }
          }
          if (document.forms.medForm.elements[2].checked === true) {
            if (document.forms.fraForm.elements[0].checked === true) {
              document.forms.fraForm.elements[1].checked = true;
              document.forms.myForm.elements[1].checked = true;
              document.forms.fraForm.elements[0].disabled = true;
              document.forms.fraForm.elements[2].disabled = true;
            }
          }
        }
      }
      if (window.location.hash === "#/dashboards/dave") {
        if (x[0].value === "8x20") {
          // medium     var y
          //size     var x
          //style    var z

          if (x[0].checked) {
            if (y[0].checked) {
              if (!z[0].checked) {
                z[0].checked = true;
              }
            }
          }
          if (!x[0].checked) {
            if (document.forms.medForm.elements[0].checked) {
              if (document.forms.fraForm.elements[0].checked === true) {
                document.forms.fraForm.elements[1].checked = true;
              }
              document.forms.fraForm.elements[0].disabled = true;
            }

            if (document.forms.medForm.elements[1].checked) {
              if (document.forms.fraForm.elements[1].disabled === true) {
                document.forms.fraForm.elements[1].disabled = false;
                document.forms.fraForm.elements[2].disabled = false;
                document.forms.fraForm.elements[3].disabled = true;
              }
            }
          }
          if (x[0].checked) {
            if (document.forms.medForm.elements[0].checked) {
              document.forms.fraForm.elements[1].disabled = true;
            }
          }
        }
      }
      //dave wood select, change radios
      //
      if (window.location.hash === "#/dashboards/dave") {
        if (x[0].value === "12x18") {
          // if wood alt
          if (document.forms.medForm.elements[1].checked) {
            //if
            if (document.forms.fraForm.elements[2].checked !== true) {
              if (document.forms.fraForm.elements[3].checked !== true) {
                document.forms.fraForm.elements[2].checked = true;
              }
            }

            document.forms.fraForm.elements[0].disabled = true;
            document.forms.fraForm.elements[1].disabled = true;
            document.forms.fraForm.elements[2].disabled = false;
            document.forms.fraForm.elements[3].disabled = false;
            document.forms.fraForm.elements[4].disabled = true;
            document.forms.fraForm.elements[5].disabled = true;
          }
        }
      }

      if (y[0].checked) {
        CartData = ", Metal ,";
        this.props.product.price = toInteger(this.state.newPrice);
        x1 = 1;
      } else if (!y[0].checked && !y[2].checked) {
        CartData = ", Wood ,";
        x1 = 2;
        this.props.product.price = toInteger(this.state.newPrice);
      } else {
        CartData = ", Canvas ,";
        x1 = 3;
        this.props.product.price = toInteger(this.state.newPrice);
      }

      if (z[0].checked) {
        CartData = CartData + "Basic ,";
        y1 = 1;
      } else if (z[1].checked) {
        CartData = CartData + "Gallery ,";
        y1 = 2;
      } else if (z[2].checked) {
        CartData = CartData + "Float ,";
        y1 = 3;
      } else if (z[3].checked) {
        CartData = CartData + "Black ,";
        y1 = 4;
      } else if (z[4].checked) {
        CartData = CartData + "Maui ,";
        y1 = 5;
      } else if (z[5].checked) {
        CartData = CartData + "Hawaii ,";
        y1 = 6;
      }

      if (x[0].checked) {
        CartData = CartData + ("Size: " + x[0].value + "\r\n");
        z1 = 1;
      } else if (x[1].checked) {
        CartData = CartData + ("Size: " + x[1].value + "\r\n");
        z1 = 2;
      } else if (x[2].checked) {
        CartData = CartData + ("Size: " + x[2].value + "\r\n");
        z1 = 3;
      } else if (x[3].checked) {
        CartData = CartData + ("Size: " + x[3].value + "\r\n");
        z1 = 4;
      } else {
        CartData = CartData + ("Size: " + x[0].value + "\r\n");
        z1 = 5;
      }
      // medium     var y
      //size     var x
      //style    var z
      ///if no style radio checked, check lowest //WIP/**/
      /*
    if (!z[0].checked) {
      if (!z[1].checked) {
        if (!z[2].checked) {
          if (!z[3].checked) {
            if (!z[4].checked) {
              if (!z[5].checked) {
                z[0].checked = true;
              }
            }
          }
        }
      }
    }
    */
      let prodMod = 0;
      let shipMod = 0;
      if (z1 === 5) {
      }
      if (y1 === 1) {
      }
      //// if 8x20s basics
      if (x[0].value === "8x20") {
        prodMod = prodMod + 90;
      } 

      if (x[0].value === "12x18") {
       if (z[0].checked === true) {
        prodMod =  125;
       } else {
        prodMod = 100;
      }
      }
      if (y1 === 2) {
        // Gallery Types

        if (!window.location === "#/dashboards/dave") {
          //nott davepage
          prodMod = prodMod + 100;
        } else prodMod = prodMod + 100;
      }
      if (x1 === 2) {
        //Woods
        prodMod = prodMod + 120;
      }
      if (z1 === 2) {
        //Size2
        prodMod = prodMod + 20;
      }
      if (y1 === 3) {
        //Floats style
        prodMod = prodMod + 210;
      }
      // medium     var y
      //size     var x
      //style    var z

      if (x1 === 3) {
        //Canvas
        prodMod = prodMod + 100;
      }
      if (z1 === 3) {
        //Size3
        prodMod = prodMod + 120;
      }
      if (y1 === 4) {
        //Black
        prodMod = prodMod + 160;
      }

      if (z1 === 4) {
        //Size4
        prodMod = prodMod + 220;
      }
      if (y1 === 5) {
        //Hawaii Frame
        prodMod = prodMod + 100;
      }
      if (y1 === 6) {
        //MauiFrame
        prodMod = prodMod + 100;
      }

      // medium     var y
      //size     var x
      //style    var z

      //if william wood float size 1 add 140
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 2) {
          if (y1 === 3) {
            if (z1 === 1) {
              prodMod = prodMod - 310;
              shipMod = 30;
            }
          }
        }
      }
      //if william wood float size 2 add 140
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 2) {
          if (y1 === 3) {
            if (z1 === 2) {
              prodMod = prodMod - 210;
              shipMod = 45;
            }
          }
        }
      }
      
      //if william wood black size 1 add x
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 2) {
          if (y1 === 4) {
            if (z1 === 1) {
              prodMod = prodMod - 100;

              shipMod = 45;
            }
          }
        }
      }
      //if william wood black size 2 add 80
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 2) {
          if (y1 === 4) {
            if (z1 === 2) {
              prodMod = prodMod - 20;

              shipMod = 45;
            }
          }
        }
      }

      //if william wood float size 3 add 240
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 2) {
          if (y1 === 3) {
            if (z1 === 3) {
              prodMod = prodMod + -250;

              shipMod = 65;
            }
          }
        }
      }
      //if william wood black size 3 add A
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 2) {
          if (y1 === 4) {
            if (z1 === 3) {
              prodMod = prodMod - 20;
              shipMod = 65;
            }
          }
        }
      }
      //if william wood float size 4 add 60
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 2) {
          if (y1 === 3) {
            if (z1 === 4) {
              prodMod = prodMod - 250;
              shipMod = 85;
            }
          }
        }
      }

      //if william wood black size 4 add A
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 2) {
          if (y1 === 4) {
            if (z1 === 4) {
              prodMod = prodMod - 20;
              shipMod = 85;
            }
          }
        }
      }
      //if william canvas black size 1 add A
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 4) {
            if (z1 === 1) {
              prodMod = prodMod - 160;
              shipMod = 30;
            }
          }
        }
      }
      //if william canvas Hawaii size 1 add A
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 5) {
            if (z1 === 1) {
              prodMod = prodMod ;
              shipMod = 30;
            }
          }
        }
      }
      //if william canvas Maui size 1 add AB
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 6) {
            if (z1 === 1) {
              prodMod = prodMod ;
              shipMod = 30;
            }
          }
        }
      }
      ///sizes 2
      //if william canvas black size 2 add A
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 4) {
            if (z1 === 2) {
              prodMod = prodMod - 80;
              shipMod = 45;
            }
          }
        }
      }
      //if william canvas Hawaii size 2 add B
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 5) {
            if (z1 === 2) {
              prodMod = prodMod + 80;
              shipMod = 45;
            }
          }
        }
      }
      //if william canvas Maui size 2 add CB
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 6) {
            if (z1 === 2) {
              prodMod = prodMod + 80;
              shipMod = 45;
            }
          }
        }
      }
      ///sizes 3
      //if william canvas black size 3 add A
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 4) {
            if (z1 === 3) {
              prodMod = prodMod - 60;
              shipMod = 65;
            }
          }
        }
      }
      //if william canvas Hawaii size 3 add B
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 5) {
            if (z1 === 3) {
              prodMod = prodMod + 80;
              shipMod = 65;
            }
          }
        }
      }
      //if william canvas Maui size 3 add CB
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 6) {
            if (z1 === 3) {
              prodMod = prodMod + 80;
              shipMod = 65;
            }
          }
        }
      }
      ///sizes 4
      //if william canvas black size 4 add A
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 4) {
            if (z1 === 4) {
              prodMod = prodMod - 60;
              shipMod = 85;
            }
          }
        }
      }
      //if william canvas Hawaii size 4 add B
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 5) {
            if (z1 === 4) {
              prodMod = prodMod + 80;
              shipMod = 85;
            }
          }
        }
      }
      //if william canvas Maui size 4 add CB
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 6) {
            if (z1 === 4) {
              prodMod = prodMod + 80;
              shipMod = 85;
            }
          }
        }
      }

      //if john canvas Maui size 4 add C
      if (
        window.location.hash === "#/dashboards/william" ||
        window.location.hash === "#/dashboards/john"
      ) {
        if (x1 === 3) {
          if (y1 === 6) {
            if (z1 === 4) {
              prodMod = prodMod + 80;
              shipMod = 85;
            }
          }
        }
      }

      //dave
      ///sizes 1
      ///metals
      //if black add A
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 1) {
          if (y1 === 1) {
            if (z1 === 1) {
              prodMod = prodMod + 0;
              shipMod = 25;
            }
          }
        }
      }
      //if Hawaii add B
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 1) {
          if (y1 === 2) {
            if (z1 === 1) {
              prodMod = prodMod - 80;
              shipMod = 25;
            }
          }
        }
      }
      //dave
      ///sizes 2
      ///metals
      //if black add A
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 1) {
          if (y1 === 2) {
            if (z1 === 2) {
              prodMod = prodMod + 10;
              shipMod = 30;
            }
          }
        }
      }
      //if Hawaii add B
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 1) {
          if (y1 === 3) {
            if (z1 === 2) {
              prodMod = prodMod + 10;
              shipMod = 30;
            }
          }
        }
      }
      //if Canvas & Gallery add B
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 3) {
          if (y1 === 2) {
            if (z1 === 2) {
              prodMod = prodMod - 70;
              shipMod = 30;
            }
          }
        }
      }

      //dave
      ///sizes 3
      ///metals
      //if black add A
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 1) {
          if (y1 === 2) {
            if (z1 === 3) {
              prodMod = prodMod + 130;
              shipMod = 50;
            }
          }
        }
      }
      //if Hawaii add B
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 1) {
          if (y1 === 3) {
            if (z1 === 3) {
              prodMod = prodMod + 140;
              shipMod = 50;
            }
          }
        }
      }
      //if Canvas & Gallery add B
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 3) {
          if (y1 === 2) {
            if (z1 === 3) {
              prodMod = prodMod + 50;
              shipMod = 50;
            }
          }
        }
      }
      //dave
      ///sizes 4
      //if black add A
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 1) {
          if (y1 === 2) {
            if (z1 === 4) {
              prodMod = prodMod + 210;
              shipMod = 100;
            }
          }
        }
      }
      //if Hawaii add B
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 1) {
          if (y1 === 3) {
            if (z1 === 4) {
              prodMod = prodMod + 210;
              shipMod = 100;
            }
          }
        }
      }
      //if Canvas & Gallery add B
      if (window.location.hash === "#/dashboards/dave") {
        if (x1 === 3) {
          if (y1 === 2) {
            if (z1 === 4) {
              prodMod = prodMod + 130;
              shipMod = 100;
            }
          }
        }
      }
      //if dave alt wood : priceMod
      if (window.location.hash === "#/dashboards/dave") {
        if (x[0].value === "12x18") {
          if (x1 === 2) {
            //wood
            if (y1 === 3) {
              //style float
              if (z1 === 1) {
                //size 1
                prodMod = 120;
                shipMod = 30;
              }
              if (z1 === 2) {
                //size 2
                prodMod = 240;
                shipMod = 45;
              }
              if (z1 === 3) {
                //size 3
                prodMod = 300;
                shipMod = 65;
              }
              if (z1 === 4) {
                //size 4
                prodMod = 400;
                shipMod = 85;
              }
            }
            if (y1 === 4) {
              //style black
              if (z1 === 1) {
                //size 1
                prodMod = 280;
                shipMod = 30;
              }
              if (z1 === 2) {
                //size 2
                prodMod = 380;

                shipMod = 45;
              }
              if (z1 === 3) {
                //size 3
                prodMod = 480;
                shipMod = 65;
              }
              if (z1 === 4) {
                //size 4
                prodMod = 580;
                shipMod = 85;
              }
            }
          }
        }
        if (x1 === 3) {
          //canvas
          if (y1 === 4) {
            //style black
            if (z1 === 1) {
              //size 1
              prodMod = 200;

              shipMod = 30;
            }
            if (z1 === 2) {
              //size 2
              prodMod = 300;
              shipMod = 45;
            }
            if (z1 === 3) {
              //size 3
              prodMod = 420;
              shipMod = 65;
            }
            if (z1 === 4) {
              //size 4
              prodMod = 520;
              shipMod = 85;
            }
          }
          if (y1 === 5) {
            //style hawaii
            if (z1 === 1) {
              //size 1
              prodMod = 300;

              shipMod = 30;
            }
            if (z1 === 2) {
              //size 2
              prodMod = 400;
              shipMod = 45;
            }
            if (z1 === 3) {
              //size 3
              prodMod = 500;
              shipMod = 65;
            }
            if (z1 === 4) {
              //size 4
              prodMod = 600;
              shipMod = 85;
            }
          }
          if (y1 === 6) {
            //style maui
            if (z1 === 1) {
              //size 1
              prodMod = 300;

              shipMod = 30;
            }
            if (z1 === 2) {
              //size 2
              prodMod = 400;
              shipMod = 45;
            }
            if (z1 === 3) {
              //size 3
              prodMod = 500;
              shipMod = 65;
            }
            if (z1 === 4) {
              //size 4
              prodMod = 600;
              shipMod = 85;
            }
          }
        }
      } //if dave
      if (window.location.hash === "#/dashboards/dave") {
        if (x[0].value === "12x18") {
          //alt
          if (x1 === 1) {
            //metal
            if (y1 === 1) {
              //basic
              if (z1 === 2) {
                //12x18
                prodMod = 120;

                shipMod = 30;
              }
            }
            //gallery
            if (y1 === 2) {
              prodMod = prodMod - 10;
              if (z1 === 3) {
                prodMod = prodMod - 120;

                shipMod = 65;
              }
              if (z1 === 4) {
                prodMod = prodMod - 200;

                shipMod = 85;
              }
            } //float
            if (y1 === 3) {
              prodMod = prodMod - 10;
              if (z1 === 3) {
                prodMod = prodMod - 130;

                shipMod = 65;
              }
              if (z1 === 4) {
                prodMod = prodMod - 200;

                shipMod = 85;
              }
            }
          }
        }
        //alt check
        if (x[0].value === "8x20") {
          //canvas
          if (x1 === 1) {
            if (z1 === 4) {
              shipMod = 25;
            }
          }

          //canvas
          if (x1 === 3) {
            //gallery
            if (y1 === 2) {
              //smallest
              if (z1 === 1) {
                //cost
                prodMod = prodMod - 180;
                shipMod = 25;
              }
              if (z1 === 2) {
                //cost
                shipMod = 30;
              }
              if (z1 === 3) {
                //cost
                prodMod = prodMod + 130;

                shipMod = 50;
              }
            }
            //gallery
          }
        }
      }
      //if not dave & 12x18
      if (window.location.hash !== "#/dashboards/dave") {
        if (x[0].value === "12x18") {
          //reg
          if (x1 === 1) {
            //metal
            if (y1 === 1) {
              //basic
              shipMod = 25;
              if (z1 === 2) {
                //16x24
                shipMod = 40;
              }
            }
            //gallery
            if (y1 === 2) {
              shipMod = 40;
              if (z1 === 3) {
                shipMod = 60;
              }
              if (z1 === 4) {
                shipMod = 80;
              }
            } //float
            if (y1 === 3) {
              shipMod = 40;
              if (z1 === 3) {
                shipMod = 60;
              }
              if (z1 === 4) {
                shipMod = 80;
              }
            }
          }
        }
      }
      if (window.location.hash === "#/dashboards/dave") {
        if (x[0].value === "8x16") {
          //1:2
          if (x1 === 1) {
            //metal
            if (y1 === 1) {
              //basic
              if (z1 === 1) {
                //size1
                prodMod = 85;
                shipMod = 20;
              }
            }
            //gallery
            if (y1 === 2) {
              shipMod = 30;
              prodMod = 210;
              if (z1 === 3) {
                shipMod = 50;
                prodMod = 420;
              }
            } //float
            if (y1 === 3) {
              shipMod = 40;
              if (z1 === 2) {
                shipMod = 50;
                prodMod = 320;
              }
              if (z1 === 3) {
                shipMod = 50;
              }
            }
          }
          if (x1 === 3) {
            //canvas
            prodMod = 100;
            shipMod = 20;
            if (z1 === 2) {
              //size2
              prodMod = 230;
              shipMod = 30;
            }
            if (z1 === 3) {
              //size2
              prodMod = 440;
              shipMod = 50;
            }
          }
        }
      }

      localStorage.setItem("localData6", toInteger(shipMod));

      this.props.product.price = prodMod;
      this.setState({ newPrice: localStorage.getItem("localData5") });

      localStorage.setItem("localData5", toInteger(this.state.newPrice));

      this.loadUp(this.state.newPrice);
    } catch (error) {}
  };
  handleClickOutside(event) {
    const domNode = findDOMNode(this.refs.modal);
    if (!domNode || !domNode.contains(event.target)) {
      this.props.closeModal();
    }
  }

  handleClose() {
    this.formResetter();

    this.props.closeModal();
  }

  loadUp(varz) {
    this.state.viewPrice = this.props.product.price;
    this.state.steadyPrice = this.props.product.price;
    this.props.product.price = toInteger(this.state.viewPrice);
    this.state.newPrice = toInteger(this.state.viewPrice);

    localStorage.setItem(
      "localData5",
      this.props.product.price,
      localStorage.getItem("localData5")
    );

    return (varz = localStorage.getItem("localData5"));
  }

  render() {
    let productsData;
    let shopData = [];
    let data;
    let key;
    let image = this.props.product.image;
    let name = this.props.product.name;
    let price = this.props.product.price;
    let id = this.props.product.id;
    let quantity = this.props.productQuantity;
    let size = this.props.productSize;
    let sizeForm = this.props.productSize;
    let style = this.props.product.productStyle;
    let stock = this.props.product.productStock;

    return (
      <div
        className={
          this.props.openModal ? "modal-wrapper active" : "modal-wrapper"
        }
        style={{
          zIndex: 999,
        }}
      >
        {" "}
        <div
          className="modala"
          ref="modal"
          style={{
            zIndex: 999,
          }}
        >
          <button
            type="button"
            className="close"
            style={{
              top: 100,
              width: "75px",
              height: "75px",
              size: 10,
            }}
            onClick={this.handleClose.bind(this)}
          >
            &times;
          </button>
          <div
            className="quick-view"
            style={{
              zIndex: 999,
            }}
          >
            <div
              className="quick-view-image"
              style={{
                maxHeight: "650px",
                top: 0,
                left: 25,
              }}
            >
              <img
                src={this.props.product.image}
                alt={this.props.product.name}
                style={{
                  maxHeight: "650px",
                  maxWidth: "100%",
                  top: 0,
                  zIndex: 9998,
                }}
              />
            </div>
            <div
              onClick={this.onClick}
              className="quick-view-details"
              style={{
                marginTop: "-75px",
                color: "white",
              }}
            >
              <h3>
                <center>
                  <span className="product-name">
                    {this.props.product.name}
                  </span>
                </center>
              </h3>
              <center>
                <div
                  style={{
                    fontSize: "20px",
                    minWidth: "300px",
                  }}
                >
                  <tr
                    style={{
                      backgroundColor: "transparent",
                      position: "relative",
                      opacity: 100,
                      border: "2px",
                    }}
                  >
                    <td
                      width="70%"
                      style={{
                        position: "relative",
                      }}
                    >
                      <form id="medForm">
                        <tr>
                          <i
                            class="pe-7s-info"
                            onClick={() =>
                              (window.location = "#/dashboards/mediums")
                            }
                            style={{
                              position: "relative",
                              left: "auto",
                            }}
                          ></i>
                          <b
                            style={{
                              position: "relative",
                              left: "auto",
                            }}
                          >
                            Medium:
                          </b>
                        </tr>
                        <span
                          style={{
                            position: "relative",
                            textAlign: "center",
                          }}
                        >
                          <i
                            class="zoom"
                            onClick={() => this.formResetter()}
                            class="pe-7s-refresh"
                            alt="refresh"
                            style={{
                              position: "relative",
                              left: "-5px",
                            }}
                          ></i>
                          <input
                            type="radio"
                            defaultChecked
                            id="RDM1"
                            name="RF2"
                          />
                          Metal &nbsp;&nbsp;
                          <input
                            type="radio"
                            disabled={
                              window.location.hash === "#/dashboards/dave"
                            }
                            id="RDM2"
                            name="RF2"
                          />
                          Wood &nbsp;&nbsp;
                          <input type="radio" id="RDM3" name="RF2" />
                          Canvas &nbsp;&nbsp;
                        </span>{" "}
                      </form>
                    </td>
                  </tr>
                  <form id="fraForm">
                    <tr
                      style={{
                        backgroundColor: "transparent",
                        justifyContent: "center",
                        opacity: 100,
                        width: "100%",
                      }}
                    >
                      <td width="40%">
                        <tr>
                          <i
                            onClick={() =>
                              (window.location = "#/dashboards/frames")
                            }
                            class="pe-7s-info"
                            style={{
                              position: "relative",
                              left: "auto",
                            }}
                          ></i>
                          <b
                            style={{
                              position: "relative",
                              left: "auto",
                            }}
                          >
                            Style:
                          </b>
                        </tr>
                        <input
                          type="radio"
                          defaultChecked
                          id="RDF1"
                          name="RF1"
                        />
                        Basic &nbsp;&nbsp;
                        <input type="radio" id="RDF2" name="RF1" />
                        Gallery &nbsp;&nbsp;
                        <input
                          type="radio"
                          disabled={
                            window.location.hash === "#/dashboards/dave" ||
                            window.location.hash === "#/dashboards/william"
                          }
                          id="RDF3"
                          name="RF1"
                        />
                        Float &nbsp;&nbsp;
                      </td>
                    </tr>
                    <tr
                      style={{
                        backgroundColor: "transparent",
                        justifyContent: "center",
                        opacity: 100,
                        width: "100%",
                      }}
                    >
                      <td width="40%">
                        <input type="radio" id="RDF4" name="RF1" disabled />
                        Black &nbsp;&nbsp;
                        <input type="radio" id="RDF5" name="RF1" disabled />
                        Hawaii &nbsp;&nbsp;
                        <input type="radio" id="RDF6" name="RF1" disabled />
                        Maui &nbsp;&nbsp;
                      </td>
                    </tr>
                  </form>
                  <tr
                    style={{ marginTop: "10px", display: "block", top: "50px" }}
                  >
                    <td width="70%">
                      <SizeCounter
                        productSize={this.props.product.size}
                        productStyle={style}
                      />
                    </td>
                  </tr>
                </div>
              </center>
              <center>
                {" "}
                <span
                  className="product-price"
                  style={{
                    color: "lightsteelblue",
                    fontSize: "36px",
                  }}
                >
                  {this.loadUp(this.state.newPrice)}
                </span>{" "}
                &nbsp;&nbsp;&nbsp;
                <button
                  className={!this.state.isAdded ? "" : "added"}
                  type="button"
                  onClick={this.addToCart.bind(
                    this,
                    image,
                    name,
                    price,
                    id,
                    quantity
                  )}
                >
                  {!this.state.isAdded ? "Add to Cart" : "✔ ADDED"}
                </button>{" "}
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickView;
