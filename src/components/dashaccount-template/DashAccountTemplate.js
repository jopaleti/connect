import React, { useState, useEffect } from "react";
import { button, person } from "../../assets";
import DashboardTemplate from "../dashboard-template/DashboardTemplate";
import "./dashaccount.scss";
import { Link } from "react-router-dom";

function DashAccountTemplate({ children }) {
	// const [plan, setPlan] = useState(false);
	const [curr, setCurr] = useState("");
	useEffect(() => {
		window.location.pathname && setCurr("active");
	}, [window.location.pathname]);
	return (
		<div className="dashacc">
			<DashboardTemplate>
				<div className="dashacc-container mr-8">
					<div className="dash-header flex items-center justify-between mt-10">
						<div className="items-left flex items-center gap-4 acc-flex flex-row">
							<h1 className="pr-4">Account</h1>
							<div className="text-flex flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="#7367F0"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="#7367F0"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</div>
							<div className="text-flex flex items-center gap-2">
								<p>Pages</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="#7367F0"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</div>
							<div className="text-flex flex items-center gap-2">
								<p>User</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="#7367F0"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</div>
							<p>Account Settings</p>
						</div>
						<div className="items-right">
							<img src={button} alt="img.jpg" />
						</div>
					</div>
					<div className="dash-header flex items-center mt-4">
						<div className="items-left flex items-center gap-4 header2 flex-row ">
							<div className="text-flex flex items-center gap-2">
								<div>
									<img src={person} alt="img.jpg" />
								</div>
								<h6>Account</h6>
							</div>
							<Link to="/account">
								<div
									className={`text-flex flex items-center gap-2 ${
										window.location.pathname === "/account" ? curr : ""
									}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke={
											window.location.pathname === "/account"
												? "#fff"
												: "#5E5873"
										}
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
										/>
									</svg>

									<h6>Security</h6>
								</div>
							</Link>
							<Link to="/plan">
								<div
									className={`text-flex flex items-center gap-2 ${
										window.location.pathname === "/plan" ? "active" : ""
									}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke={
											window.location.pathname === "/plan" ? "#fff" : "#5E5873"
										}
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
										/>
									</svg>

									<h6 className="white">Billings & Plans</h6>
								</div>
							</Link>
							<Link to="/notify">
								<div
									className={`text-flex flex items-center gap-2 ${
										window.location.pathname === "/notify" ? "active" : ""
									}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke={
											window.location.pathname === "/notify"
												? "#fff"
												: "#5E5873"
										}
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
										/>
									</svg>

									<h6>Notifications</h6>
								</div>
							</Link>
							<div className="text-flex flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="#5E5873"
									className="w-5 h-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
									/>
								</svg>

								<h6>Connections</h6>
							</div>
						</div>
					</div>
					{children}
				</div>
			</DashboardTemplate>
		</div>
	);
}

export default DashAccountTemplate;
