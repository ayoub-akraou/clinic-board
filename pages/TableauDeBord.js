export default function TableauDeBord() {
	const recetteMensuelle = JSON.parse(localStorage.getItem("recettes") || []).reduce(
		(acc, cur) => acc + +cur.montant,
		0
	);
	const depenseMensuelle = JSON.parse(localStorage.getItem("depenses") || []).reduce(
		(acc, cur) => acc + +cur.montant,
		0
	);
	const margeMensuelle = recetteMensuelle - depenseMensuelle;
	const patients = JSON.parse(localStorage.getItem("patients"))?.length || 0;
	const rendezVous = JSON.parse(localStorage.getItem("rendez-vous"))?.length || 0;

	const target = 15_000;
	const percentage = ((margeMensuelle / target) * 100).toFixed(2);

	return `<style>
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

	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 2rem;
		border: 1px solid #ccc;
		border-radius: 1rem;
		min-width: fit-content;
	}

	.card__title {
		font-size: 2rem;
		font-weight: 600;
		text-wrap: nowrap;
	}

	.box {
		display: flex;
		gap: 2rem;
	}

	.card__icon {
		width: 3rem;
		height: 3rem;
	}

	.total {
		font-size: 2rem;
		font-weight: 600;
	}

	.desc {
		font-size: 1.2rem;
		font-weight: 600;
	}

	hr {
		margin: 2.5rem 0;
	}

	.card-progress {
		padding: 1.6rem 2rem;
		border-radius: 1rem;
		border: 1px solid #ccc;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card__title {
		font-size: 2rem;
	}

	.card-progress__description {
		font-size: 1.6rem;
		font-weight: 600;
		color: #444;
	}

	.box {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		font-size: 1.4rem;
		font-weight: 600;
	}

	.percentage {
	}

	.progress {
		position: relative;
		height: 0.6rem;
		width: 100%;
		background-color: #ccc;
	}

	.progress::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: ${percentage}%;
		background-color: var(--green);
		border-radius: 1rem;
	}
</style>
<main class="">
	<h1 class="title">Tableau de bord</h1>
	<div class="container">
		<div class="card">
			<div class="box">
				<h2 class="card__title">Recettes Mensuel</h2>
				<div class="card__icon"><img src="../assets/icons/take-money.png" alt="money icon" /></div>
			</div>
			<p class="total text-green">${recetteMensuelle} MAD</p>
			<div class="desc">Recettes du mois en cours</div>
		</div>
		<div class="card">
			<div class="box">
				<h2 class="card__title">Depenses Mensuel</h2>
				<div class="card__icon">
					<img src="../assets/icons/payment-history.png" alt="payment history icon" />
				</div>
			</div>
			<p class="total text-red">${depenseMensuelle} MAD</p>
			<div class="desc">Depenses du mois en cours</div>
		</div>
		<div class="card">
			<div class="box">
				<h2 class="card__title">Marge</h2>
				<div class="card__icon"><img src="../assets/icons/take-money.png" alt="money icon" /></div>
			</div>
			<p class="total text-green">${margeMensuelle} MAD</p>
			<div class="desc">marge du mois en cours</div>
		</div>
		<div class="card">
			<div class="box">
				<h2 class="card__title">Patients</h2>
				<div class="card__icon"><img src="../assets/icons/patient.png" alt="patient icon" /></div>
			</div>
			<p class="total">${patients}</p>
			<div class="desc">Patients enregistrés</div>
		</div>
		<div class="card">
			<div class="box">
				<h2 class="card__title">Rendez vous</h2>
				<div class="card__icon"><img src="../assets/icons/calender.png" alt="calender icon" /></div>
			</div>
			<p class="total text-green">${rendezVous}</p>
			<div class="desc">Rendez vous enregistrés</div>
		</div>
	</div>
	<hr />
	<div class="card-progress">
		<h2 class="card__title">Objectif Mensuel</h2>
		<p class="card-progress__description">Progression vers l'objectif de ${target} MAD</p>
		<div class="box">
			<p class="">Réalisé: ${margeMensuelle} MAD</p>
			<p class="percentage">${percentage}%</p>
		</div>
		<div class="progress"></div>
	</div>
</main>
`;
}
