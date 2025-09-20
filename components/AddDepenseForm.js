import router from "../router.js";
function AddDepenseForm() {
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

			.add-depense-form {
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

			.add-depense-form .box {
				display: flex;
				flex-direction: column;
			}

			.add-depense-form input {
				font-weight: 400;
				background-color: white;
				padding: 0.5rem 1rem;
				border-radius: 0.6rem;
			}
			.add-depense-form .submit {
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
			<form action="" class="add-depense-form">
				<button class="btn-close">+</button>
				<div class="box">
					<label for="montant">montant</label>
					<input id="montant" name="montant" type="number" placeholder="montant" required/>
				</div>
				<div class="box">
					<label for="categorie">categorie</label>
					<input id="categorie" name="categorie" type="text" placeholder="categorie" required/>
				</div>
				<div class="box">
					<label for="date">date</label>
					<input id="date" name="date" type="text" placeholder="date" required/>
				</div>
				<div class="box">
					<label for="libelle">libellé</label>
					<input id="libelle" name="libelle" type="text" placeholder="libelle" required/>
				</div>
				<button class="submit">submit</button>
			</form>
	</div>`;
}

function logic() {
	const addDepense = document.querySelector(".add-depense");
	const form = document.querySelector(".add-depense-form");
	const overlay = form.parentElement;
	addDepense.addEventListener("click", function (e) {
		e.preventDefault();
		overlay.style.display = "flex";
	});

	const closeBtn = overlay.querySelector(".btn-close");
	function close(e) {
		e?.preventDefault();
		overlay.style.display = "none";
	}
	closeBtn.addEventListener("click", close);

	form.addEventListener("submit", function (e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(form));
		const oldDepenses = JSON.parse(localStorage.getItem("depenses")) || [];
		data.id = new Date().toString();
		localStorage.setItem("depenses", JSON.stringify([...oldDepenses, data]));
		close();
		router();
	});
}

export default () => {
	setTimeout(logic, 0);
	return AddDepenseForm();
};
