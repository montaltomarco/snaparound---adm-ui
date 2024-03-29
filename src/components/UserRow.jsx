"use strict";

import React from "react";

import {checkUser, updateUserPath} from "../actions/UserActions.jsx";

export default React.createClass({
  handleCheckboxChange(e) {
    const fbUserId = this.props.user.get("fbUserId");
    const checked = e.target.checked;
    checkUser(fbUserId, checked);
    if(checked) {
      updateUserPath(fbUserId);
    }
  },
  render() {
    return (
      <li style={{ display: "flex",
                   "justify-content": "space-between",
                   "align-items": "center"}}>
        <img src={this.props.user.get("pic")}
             alt={this.props.user.get("name")}/>
        <p>{this.props.user.get("name")}</p>
        <input type="checkbox"
               checked={this.props.user.get("checked")}
               onChange={this.handleCheckboxChange} />
      </li>
    );
  }
});
