import AddPatientForm from "../components/AddPatientForm.js";
import UpdatePatientForm from "../components/UpdatePatientForm.js";
import router from "../router.js";
function Patients() {
	const patients = JSON.parse(localStorage.getItem("patients")) || [];

	const patientsAsRows = patients
		.map(
			(patient) => `
		<tr id="${patient.id}">
			<td>${patient.username}</td>
			<td>${patient.telephone}</td>
			<td>${patient.email}</td>
			<td class="actions">
				<button data-id="${patient.id}" class="view">
					<img src="../assets/icons/eye.png" alt="eye icon" />
				</button>
				<button data-id="${patient.id}" class="edit">
					<img src="../assets/icons/edit.png" alt="edit icon" />
				</button>
				<button data-id="${patient.id}" class="delete">
					<img src="../assets/icons/delete.png" alt="delete icon" />
				</button>
			</td>
		</tr>`
		)
		.join("");

	return `
<style>
			body {
				display: flex;
			}

			main {
				padding: min(10px + 4vw, 8rem);
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

			.patients > .box {
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

			.add-patient {
				font-size: 1.4rem;
				padding: 0.8rem 1.6rem;
				border-radius: 6px;
				background-color: #000;
				color: white;
				display: flex;
				align-items: center;
				gap: 1rem;
			}

			.patients-list {
				padding: 1.6rem;
				border: 1px solid #aaa;
				border-radius: 1rem;
			}

			.patients-list__title {
				font-size: 1.6rem;
				margin-bottom: 2rem;
			}

			.table-container {
				max-height: 48vh;
				overflow-y: scroll;
			}

			.patients-list table {
				width: 100%;
				text-align: center;
				font-size: 1.6rem;
				overflow-y: scroll;
			}

			.patients-list :is(th, td) {
				padding: 0.6rem;
			}

			.patients-list thead {
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
<main class="patients">
			<h1 class="title">Patients</h1>
			<p class="description">Gestion des patients du cabinet</p>
			<div class="box">
				<form action="" class="search-bar">
					<img src="../assets/icons/search.png" alt="search icon" width="28px" height="28px" /><input
						type="text"
						name=""
						id=""
						placeholder="Rechercher un patient..." />
				</form>
				<button class="add-patient">
					<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6 12H18M12 6V18"
							stroke="#fff"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					Ajouter un patient
				</button>
			</div>
			<div class="patients-list">
				<h2 class="patients-list__title">Liste des patients (172)</h2>
				<div class="table-container">
					<table>
						<thead>
							<tr>
								<th>nom complet</th>
								<th>telephone</th>
								<th>email</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							${
								patientsAsRows ||
								"<tr><td colspan='3' style='padding: 2rem; font-size: 2rem; font-weight: bold; font-style: italic;'>aucun patient trouvé</td></tr>"
							}
						</tbody>
					</table>
				</div>
			</div>
			${AddPatientForm()}
			${UpdatePatientForm()}
</main>
`;
}

function PatientsLogic() {
	// delete patient functionality
	const deleteBtns = document.querySelectorAll(".patients .delete");
	deleteBtns.forEach((btn) =>
		btn.addEventListener("click", function (e) {
			const id = btn.dataset.id;
			const patients = JSON.parse(localStorage.getItem("patients")) || [];
			const newPatients = patients.filter((patient) => patient.id != id);
			localStorage.setItem("patients", JSON.stringify(newPatients));
			router();
		})
	);

	// update patient functionality
	const editBtns = document.querySelectorAll(".patients .edit");
	const updatePatientForm = document.querySelector(".update-patient-form");
	const overlay = updatePatientForm.parentElement;
	// open update form with the proper patient data
	editBtns.forEach((btn) =>
		btn.addEventListener("click", function (e) {
			overlay.style.display = "flex";
			const id = btn.dataset.id;
			const patients = JSON.parse(localStorage.getItem("patients")) || [];
			const patient = patients.find((patient) => patient.id == id);
			updatePatientForm.querySelector("#username").value = patient.username;
			updatePatientForm.querySelector("#telephone").value = patient.telephone;
			updatePatientForm.querySelector("#email").value = patient.email;
			updatePatientForm.id = patient.id;
		})
	);
	// update patient on submit
	updatePatientForm.addEventListener("submit", function (e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(updatePatientForm));
		data.id = updatePatientForm.id;
		const patients = JSON.parse(localStorage.getItem("patients")) || [];

		const patient = patients.find((p) => p.id == data.id);
		patient.username = data.username;
		patient.telephone = data.telephone;
		patient.email = data.email;

		localStorage.setItem("patients", JSON.stringify(patients));
		router();
	});
}

export default () => {
	setTimeout(PatientsLogic, 0);
	return Patients();
};
