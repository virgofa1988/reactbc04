import React, { Component } from "react";

export default class DemoClass extends Component {
  // Phương thức render tự kích hoạt khi sử dụng thẻ component
  render() {
    return (
      <div className="container bg-dark p-5 text-light">
        <p className="display-4 pt-2 text-center">Title</p>
        <p className="text-center">Content</p>
      </div>
    );
  }
}
