import AddDepenseForm from "../components/AddDepenseForm.js";
import AddRecetteForm from "../components/AddRecetteForm .js";

function Finances() {
	const depenses = JSON.parse(localStorage.getItem("depenses")) || [];
	const depensesAsRows = depensesToHtmlRows(depenses);
	const recettes = JSON.parse(localStorage.getItem("recettes")) || [];
	const recettesAsRows = recettesToHtmlRows(recettes);

	return `<style>
	body {
		display: flex;
		font-size: 1.4rem;
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

	.finances > .box {
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

	.container {
		display: flex;
		width: 100%;
		gap: 1.5rem;
	}

	.container :first-child {
		flex: 3;
	}
	.container :last-child {
		flex: 4;
	}

	.add-recette {
		background-color: var(--green);
		color: white;
	}

	.add-depense {
		outline: 2px solid var(--red);
		color: var(--red);
	}

	.add-btn {
		font-size: 1.4rem;
		font-weight: 700;
		padding: 0.6rem 1.2rem;
		border-radius: 6px;
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.list {
		padding: 1.6rem;
		border: 1px solid #aaa;
		border-radius: 1rem;
	}
	.depenses-list {
		background-color: var(--light-red);
	}
	.depenses-list {
		background-color: var(--light-red);
	}
	.recettes-list {
		padding: 1.6rem;
		border: 1px solid #aaa;
		border-radius: 1rem;
		background-color: var(--light-green);
	}

	.depenses-list__title,
	.recettes-list__title {
		font-size: 1.6rem;
		margin-bottom: 2rem;
	}

	.table-container {
		max-height: 48vh;
		overflow-y: scroll;
	}

	.depenses-list table,
	.recettes-list table {
		width: 100%;
		text-align: center;
		font-size: 1.2rem;
		overflow-y: scroll;
	}

	.depenses-list :is(th, td),
	.recettes-list :is(th, td) {
		padding: 0.6rem 0.4rem;
	}

	thead {
		border-bottom: 1px solid #aaa;
	}
</style>

<main class="finances">
	<h1 class="title">Finances</h1>
	<p class="description">Gestion les recettes et les depenses</p>
	<div class="container">
		<div class="recettes">
			<button class="add-btn add-recette">
				<svg width="3rem" height="3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6 12H18M12 6V18"
						stroke="#fff"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				Ajouter une recette
			</button>
			<div class="recettes-list list">
				<h2 class="recettes-list__title">Liste des recettes</h2>
				<div class="table-container">
					<table>
						<thead>
							<tr>
								<th>montant</th>
								<th>M.P.</th>
								<th>libellé</th>
							</tr>
						</thead>
						<tbody>
						   ${recettesAsRows}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="depenses">
			<button class="add-btn add-depense">
				<svg width="3rem" height="3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6 12H18M12 6V18"
						stroke="#f00"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				Ajouter une depense
			</button>
			<div class="depenses-list list">
				<h2 class="depenses-list__title">Liste des depenses</h2>
				<div class="table-container">
					<table>
						<thead>
							<tr>
								<th>montant</th>
								<th>catégorie</th>
								<th>date</th>
								<th>libellé</th>
							</tr>
						</thead>
						<tbody>
						${depensesAsRows}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	${AddDepenseForm()}
	${AddRecetteForm()}
</main>
`;
}
function recettesToHtmlRows(recettes) {
	return recettes
		.map(
			(recette) => `
		<tr id="${recette.id}">
			<td>${recette.montant}</td>
			<td>${recette["methode-de-paiment"]}</td>
			<td>${recette.libelle}</td>
		</tr>`
		)
		.join("");
}
function depensesToHtmlRows(depenses) {
	return depenses
		.map(
			(depense) => `
		<tr id="${depense.id}">
			<td>${depense.montant}</td>
			<td>${depense.categorie}</td>
			<td>${depense.date}</td>
			<td>${depense.libelle}</td>
		</tr>`
		)
		.join("");
}

function logic() {}

export default () => {
	setTimeout(logic, 0);
	return Finances();
};
