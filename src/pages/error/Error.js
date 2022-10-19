import React from "react";
import { Link } from "react-router-dom";
import { error } from "../../assets";
import "./error.scss";

function Error() {
	return (
		<div className="error flex flex-col items-center justify-center ">
			<div className="flex-1 text-center mt-20">
				<h1>Page Not Found ⚠️</h1>
				<p className="mt-4">
					The requested URL /error was not found on this server.
				</p>
				<div className="mt-10">
					<Link to="/" className="px-8 py-3 text-white">
						Back to home
					</Link>
				</div>
			</div>
			<div className="flex-2">
				<img src={error} alt="img.jpg" />
			</div>
		</div>
	);
}

export default Error;
