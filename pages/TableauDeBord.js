export default function TableauDeBord() {
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
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 2rem;
		border: 1px solid #ccc;
		border-radius: 1rem;
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
		width: 50%;
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
			<p class="total text-green">0 MAD</p>
			<div class="desc">Recettes du mois en cours</div>
		</div>
		<div class="card">
			<div class="box">
				<h2 class="card__title">Depenses Mensuel</h2>
				<div class="card__icon">
					<img src="../assets/icons/payment-history.png" alt="payment history icon" />
				</div>
			</div>
			<p class="total text-red">0 MAD</p>
			<div class="desc">Depenses du mois en cours</div>
		</div>
		<div class="card">
			<div class="box">
				<h2 class="card__title">Marge</h2>
				<div class="card__icon"><img src="../assets/icons/take-money.png" alt="money icon" /></div>
			</div>
			<p class="total text-green">0 MAD</p>
			<div class="desc">marge du mois en cours</div>
		</div>
		<div class="card">
			<div class="box">
				<h2 class="card__title">Patients</h2>
				<div class="card__icon"><img src="../assets/icons/patient.png" alt="patient icon" /></div>
			</div>
			<p class="total">281</p>
			<div class="desc">Patients enregistrés</div>
		</div>
		<div class="card">
			<div class="box">
				<h2 class="card__title">Rendez vous</h2>
				<div class="card__icon"><img src="../assets/icons/calender.png" alt="calender icon" /></div>
			</div>
			<p class="total text-green">108</p>
			<div class="desc">Rendez vous enregistrés</div>
		</div>
	</div>
	<hr />
	<div class="card-progress">
		<h2 class="card__title">Objectif Mensuel</h2>
		<p class="card-progress__description">Progression vers l'objectif de 15 000 $</p>
		<div class="box">
			<p class="">Réalisé: 7500 $</p>
			<p class="percentage">50%</p>
		</div>
		<div class="progress"></div>
	</div>
</main>
`;
}
