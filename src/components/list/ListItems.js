import { Component } from "react";
import { Item } from "../item/Item.js";

export class ListItems extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      items: this.props.items,
    };
  }

  componentDidUpdate() {
    console.log("Listed items component updated");
    console.log(this.state.items);
    if (this.state.items !== this.props.items) {
      this.setState({ items: this.props.items });
    }
    this.render();
  }

  render() {
    let listItems = this.state.items.map((item) => {
      return <Item key={item} name={item} />;
    });
    console.log(listItems);
    return <ul>{listItems}</ul>;
  }
}
