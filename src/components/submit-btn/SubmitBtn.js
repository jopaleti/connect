import React from "react";
import "./submit-btn.scss";

function SubmitBtn(props) {
	return (
		<div className="login-btn">
			<button type="submit">{props.text}</button>
		</div>
	);
}

export default SubmitBtn;
