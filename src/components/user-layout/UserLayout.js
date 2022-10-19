import React from "react";
import { illustrate, logo } from "../../assets";
import "./user-layout.scss";

function UserLayout({ children, ...props }) {
	return (
		<div>
			<div className="user-layout-flex flex justify-between">
				<div
					className="user-layout-image"
					style={{ background: `url(${props.background})` }}
				>
					{/* <img src={illustrate} alt="img.jpg" /> */}
					{/* <div className="logo">
						<img src={logo} alt="img.jpg" />
					</div> */}
				</div>
				<div className="user-layout-container">{children}</div>
			</div>
		</div>
	);
}

export default UserLayout;
