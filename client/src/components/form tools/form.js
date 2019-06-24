import React from "react";

// This file exports the Input, TextArea, Label, form rows, and FormBtn components
//... that can be reused to make quick boostrap forms.

export function FormRow (props) {
    return (
        <div className = "form-row">{props.children}</div>
    );
}

export function Input(props) {
  return (
    <div className= {props.colSpecs ? props.colSpecs: "form-group"} {...props}>
      <label for = {props.id}>{props.labelText}</label>
      <input className="form-control" {...props} />
    </div>
  );
}

export function Label (props) {
    return (
        <label {...props}>{props.children}</label>
    )
}

export function TextArea(props) {
  return (
    <div className= {props.className ? props.className : "form-group"} {...props}>
      <label for = {props.id}>{props.labelText}</label>
      <textarea className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className= {props.btnDetails ?  props.btnDetails : "btn" }>
      {props.children}
    </button>
  );
}