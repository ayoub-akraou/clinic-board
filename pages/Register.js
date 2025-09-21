import router from "../router.js";
import { hashPassword } from "../utilities.js";

function Register() {
	return `
<style>
	body {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}

	.register {
		padding: 5rem 10rem;
		border-radius: 1.6rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		background-color: var(--primary);
	}

	.register__title {
		font-size: 2rem;
		color: #fff;
		text-align: center;
	}

	.register__guide {
		font-size: 1.6rem;
		font-weight: 600;
		color: white;
	}

	.box {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
		width: 100%;
		max-width: 32rem;
	}

	.box input {
		background-color: white;
		border-radius: 0.6rem;
		font-size: 1.6rem;
		padding: 0.8rem 1.6rem;
	}

	.register__submit {
		background-color: var(--green);
		padding: 0.8rem 1.6rem;
		border-radius: 0.6rem;
		font-size: 1.4rem;
		font-weight: bold;
		color: white;
	}
</style>
<form action="" class="register">
	<h1 class="register__title">Welecome To Clinic Board!</h1>
	<div class="box">
		<p class="register__guide">Set your username and password</p>
		<input type="text" name="username" id="username" class="register__username" placeholder="username" />
		<input type="text" name="password" id="password" class="register__password" placeholder="password" />
		<input
			type="text"
			name="confirm-password"
			id="confirm-password"
			class="register__confirm-password"
			placeholder="confirm password" />
	</div>
	<button class="register__submit">Submit</button>
</form>
`;
}

function logic() {
	const form = document.querySelector(".register");
	const username = document.querySelector("#username");
	const password = document.querySelector("#password");
	const confirmPassword = document.querySelector("#confirm-password");

	form.addEventListener("submit", async function (e) {
		e.preventDefault();
		if (username.value.trim() && password.value.trim() && password.value === confirmPassword.value) {
			const hashedPassword = await hashPassword(password.value);
			localStorage.setItem("user", JSON.stringify({ username: username.value, password: hashedPassword }));
			localStorage.setItem("isRegistred", JSON.stringify(true));
			router();
		}
	});
}

export default () => {
	setTimeout(logic, 0);
	return Register();
};
