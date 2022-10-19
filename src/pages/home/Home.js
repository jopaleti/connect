import React from "react";
import { ambu, bag, bed, last, space, track } from "../../assets";
import { Copywrite, DashboardTemplate } from "../../components";
import "./home.scss";

function Home() {
	return (
		<div className="home">
			<DashboardTemplate>
				<div className="template mt-4 mr-8">
					<div className="home-container">
						<div className="flex-item">
							<h1>Solutions that help build worlclass Healthcare System</h1>
							<p className="mt-2">
								or choose a category to quickly find the help you need
							</p>
							<form action="/" className="mt-6">
								<input
									type="text"
									placeholder="Ask a question..."
									className="py-2 px-4"
								/>
							</form>
						</div>
					</div>
					<div className="flex-container flex gap-10 items-center justify-between flex-wrap mt-6">
						<div className="flex-item shadow-md">
							<img src={bag} alt="img.jpg" />
							<div className="pt-5 pb-4 px-6">
								<h2>Emergency Ambulance</h2>
								<p>
									There is perhaps no better demonstration of the folly of image
									of our tiny world.
								</p>
							</div>
						</div>
						<div className="flex-item shadow-md">
							<img src={bed} alt="img.jpg" />
							<div className="pt-5 pb-4 px-6">
								<h2>Hospital Tracker</h2>
								<p>
									every hero and coward, every creator and destroyer of
									civilization.
								</p>
							</div>
						</div>
						<div className="flex-item shadow-md">
							<img src={track} alt="img.jpg" />
							<div className="pt-5 pb-4 px-6">
								<h2>Hospital Tracker</h2>
								<p>
									every hero and coward, every creator and destroyer of
									civilization.
								</p>
							</div>
						</div>
						<div className="flex-item shadow-md">
							<img src={space} alt="img.jpg" />
							<div className="pt-5 pb-4 px-6">
								<h2>ICU Space</h2>
								<p>
									It has been said that astronomy is a humbling and character
									experience.
								</p>
							</div>
						</div>
						<div className="flex-item shadow-md">
							<img src={ambu} alt="img.jpg" />
							<div className="pt-5 pb-4 px-6">
								<h2>Ambulance System</h2>
								<p>
									There is perhaps no better demonstration of the folly of human
									conceits.
								</p>
							</div>
						</div>
						<div className="flex-item shadow-md">
							<img src={last} alt="img.jpg" />
							<div className="pt-5 pb-4 px-6">
								<h2>Emergency Ambulance</h2>
								<p> Competent means we will never take anything for granted.</p>
							</div>
						</div>
					</div>
					<div className="footer mt-8 pb-4">
						<Copywrite />
					</div>
				</div>
			</DashboardTemplate>
		</div>
	);
}

export default Home;
