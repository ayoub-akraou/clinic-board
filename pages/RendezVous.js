import router from "../router.js";
import AddRendezVousForm from "../components/AddRendezVousForm.js";
function RendezVous() {
	const rendezVous = JSON.parse(localStorage.getItem("rendez-vous")) || [];

	const rendezVousAsRows = toHtmlRows(rendezVous);
	return `
		<style>
			body {
				display: flex;
			}

			main {
				padding: min(10px + 2vw, 6rem) min(10px + 4vw, 8rem);

				flex: 1;
			}

			.title {
				font-size: 2.4rem;
				margin-bottom: 1rem;
			}

			.description {
				font-size: 2rem;
				margin-bottom: 1rem;
			}

			.rendez-vous > .box {
				display: flex;
				align-items: center;
				gap: 1rem;
				margin-bottom: 2rem;
			}

			.search-bar {
				font-size: 1.6rem;
				display: flex;
				align-items: center;
				flex: 1;
				box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
				padding: 0.8rem;
				border-radius: 4px;
			}

			.search-bar input {
				flex: 1;
			}

			.add-rendez-vous {
				font-size: 1.4rem;
				padding: 0.8rem 1.6rem;
				border-radius: 6px;
				background-color: #000;
				color: white;
				display: flex;
				align-items: center;
				gap: 1rem;
			}

			.rendez-vous-list {
				padding: 1.6rem;
				border: 1px solid #aaa;
				border-radius: 1rem;
			}

			.rendez-vous-list__title {
				font-size: 1.6rem;
				margin-bottom: 2rem;
			}

			.table-container {
				max-height: 48vh;
				overflow-y: scroll;
			}

			.rendez-vous-list table {
				width: 100%;
				text-align: center;
				font-size: 1.6rem;
				overflow-y: scroll;
			}

			.rendez-vous-list :is(th, td) {
				padding: 0.6rem;
			}

			.rendez-vous-list thead {
				border-bottom: 1px solid #aaa;
			}

			.actions {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.6rem;
			}

			.view {
			}

			.edit {
			}

			.delete {
			}
		</style>
		
		<main class="rendez-vous">
			<h1 class="title">rendez-vous</h1>
			<p class="description">Gestion des rendez-vous</p>
			<div class="box">
				<form action="" class="search-bar">
					<img src="../assets/icons/search.png" alt="search icon" width="28px" height="28px" /><input
						type="text"
						name=""
						id=""
						placeholder="Rechercher un rendez-vous..." />
				</form>
				<button class="add-rendez-vous">
					<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6 12H18M12 6V18"
							stroke="#fff"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					Ajouter un rendez-vous
				</button>
			</div>
			<div class="rendez-vous-list">
				<h2 class="rendez-vous-list__title">Liste des rendez-vous (172)</h2>
				<div class="table-container">
					<table>
						<thead>
							<tr>
								<th>patient</th>
								<th>pratitien</th>
								<th>salle</th>
								<th>type</th>
								<th>durée</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
						${
							rendezVousAsRows ||
							"<tr><td colspan='5' style='padding: 2rem; font-size: 2rem; font-weight: bold; font-style: italic;'>aucun render-vous trouvé</td></tr>"
						}
						</tbody>
					</table>
				</div>
			</div>
			${AddRendezVousForm()}
	  `;
}
function logic() {
	// delete rendez-vous functionality
	function attachClickListenerToDeleteBtns() {
		const deleteBtns = document.querySelectorAll(".rendez-vous .delete");
		deleteBtns.forEach((btn) =>
			btn.addEventListener("click", function (e) {
				const id = btn.dataset.id;
				console.log(btn, id);
				const rendezVous = JSON.parse(localStorage.getItem("rendez-vous")) || [];
				const newRendezVous = rendezVous.filter((patient) => patient.id != id);
				localStorage.setItem("rendez-vous", JSON.stringify(newRendezVous));
				router();
			})
		);
	}
	attachClickListenerToDeleteBtns();
}

function toHtmlRows(rendezVous) {
	return rendezVous
		.map(
			(rv) => `
		<tr id="${rv.id}">
			<td>${rv.username}</td>
			<td>${rv.pratitien}</td>
			<td>${rv.salle}</td>
			<td>${rv.type}</td>
			<td>${rv.duree}</td>
			<td class="actions">
				<button data-id="${rv.id}" class="view"><img src="../assets/icons/eye.png" alt="eye icon" /></button>
				<button data-id="${rv.id}" class="edit"><img src="../assets/icons/edit.png" alt="edit icon" /></button>
				<button data-id="${rv.id}" class="delete"><img src="../assets/icons/delete.png" alt="delete icon" /></button>
			</td>
		</tr>`
		)
		.join("");
}

export default () => {
	setTimeout(logic, 0);
	return RendezVous();
};
