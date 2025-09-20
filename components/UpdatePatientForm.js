import router from "../router.js";
function UpdatePatientForm() {
	return `
   <style>
   .overlay {
				position: absolute;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				background-color: rgba(0, 0, 0, 0.25);
				display: none;
				justify-content: center;
				align-items: center;
         	text-align: start !important;
			}

			.update-patient-form {
				padding: 3rem;
				border-radius: 1rem;
				background-color: black;
				color: white;
				font-size: 1.6rem;
				display: flex;
				flex-direction: column;
				gap: 1rem;
				max-width: 40rem;
				width: 100%;
				position: relative;
			}

			.update-patient-form .box {
				display: flex;
				flex-direction: column;
			}

			.update-patient-form input {
				font-weight: 400;
				background-color: white;
				padding: 0.5rem 1rem;
				border-radius: 0.6rem;
			}
			.update-patient-form .submit {
				background-color: var(--green);
				padding: 0.8rem 1.6rem;
				border-radius: 0.6rem;
				font-size: 1.4rem;
				font-weight: bold;
				color: white;
				margin-top: 1.6rem;
			}

			.btn-close {
				width: 2.4rem;
				height: 2.4rem;
				border-radius: 999px;
				background-color: white;
				color: black;
				font-weight: 500;
				position: absolute;
				top: 1rem;
				right: 1rem;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 3rem;
				rotate: 45deg;
			}
		</style>
   <div class="overlay">
			<form action="" class="update-patient-form">
				<button class="btn-close">+</button>
				<div class="box">
					<label for="username">nom complet</label>
					<input id="username" name="username" type="text" placeholder="nom complet" />
				</div>
				<div class="box">
					<label for="telephone">telephone</label>
					<input id="telephone" name="telephone" type="text" placeholder="telephone" />
				</div>
				<div class="box">
					<label for="email">email</label>
					<input id="email" name="email" type="text" placeholder="email" />
				</div>
				<button class="submit">update</button>
			</form>
	</div>`;
}

function logic() {
	const overlay = document.querySelector(".update-patient-form").parentElement;
	const closeBtn = document.querySelector(".btn-close");
	function close(e) {
		e?.preventDefault();
		overlay.style.display = "none";
	}
	closeBtn.addEventListener("click", close);
}

export default () => {
	setTimeout(logic, 0);
	return UpdatePatientForm();
};
