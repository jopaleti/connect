import React from "react";
import { dup } from "../../assets";
import "./key.scss";

function Key(props) {
	return (
		<div className="key">
			<div className="flex items-start justify-between key-container p-6">
				<div className="key-left flex flex-col">
					<div className="flex items-center gap-8">
						<h1>{props.server}</h1>
						<span className="px-3">Full Access</span>
					</div>
					<div className="flex items-center gap-4 mt-5">
						<h6>{props.secret}</h6>
						<small className="px-3 copy">
							<img src={dup} alt="img.jpg" />
						</small>
					</div>
					<div className="key-last mt-2">
						<p>{props.time}</p>
					</div>
				</div>
				<div className="key-right">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default Key;
