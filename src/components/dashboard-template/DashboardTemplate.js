import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	api,
	approved,
	cal,
	credit,
	env,
	home,
	icon,
	img,
	line,
	logo,
	nairas,
	quote,
	star,
	tick,
	usa,
	user,
} from "../../assets";
import "./dashboard-template.scss";
export function sidebar(setres, res) {
	return (
		<div className="sidebar-left shadow-lg">
			<div className="sidebar-container pt-10">
				<div className="sidebar-header flex items-center justify-center gap-16">
					<Link to="/">
						<img src={logo} alt="img.jpg" className="logo" />
					</Link>
					<div className="cursor-pointer" onClick={() => setres(!res)}>
						<img src={icon} alt="img.jpg" />
					</div>
				</div>
			</div>
			<div className="mt-8 flex flex-col gap-5">
				<Link to="/home">
					<div className="flex-item flex gap-2 px-4 py-3 items-center">
						<img src={home} alt="img.jpg" />
						<h6>Homepage</h6>
					</div>
				</Link>
				<Link to="/license">
					<div className="flex-item flex gap-2 px-4 py-3 items-center">
						<img src={approved} alt="img.jpg" />
						<h6>License</h6>
					</div>
				</Link>
				<Link to="/account">
					<div className="flex-item flex gap-2 px-4 py-3 items-center">
						<img src={user} alt="img.jpg" />
						<h6>Account Security</h6>
					</div>
				</Link>
				<Link to="/plan">
					<div className="flex-item flex gap-2 px-4 py-3 items-center">
						<img src={credit} alt="img.jpg" />
						<h6>Payment Info</h6>
					</div>
				</Link>
				<Link to="/pricing">
					<div className="flex-item flex gap-2 px-4 py-3 items-center">
						<img src={nairas} alt="img.jpg" />
						<h6>Pricing</h6>
					</div>
				</Link>
				<Link to="/api">
					<div className="flex-item flex gap-2 px-4 py-3 items-center">
						<img src={api} alt="img.jpg" />
						<h6>API Key</h6>
					</div>
				</Link>
			</div>
		</div>
	);
}

function DashboardTemplate({ children, ...props }) {
	const [open, setOpen] = useState(false);
	const [curr, setCurr] = useState("");
	useEffect(() => {
		window.location.pathname && setCurr("current");
	}, []);
	return (
		<div className="dashboard-template">
			{open && sidebar(setOpen, open)}
			<div className="dashboard-flex flex items-start justify-between">
				<div className="dash-left p-8">
					<div className="sidebar-container">
						<div className="sidebar-header flex items-center justify-center gap-16">
							<Link to="/">
								<img src={logo} alt="img.jpg" className="logo" />
							</Link>
							<div className="cursor-pointer">
								<img src={icon} alt="img.jpg" />
							</div>
						</div>
					</div>
					<div className="mt-16 flex flex-col gap-5">
						<Link to="/">
							<div
								className={`flex-item flex gap-2 px-4 py-3 items-center ${
									window.location.pathname === "/" ? curr : "no"
								}`}
							>
								<img src={home} alt="img.jpg" />
								<h6>Homepage</h6>
							</div>
						</Link>
						<Link to="/license">
							<div
								className={`flex-item flex gap-2 px-4 py-3 items-center ${
									window.location.pathname === "/license" ? curr : "no"
								}`}
							>
								<img src={approved} alt="img.jpg" />
								<h6>License</h6>
							</div>
						</Link>
						<Link to="/account">
							<div
								className={`flex-item flex gap-2 px-4 py-3 items-center ${
									window.location.pathname === "/account" ||
									window.location.pathname === "/notify"
										? curr
										: "no"
								}`}
							>
								<img src={user} alt="img.jpg" />
								<h6>Account Security</h6>
							</div>
						</Link>
						<Link to="/plan">
							<div
								className={`flex-item flex gap-2 px-4 py-3 items-center ${
									window.location.pathname === "/plan" ? curr : "no"
								}`}
							>
								<img src={credit} alt="img.jpg" />
								<h6>Payment Info</h6>
							</div>
						</Link>
						<Link to="/pricing">
							<div
								className={`flex-item flex gap-2 px-4 py-3 items-center ${
									window.location.pathname === "/pricing" ? curr : "no"
								}`}
							>
								<img src={nairas} alt="img.jpg" />
								<h6>Pricing</h6>
							</div>
						</Link>
						<Link to="/api">
							<div
								className={`flex-item flex gap-2 px-4 py-3 items-center ${
									window.location.pathname === "/api" ? curr : "no"
								}`}
							>
								<img src={api} alt="img.jpg" />
								<h6>API Key</h6>
							</div>
						</Link>
					</div>
				</div>
				<div className="dash-right ">
					<div className="dash-right-header flex items-center justify-between px-8 py-6 shadow-xl mr-8">
						<div className="item-left flex items-center gap-6">
							{/* Menu */}
							<div
								className="menu-flex cursor-pointer"
								onClick={() => setOpen(!open)}
							>
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
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</div>
							<Link>
								<img src={tick} alt="img.jpg" />
							</Link>
							<Link>
								<img src={quote} alt="img.jpg" />
							</Link>
							<Link>
								<img src={env} alt="img.jpg" />
							</Link>
							<Link>
								<img src={cal} alt="img.jpg" />
							</Link>
							<Link>
								<img src={star} alt="img.jpg" />
							</Link>
							<img src={line} alt="img.jpg" className="line" />
							<div className="search">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="#6E6B7B"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</svg>
							</div>
						</div>
						<div className="item-right flex items-center gap-8">
							<div className="lang flex items-center gap-2">
								<img src={usa} alt="img.jpg" />
								<h6 className="country-text">English</h6>
							</div>
							{/* <select name="country" id="country">
								<option value="en">
									<div>
										<small>🇺🇸</small> English
									</div>
								</option>
								<option value="AX">Åland Islands</option>
							</select> */}
							<span class="relative inline-block">
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
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
									/>
								</svg>

								<span
									class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 rounded-full"
									style={{ background: "#7367F0" }}
								>
									9
								</span>
							</span>
							<span class="relative inline-block">
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
										d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
									/>
								</svg>

								<span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
									4
								</span>
							</span>
							<div className="flex items-center gap-3 profile">
								<div className="text-left">
									<h1>John Doe</h1>
									<small className="text-gray-400">Admin</small>
								</div>
								<div class="relative">
									<img class="w-10 h-10 rounded-full" src={img} alt="" />
									<span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
								</div>
							</div>
						</div>
					</div>
					{/* Dashboard content */}
					<div className="children">{children}</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardTemplate;
