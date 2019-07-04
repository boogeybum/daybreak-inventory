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
    <div className= {props.colspecs ? props.colspecs: "form-group"} {...props}>
      <label forhtml = {props.id}>{props.labeltext}</label>
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
      <label for = {props.id}>{props.labeltext}</label>
      <textarea className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className= {props.btndetails ?  props.btndetails : "btn" }>
      {props.children}
    </button>
  );
}

export function FormContainer(props) {
  return (
        <div className="col-md-10">
          {props.children}
        </div>
  );
}

export function NavContainer(props) {
  return (
        <div className="col-md-2">
          {props.children}
        </div>
  )
}