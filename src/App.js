import "./App.css";
import {
	CreateAccount,
	Login,
	Register,
	ResetPassword,
	ForgotPassword,
	Verify,
	Resend,
	Error,
	Home,
	Api,
	Pricing,
	License,
	Security,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashAccountTemplate, DashboardTemplate } from "./components";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					{/* <CreateAccount /> */}
					<Route exact element={<Login />} path="/login" />
					<Route exact element={<CreateAccount />} path="/" />
					<Route exact element={<Register />} path="/register" />
					<Route exact element={<ResetPassword />} path="/reset" />
					<Route exact element={<ForgotPassword />} path="/forgot" />
					<Route exact element={<Verify />} path="/verify" />
					<Route exact element={<Resend />} path="/resend" />
					<Route exact element={<DashboardTemplate />} path="/dash" />
					{/* <Route exact element={<Error />} path="/error" /> */}
					<Route exact element={<Home />} path="/home" />
					<Route exact element={<Api />} path="/api" />
					<Route exact element={<Pricing />} path="/pricing" />
					<Route exact element={<License />} path="/license" />
					<Route exact element={<DashAccountTemplate />} path="/dashacc" />
					<Route exact element={<Security />} path="/account" />
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
