import { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="info">
        <p>Double click to edit a todo</p>
        <p> Created by Tanya :)</p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    );
  }
}
