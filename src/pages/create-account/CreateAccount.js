import React, { useEffect, useState } from "react";
import "./create-account.scss";
import { create, logo } from "../../assets";
import { AccountForm, Payment } from "../../components";

function CreateAccount() {
	const [iconback, setIconBack] = useState("");
	const [textColor, setTextColor] = useState("");
	const [iconColor, setIconColor] = useState("");
	const [isAcc, setIsAcc] = useState(false);
	useEffect(() => {}, [iconback]);
	const handleAccount = () => {
		setIsAcc(false);
		if (isAcc) {
			setIconBack("rgba(186, 191, 199, 0.12)");
			setTextColor("#6E6B7B");
			setIconColor("#000");
		} else {
			setIconBack("");
			setTextColor("");
			setIconColor("");
			setPIconBack("");
			setPTextColor("");
			setPIconColor("");
			setBIconBack("");
			setBTextColor("");
			setBIconColor("");
			// setIsAcc(false);
		}
	};
	// Personal section
	const [piconback, setPIconBack] = useState("");
	const [ptextColor, setPTextColor] = useState("");
	const [piconColor, setPIconColor] = useState("");
	const [isPer, setIsPer] = useState(true);
	const handlePersonal = () => {
		// setIsPer(!isPer);
		setIsAcc(false);
		if (isPer) {
			setPIconBack("#7367F0");
			setPTextColor("#7367F0");
			setPIconColor("#fff");
			setIconBack("rgba(186, 191, 199, 0.12)");
			setTextColor("#6E6B7B");
			setIconColor("#000");
			setBIconBack("");
			setBTextColor("");
			setBIconColor("");
		} else {
			setBIconBack("");
			setBTextColor("");
			setBIconColor("");
			// setPIconBack("");
			// setPTextColor("");
			// setPIconColor("");
			setIsPer(!isPer);
		}
	};
	// Billing section
	const [biconback, setBIconBack] = useState("");
	const [btextColor, setBTextColor] = useState("");
	const [biconColor, setBIconColor] = useState("");
	const [isBill, setIsBill] = useState(true);
	const handleBilling = () => {
		// setIsBill(!isBill);
		setIsAcc(false);
		setIsPer(true);
		if (isBill) {
			setBIconBack("#7367F0");
			setBTextColor("#7367F0");
			setBIconColor("#fff");
			setIconBack("rgba(186, 191, 199, 0.12)");
			setTextColor("#6E6B7B");
			setIconColor("#000");
			setPIconBack("");
			setPTextColor("");
			setPIconColor("");
		} else {
			setPIconBack("");
			setPTextColor("");
			setPIconColor("");
			setIconBack("rgba(186, 191, 199, 0.12)");
			setTextColor("#6E6B7B");
			setIconColor("#000");
			// setBIconBack("");
			// setBTextColor("");
			// setBIconColor("");
			setIsBill(!isBill);
		}
	};
	return (
		<div>
			<div className="create-flex flex justify-between">
				<div className="create-left">
					<img src={create} alt="img.jpg" />
					<div className="logo">
						<img src={logo} alt="img.jpg" />
					</div>
				</div>
				<div className="create-right">
					<div className="right-container">
						<div className="right-top-flex flex items-center justify-between">
							<div
								onClick={() => {
									handleAccount();
								}}
								className="sub-top-flex flex flex-row items-center"
							>
								<div
									className="highlight"
									style={{
										backgroundColor: iconback ? iconback : "#7367F0",
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke={iconColor ? iconColor : "#fff"}
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
										/>
									</svg>
								</div>

								<div className="text-flex mr-4 ml-3">
									<h5
										className="font-bold text-sm leading-none"
										style={{
											color: textColor ? textColor : "#7367F0",
										}}
									>
										Account
									</h5>
									<small className="text-gray-300 leading-none">
										Enter username
									</small>
								</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</div>
							<div
								onClick={() => {
									handlePersonal();
								}}
								className="sub-top-flex flex flex-row items-center"
							>
								<div
									style={{
										backgroundColor: piconback
											? piconback
											: "rgba(186, 191, 199, 0.12)",
									}}
									className="highlight"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke={piconColor ? piconColor : "#000"}
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
										/>
									</svg>
								</div>

								<div className="text-flex mr-4 ml-3">
									<h5
										style={{
											color: ptextColor ? ptextColor : "#6E6B7B",
										}}
										className="font-bold text-sm leading-none"
									>
										Personal
									</h5>
									<small className="text-gray-300 leading-none">
										Enter Information
									</small>
								</div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</div>
							<div
								onClick={() => {
									handleBilling();
								}}
								className="sub-top-flex flex flex-row items-center"
							>
								<div
									style={{
										backgroundColor: biconback
											? biconback
											: "rgba(186, 191, 199, 0.12)",
									}}
									className="highlight"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke={biconColor ? biconColor : "#000"}
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
										/>
									</svg>
								</div>

								<div className="text-flex mr-4 ml-3">
									<h5
										style={{
											color: btextColor ? btextColor : "#6E6B7B",
										}}
										className="font-bold text-sm leading-none"
									>
										Billing
									</h5>
									<small className="text-gray-300 leading-none">
										Payment details
									</small>
								</div>
							</div>
						</div>
						{/* Account Information */}
						<div className="account-information mt-10">
							{piconback && <AccountForm />}
							{!piconback && !biconback && (
								<AccountForm click={handleBilling} />
							)}
							{biconback && <Payment />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateAccount;
