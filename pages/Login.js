import router from "../router.js";
import { hashPassword } from "../utilities.js";

function Login() {
	return `	
	<style>
			.container {
				display: flex;
				width: 100vw;
				height: 100vh;
			}

			.login {
				background-color: var(--primary);
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 10px;
			}

			.login__title {
				color: white;
				font-size: 2rem;
				margin-bottom: 3.2rem;
			}

			.box {
				display: flex;
				flex-direction: column;
				gap: 2rem;
				width: 100%;
				max-width: 32rem;
			}

			.box input {
				background-color: white;
				border-radius: 0.6rem;
				font-size: 1.6rem;
				padding: 0.8rem 1.6rem;
			}

			.login__submit {
				background-color: var(--green);
				padding: 0.8rem 1.6rem;
				border-radius: 0.6rem;
				font-size: 1.4rem;
				font-weight: bold;
				color: white;
			}

			.image {
				flex: 1;
				overflow: hidden;
				height: 100%;
			}

			.image img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}

			@media (max-width: 500px) {
				.image {
					display: none;
				}
			}
		</style>
		<main class="container">
			<form class="login">
				<h1 class="login__title">Welecome To Clinic Board!</h1>
				<div class="box">
					<input type="text" name="password" id="username" placeholder="username" />
					<input type="text" name="password" id="password" placeholder="password" />
					<button class="login__submit">Submit</button>
				</div>
			</form>
			<div class="image">
				<img src="../assets/images/login-bg.png" alt="medecine materials" />
			</div>
		</main>
		`;
}

function logic() {
	const form = document.querySelector(".login");
	const username = document.querySelector("#username");
	const password = document.querySelector("#password");
	console.log(form);

	form.addEventListener("submit", async function (e) {
		e.preventDefault();
		const user = JSON.parse(localStorage.getItem("user"));
		if (username.value.trim() == user.username && (await hashPassword(password.value)) === user.password) {
			localStorage.setItem("isLoggedIn", JSON.stringify(true));
			history.pushState(null, null, "/");
			router();
		}
	});
}

export default () => {
	setTimeout(logic, 0);
	return Login();
};
