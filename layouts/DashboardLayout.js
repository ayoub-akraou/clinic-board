import router from "../router.js";
export default function DashboardLayout(outlet) {
	setTimeout(() => {
		const logoutBtn = document.querySelector(".logout-btn");
		logoutBtn.addEventListener("click", () => {
			localStorage.removeItem("isLoggedIn");
			router();
		});
	}, 0);
	return `
   	<aside class="menu">
			<div class="logo"><img src="../assets/images/logo.svg" alt="logo" /></div>
			<div class="menu__tabs">
				<button class="menu__tab" data-path='/'>
					<div class="icon"><img src="../assets/icons/dashboard.png" alt="dashboard icon" /></div>
					<p class="">Tableau de bord</p>
				</a>
				<button class="menu__tab" data-path='/patients'>
					<div class="icon"><img src="../assets/icons/patient.png" alt="dashboard icon" /></div>
					<p class="">Patients</p>
				</a>
				<button class="menu__tab" data-path='/rendez-vous'>
					<div class="icon"><img src="../assets/icons/calender.png" alt="dashboard icon" /></div>
					<p class="">Rendez-vous</p>
				</a>
				<button class="menu__tab" data-path='/finances'>
					<div class="icon"><img src="../assets/icons/finance.png" alt="dashboard icon" /></div>
					<p class="">Finance</p>
				</a>
			</div>
			<button class="logout-btn">
				<div class="icon"><img src="../assets/icons/leave.png" alt="dashboard icon" /></div>
				<p class="">Deconnexion</p>
			</button>
		</aside>
      ${outlet || ""}
   `;
}
