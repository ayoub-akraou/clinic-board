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

			#message {
				color: red;
				background-color: rgba(255, 178, 178, 1);
				font-weight: 600;
				font-size: 1.6rem;
				padding: .5rem 1rem;
				text-align: center;
				display: none;
			}

		.layer {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			display: none;
			justify-content: center;
			align-items: center;
			font-size: 6rem;
			background-color: #00000075;
			color: #fff;
		}
		</style>
		<main class="container">
			<form class="login">
				<h1 class="login__title">Welecome To Clinic Board!</h1>
				<div class="box">
					<input type="text" name="password" id="username" placeholder="username"  required/>
					<input type="password" name="password" id="password" placeholder="password"  required/>
					<p id="message"></p>
					<button class="login__submit">Submit</button>
				</div>
			</form>
			<div class="image">
				<img src="../assets/images/login-bg.png" alt="medecine materials" />
			</div>
		</main>
		<div class="layer"></div>
		`;
}

function logic() {
	const form = document.querySelector(".login");
	const username = document.querySelector("#username");
	const password = document.querySelector("#password");

	let counter = 0;

	form.addEventListener("submit", async function (e) {
		e.preventDefault();
		const user = JSON.parse(localStorage.getItem("user"));
		if (username.value.trim() == user.username && (await hashPassword(password.value)) === user.password) {
			localStorage.setItem("isLoggedIn", JSON.stringify(true));
			history.pushState(null, null, "/");
			router();
		} else {
			const message = document.getElementById("message");
			message.textContent = "Incorrect username or password!";
			message.style.display = "block";
			counter++;
			if (counter === 3) {
				counter = 0;
				let timer = 5;
				const layer = document.querySelector(".layer");
				layer.style.display = "flex";
				layer.textContent = timer--;
				const interval = setInterval(() => {
					layer.textContent = timer--;
					if (timer < 0) {
						clearInterval(interval);
						layer.style.display = "none";
						timer = 5;
					}
				}, 1000);
			}
		}
	});
}

export default () => {
	setTimeout(logic, 0);
	return Login();
};
