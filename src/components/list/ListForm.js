import { Component } from "react";
import { Item } from "../item/Item.js";
import { ListItems } from "./ListItems.js";
import { itemsListActions } from "../../store";

export class ListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      items: ["hello"],
    };

    console.log(this.store);
  }

  componentDidUpdate() {
    this.renderListItems();
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ inputValue: event.target.value });
    console.log("TODO" + this.state.inputValue);
  };

  handleSubmit(event) {
    if (event.charCode !== 13) {
      return;
    }
    event.preventDefault();
    //create the Todo object
    console.log("TODO" + this.state.inputValue);
    this.setState({ inputValue: event.target.value });
    this.updateItems(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  updateItems(item) {
    this.setState((state) => {
      const items = [...state.items, item];
      return {
        items,
      };
    });
  }

  renderListItems() {
    console.log("should reevaluate");
    if (this.state.items) {
      console.log("rending list");
      console.info(this.state.items);
      return <ListItems items={this.state.items} />;
    }
  }

  render() {
    return (
      <section>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.inputValue}
          onChange={(event) => this.handleChange(event)}
          onKeyPress={(event) => this.handleSubmit(event)}
        ></input>
        {this.renderListItems()}
        <div className="bottom-row"></div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

const mapDispatchToProps = { addItem: itemsListActions.addItems };

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
