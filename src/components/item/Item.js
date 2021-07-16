import { Component } from "react";

export class Item extends Component {
  constructor(props) {
    super(props);
    console.log("item state");
    this.state = {
      name: this.props.name,
    };
  }

  render() {
    console.log("rendering item");
    return <li>{this.state.name}</li>;
  }
}
