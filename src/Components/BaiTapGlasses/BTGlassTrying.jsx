import React, { Component } from "react";
import style from "./BTGlassTryingCSS.module.css";
import DanhSachGlasses from "./DanhSachGlasses";
import ModelImage from "../../img/glassesImage/model.jpg";

export default class BTGlassTrying extends Component {
  state = {
    glassPicked: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  render() {
    let thuKinh = (newKinh) => {
      let kinhChon = this.arrProduct.find((kinh) => kinh.id === newKinh.id);
      this.setState({
        glassPicked: kinhChon,
      });
    };
    return (
      <div className={style["container"]}>
        <p className={`${style["textRed"]} text-center text-weight-bold`}>
          Try Glasses App Online
        </p>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img className="img-fluid" src={ModelImage} alt="model" />
              <div id={style["kinhPick"]}>
                <img
                  style={{ width: "200px" }}
                  src={this.state.glassPicked.url}
                  alt={this.state.glassPicked.name}
                />
              </div>
              <div className={style["thongTinKinh"]}>
                <h3>{this.state.glassPicked.name}</h3>
                <p>{this.state.glassPicked.desc}</p>
              </div>
            </div>
            <div className="col-8">
              <DanhSachGlasses arrProduct={this.arrProduct} thuKinh={thuKinh} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
