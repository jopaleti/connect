import React, { useState, useRef } from "react";
import {
	arr1,
	arrd,
	ball,
	dot,
	enter,
	flow,
	love,
	pot,
	Switch,
	table,
} from "../../assets";
import { Copywrite, DashboardTemplate } from "../../components";
import "./pricing.scss";

function Pricing() {
	var acc = useRef();
	var panel = useRef();
	var panel1 = useRef();
	const [active, setActive] = useState();
	const [active1, setActive1] = useState();
	const Ball = useRef();
	const toggle = () => {
		Ball.current.style.left == "25px"
			? (Ball.current.style.left = "2px")
			: (Ball.current.style.left = "25px");
	};
	const handleClick = (input, setact, act) => {
		if (input.current.style.maxHeight) {
			input.current.style.maxHeight = null;
			setact("");
		} else {
			setact("active");
			input.current.style.maxHeight = input.current.scrollHeight + "px";
		}
	};
	return (
		<div className="pricing">
			<DashboardTemplate>
				<div className="plan-container">
					<div className="plan-top">
						<h1>Pricing Plans</h1>
						<p className="mt-3">
							All plans include 40+ advanced tools and features to boost your
							product. Choose the best plan to fit your needs.
						</p>
						<div className="mt-8 plan flex items-center justify-center gap-3">
							<span>Monthly</span>
							<div className="rail" onClick={() => toggle()}>
								<img src={Switch} alt="img.jpg" className="switch" />
								<img src={ball} alt="img.jpg" className="ball" ref={Ball} />
							</div>
							<span>Annually</span>
						</div>
					</div>
					{/* Pricing pLan */}
					<div className="plan-flex flex flex-wrap items-center justify-between mt-8">
						<div className="plan-box">
							<div className="box-top">
								<div className="box-image flex justify-center items-center mb-6">
									<img src={pot} alt="img.jpg" />
								</div>
								<h1>Basic</h1>
								<p>A simple start for everyone</p>
								<div className="price flex gap-1 items-center justify-center mt-6">
									<sup>$</sup>
									<h1>0</h1>
									<sub>/ month</sub>
								</div>
							</div>
							<div className="box-bottom mt-4">
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>100 responses a month</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Unlimited forms and surveys</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Unlimited fields</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Basic form creation tools</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Up to 2 subdomains</h6>
								</div>
							</div>
							<div className="box-link w-full mt-6">
								<a href="/">Your current plan</a>
							</div>
						</div>
						{/* Standard */}
						<div className="plan-box standard">
							<div className="box-top standardp">
								<div className="popu">
									<h6>Popular</h6>
								</div>
								<div className="box-image flex justify-center items-center mb-6">
									<img src={flow} alt="img.jpg" />
								</div>
								<h1>Standard</h1>
								<p>For small to medium businesses</p>
								<div className="price flex gap-1 items-center justify-center mt-6">
									<sup>$</sup>
									<h1>99</h1>
									<sub>/ month</sub>
								</div>
							</div>
							<div className="box-bottom mt-4">
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Unlimited responses</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Unlimited forms and surveys</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Instagram profile page</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Google Docs integration</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Custom “Thank you” page</h6>
								</div>
							</div>
							<div className="box-link w-full mt-6">
								<a href="/" className="upgrade">
									Upgrade
								</a>
							</div>
						</div>
						{/* Enterprise */}
						<div className="plan-box">
							<div className="box-top">
								<div className="box-image flex justify-center items-center mb-6">
									<img src={enter} alt="img.jpg" />
								</div>
								<h1>Enterprise</h1>
								<p>Solution for big organizations</p>
								<div className="price flex gap-1 items-center justify-center mt-6">
									<sup>$</sup>
									<h1>499</h1>
									<sub>/ month</sub>
								</div>
							</div>
							<div className="box-bottom mt-4">
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>PayPal payments</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Logic Jumps</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>File upload with 5GB storage</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Custom domain support</h6>
								</div>
								<div className="mb-2 flex items-center gap-3">
									<img src={dot} alt="img.jpg" />
									<h6>Stripe integration</h6>
								</div>
							</div>
							<div className="box-link w-full mt-6">
								<a href="/">Upgrade</a>
							</div>
						</div>
					</div>
					{/* Trial */}
					<div className="trial mt-24 flex items-center justify-between">
						<div className="trial-left">
							<h1>Still not convinced? Start with a 14-day FREE trial!</h1>
							<p className="mt-3">
								You will get full access to with all the features for 14 days.
							</p>
							<div className="mt-10 trial-btn">
								<a href="/">Start 14-day FREE trial</a>
							</div>
						</div>
						<div className="trial-right">
							<img src={table} alt="img.jpg" />
						</div>
					</div>
					{/* Faqs */}
					<div className="faq mt-24">
						<h1>FAQ's</h1>
						<p className="mt-3">
							Let us help answer the most common
							<br /> questions.
						</p>
						<div className="accordion-container mt-8">
							<div className="btn mr-7">
								<button
									className={`accordion ${
										active && active
									} flex items-center justify-between`}
									onClick={() => {
										handleClick(panel, setActive, active);
									}}
									ref={acc}
								>
									<div className="flex items-center gap-4">
										<small className="px-2 py-1">
											<img src={love} alt="img.jpg" />
										</small>
										<h1>Does my subscription automatically renew?</h1>
									</div>
									<div className="default">
										<img src={arr1} alt="img.jpg" />
									</div>
									<div className="act">
										<img src={arrd} alt="img.jpg" />
									</div>
								</button>

								<div class="panel" ref={panel}>
									<div>
										<p>
											Tiramisu marshmallow dessert halvah bonbon cake
											gingerbread. Jelly beans chocolate pie powder. Dessert
											pudding chocolate cake bonbon bear claw cotton candy
											cheesecake. Biscuit fruitcake macaroon carrot cake.
											Chocolate cake bear claw muffin chupa chips pudding.
										</p>
									</div>
								</div>
							</div>
							<div className="btn mr-7">
								<button
									className={`accordion ${
										active1 && active1
									} flex items-center justify-between`}
									onClick={() => {
										handleClick(panel1, setActive1, active1);
									}}
									ref={acc}
								>
									<div className="flex items-center gap-4">
										<small className="px-2 py-1">
											<img src={love} alt="img.jpg" />
										</small>
										<h1>
											Can I store the item on an intranet so everyone has
											access?
										</h1>
									</div>
									<div className="default">
										<img src={arr1} alt="img.jpg" />
									</div>
									<div className="act">
										<img src={arrd} alt="img.jpg" />
									</div>
								</button>

								<div class="panel" ref={panel1}>
									<div>
										<p>
											Tiramisu marshmallow dessert halvah bonbon cake
											gingerbread. Jelly beans chocolate pie powder. Dessert
											pudding chocolate cake bonbon bear claw cotton candy
											cheesecake. Biscuit fruitcake macaroon carrot cake.
											Chocolate cake bear claw muffin chupa chips pudding.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer mt-4">
					<Copywrite />
				</div>
			</DashboardTemplate>
		</div>
	);
}

export default Pricing;
