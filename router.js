"use strict";
import DashboardLayout from "./layouts/DashboardLayout.js";
import TableauDeBord from "./pages/TableauDeBord.js";
import Patients from "./pages/Patients.js";
import RendezVous from "./pages/RendezVous.js";
import Finances from "./pages/Finances.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

const root = document.getElementById("root");

const routes = {
	"/": TableauDeBord(),
	"/patients": Patients(),
	"/rendez-vous": RendezVous(),
	"/finances": Finances(),
	"/login": Login(),
	"/register": Register(),
};

function router() {
	const path = location.pathname;

	const page = routes[path] ? routes[path] : routes["/"];

	root.innerHTML = DashboardLayout(page);
	attachClickListener();
}
router();
function navigateTo(e) {
	const path = e.currentTarget.dataset.path;
	console.log(e.currentTarget);
	history.pushState(null, null, path);
	router();
}

const menuTabs = document.querySelectorAll(".menu__tab");

function attachClickListener() {
	const menuTabs = document.querySelectorAll(".menu__tab");
	menuTabs.forEach((tab) => {
		tab.addEventListener("click", navigateTo);

		console.log(tab);
	});
}

// initial attachement
attachClickListener();

window.onpopstate = router;
