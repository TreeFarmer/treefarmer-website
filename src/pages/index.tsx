import Header from '../assets/Header';
import Footer from '../assets/Footer';
import PromoText from './promo.json';

function App(): JSX.Element {
	return (<>
		<div>
			<Header />
			<div className="header-color">
				<div className="max-w-7xl mx-auto px-8">
					<h1 className="text-4xl md:text-5xl font-extrabold" style={{ maxWidth: '9em', paddingTop: '.75em' }}>Your next addicting game on Discord</h1>
					<h2 className="text-xl font-semibold mt-4" style={{ maxWidth: '20em' }}>
						Create beautiful tree farms and compete in challenges and events to earn real life rewards.
					</h2>
					<div className="mt-4 block sm:inline-flex">
						<form action="/invite">
							<button className="py-2 px-8 font-semibold rounded-lg focus:ring flex">
								Invite
							</button>
						</form>

						<form action="/discord">
							<button className="mt-2 sm:mt-0 sm:ml-4 py-2 px-8 font-semibold rounded-lg focus:ring flex">
								Community Server
							</button>
						</form>
					</div>
				</div>
			</div>

			<div className="mb-8">
				<div className="text-center mt-4 lg:mt-0">
					{
						PromoText.map((p, i) => {
							const isEven = i % 2 === 0;

							return (
								<div className="mx-auto px-4 mb-8">
									<div className="text-left inline-flex p-4">
										<div className="m-auto">
											{!isEven ? <img alt={'promo' + i} className="mr-8" style={{ width: '20em' }} src={p.image} /> : ''}
										</div>
										<div className="mr-8 m-auto">
											<h1 className="text-3xl md:text-5xl font-bold">{p.title}</h1>
											<h2 className="text-xl md:text-2xl font-semibold mt-2" style={{ maxWidth: '20em' }}>{p.description}</h2>
										</div>
										<div className="m-auto">
											{isEven ? <img alt={'promo' + i} style={{ width: '20em' }} src={p.image} /> : ''}
										</div>
									</div>
								</div>
							);
						})
					}
				</div>
			</div>

			<div className="footer-color">
				<div className="py-20 text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold mx-auto px-4" style={{ maxWidth: '15em' }}>Ready to start farming?</h1>

					<div className="mt-4 inline-flex">
						<form action="/invite">
							<button className="py-2 px-8 font-semibold rounded-lg focus:ring flex">
								Invite
							</button>
						</form>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	</>);
}

export default App;