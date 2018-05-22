import React from "react";

export default function Page(props: Props) {
    return (
        <div className="whml-page border margin">
            <button className="whml-page-btn ng-binding">{props.label}</button>
        </div>
    );
}