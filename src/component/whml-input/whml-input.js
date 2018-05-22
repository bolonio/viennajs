import React from "react";

export default function Input(props: Props) {
    return (
        <div className="whml-input">

            {props.type === "money" && (
                <div className="border margin">
                    {props.label && (
                        <div className="input-label">{props.label}</div>
                    )}
                    <div className="input-group">
                        <span className="input-group-addon">{props.unit}</span>
                        <input className="form-control"
                            type="number"
                            placeholder={props.placeholder}/>
                    </div>
                </div>
            )}

            {props.type === "unit" && (
                <div className="border margin">
                    {props.label && (
                        <div className="input-label">{props.label}</div>
                    )}
                    <div className="input-group">
                        <input className="form-control"
                            type="number"
                            placeholder={props.placeholder}/>
                        <span className="input-group-addon">{props.unit}</span>
                    </div>
                </div>
            )}

            {props.type !== "money" &&  props.type !== "unit"  && (
                <div className="border margin">
                    {props.label && (
                        <div className="input-label">{props.label}</div>
                    )}
                    <div className="input-group">
                        <input className="form-control"
                            type={props.type}
                            placeholder={props.placeholder}/>
                    </div>
                </div>
            )}
        </div>
    );
}