import React from "react";
import { facebook, git, mail, twitter } from "../../assets";
import "./form-social.scss";

function FormSocial() {
	return (
		<div className="form-social">
			<div className="divider flex items-center justify-between">
				<hr className="line" />
				<small>or</small>
				<hr className="line" />
			</div>
			<div className="img-icon mt-6 flex items-center gap-4 justify-center">
				<img src={facebook} alt="img.jpg" />
				<img src={twitter} alt="img.jpg" />
				<img src={mail} alt="img.jpg" />
				<img src={git} alt="img.jpg" />
			</div>
		</div>
	);
}

export default FormSocial;
