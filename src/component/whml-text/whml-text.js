import React from "react";

export default function Text(props: Props) {
    return (
        <div className="whml-text">
        
            {props.type === "title" && (
                <h2>{props.value}</h2>
            )}

            {props.type === "hint" && (
                <div className="hint">{props.value}</div>
            )}

            {props.type === "regular" && (
                <div className="regular">{props.value}</div>
            )}

        </div>
    );
}