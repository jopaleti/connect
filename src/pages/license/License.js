import React from "react";
import { check, cross } from "../../assets";
import { Copywrite, DashboardTemplate } from "../../components";
import "./license.scss";

function License() {
	return (
		<div className="license">
			<DashboardTemplate>
				<div className="license-container mt-5 mr-8 py-8 px-6">
					<h1>Our License Usage</h1>
					<p className="mt-2">
						Use of any product you buy from Serve is bound by the license you
						purchase. It will allow you the non-exclusive access to use it in
						your personal as well as client projects.
					</p>
					{/* Table */}
					<div className="tab-container">
						<div className="table mt-4">
							<table>
								<thead>
									<tr>
										<th className="info"></th>
										<th className="single">SINGLE</th>
										<th className="single">MULTIPLE</th>
										<th className="single">EXTENDED</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="info">Number of end products</td>
										<td className="single">1</td>
										<td className="single">Unlimited</td>
										<td className="single">1</td>
									</tr>
									<tr>
										<td className="info">Use in single free end product</td>
										<td className="single">
											<img src={check} alt="img.jpg" />
										</td>
										<td className="single">
											<img src={check} alt="img.jpg" />
										</td>
										<td className="single">
											<img src={check} alt="img.jpg" />
										</td>
									</tr>
									<tr>
										<td className="info">
											Free end product (Can have multiple End Users)
										</td>
										<td className="single">
											<img src={check} alt="img.jpg" />
										</td>
										<td className="single">
											<img src={check} alt="img.jpg" />
										</td>
										<td className="single">
											<img src={check} alt="img.jpg" />
										</td>
									</tr>
									<tr>
										<td className="info">Use in multiple free end product</td>
										<td className="single">
											<img src={cross} alt="img.jpg" />
										</td>
										<td className="single">
											<img src={check} alt="img.jpg" />
										</td>
										<td className="single">
											<img src={check} alt="img.jpg" />
										</td>
									</tr>
									<tr>
										<td className="info">
											Use in single end product that’s sold
										</td>
										<td className="single">
											<img src={cross} alt="img.jpg" />
										</td>
										<td className="single">
											<img src={cross} alt="img.jpg" />
										</td>
										<td className="single">
											<img src={check} alt="img.jpg" />
										</td>
									</tr>
									<tr>
										<td className="info">Create SaaS Application</td>
										<td className="single">
											<img src={cross} alt="img.jpg" />
										</td>
										<td className="single">
											<img src={cross} alt="img.jpg" />
										</td>
										<td className="single">Single</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					{/* Content */}
					<div className="content mt-8">
						<h5>Single License</h5>
						<div>
							<ul className="my-2">
								<li>
									You have rights to use our product for your personal or client
									project.
								</li>
								<li>
									You can modify our product as per your needs and use it for
									your personal or client project.
								</li>
							</ul>
							<p>
								With Single License you will be able to use our product for
								yourself or your client project for 1 time. If you want to use
								it for multiple times, you need to buy another regular license
								every time. Ownership and Copyright of our template will stay
								with ThemeSelection after purchasing single license. That means
								you are allowed to use our template in your project and use for
								one client or yourself,
							</p>
						</div>
					</div>
					<div className="content mt-8">
						<h5>Multiple License</h5>
						<div>
							<ul className="my-2">
								<li>
									You can use our product for your personal or client project.
									😎
								</li>
								<li>
									You can use our product for unlimited projects when end users
									are not charged.
								</li>
							</ul>
							<p>
								With Multiple Use License you will be able to use our product
								for yourself as well as your client projects. You can use
								product for unlimited projects. Ownership and Copyright of our
								template will stay with ThemeSelection after purchasing multiple
								use license. That means you are allowed to use our template in
								your project and use for multiple clients and yourself, but you
								are not allowed to create SaaS application and sell that,
							</p>
						</div>
					</div>
					<div className="content mt-8">
						<h5>Extended License</h5>
						<div>
							<ul className="my-2">
								<li>
									You can use our product for your personal or client project.
								</li>
								<li>
									You cannot resell, redistribute, lease, license or offer the
									product to any third party.
								</li>
							</ul>
							<p>
								With Extended License you will be able to use our product for
								yourself or your client project for one time. You can use it for
								building one project. Ownership and Copyright of our template
								will remain with ThemeSelection and that means, you are not
								allowed to sell, distribute or lease our template as it is to
								anyone
							</p>
						</div>
					</div>
					<div className="flex justify-between items-center px-10 py-6 mt-8 bottom-flex">
						<div className="bottom-left">
							<h1>Do you need custom license? 🚀</h1>
							<p className="mt-2">
								If you’ve mass production demand and other custom use cases than
								we’re here to help you.
							</p>
						</div>
						<div className="bottom-btn">
							<a href="/" className="px-6 py-3">
								Contact Us
							</a>
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

export default License;
