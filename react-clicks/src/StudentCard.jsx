import React, { Component } from "react";

export default class StudentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      img:
        "https://cdn0.iconfinder.com/data/icons/characters-2-2-outlined/227/hulk-superhero-marvel-character-avatar-smileface-profile-512.png",
      msg: " "
    };
  }
  handleLeftClick = e => {
    this.setState({
      color: "red",
      img: "http://getdrawings.com/free-icon-bw/hulk-icon-21.png",
      msg: `I am the mighty ${this.props.name}, How dare you touch me!!?`
    });
  };
  handleRightClick = e => {
    e.preventDefault();
    this.setState({
      color: "blue",
      img:
        "https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/350x350/products/117228/204948/Hulk-379-Decal-Sticker__73044.1511165171.jpg?c=2",
      msg: `Stop. Poking. Around!!`
    });
  };

  handleDbClick = e => {
    this.setState({
      color: "green",
      img:
        "https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/1280x1280/products/85440/182141/Hulk-Fist-Decal-Sticker__21739.1511149680.jpg?c=2?imbypass=on",
      msg: `STOP IT!!!`
    });
    setTimeout(
      () =>
        this.setState({
          color: "black",
          msg: ""
        }),
      2000
    );
  };

  render() {
    return (
      <div className="card">
        <li
          onClick={this.handleLeftClick}
          onDoubleClick={this.handleDbClick}
          onContextMenu={this.handleRightClick}
          className={this.state.color}
        >
          {this.props.name}
          <div>
            <img src={this.state.img} />
          </div>
          <div>{this.state.msg}</div>
        </li>
      </div>
    );
  }
}
