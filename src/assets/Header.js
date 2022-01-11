import { DocumentTextIcon, ShoppingCartIcon } from "@heroicons/react/solid";

function App(props) {
	return (<>
		<header className="w-full p-8 -mb-1">
			<div className="max-w-7xl mx-auto flex">
				<div className="my-auto inline-flex">
					<img alt="Logo" src="https://gblobscdn.gitbook.com/spaces%2F-MeEHe7caltVbw767VIt%2Favatar-rectangle-1627187168219.png?alt=media" style={{ width: "40px" }}></img>
					<span className="ml-4 m-auto font-semibold text-sm lg:text-2xl">Tree Farmer</span>
				</div>

				<div className="ml-auto my-auto flex">
					<form action="/docs">
						<button className="py-2 px-2 lg:px-8 font-semibold rounded-lg focus:ring flex mr-4">
							<span className="hidden lg:block">Guide</span>
							<DocumentTextIcon className="w-6 h-6 lg:hidden" />
						</button>
					</form>
					<form action="/shop">
						<button className="py-2 px-2 lg:px-8 font-semibold rounded-lg focus:ring flex">
							<span className="hidden lg:block">Shop</span>
							<ShoppingCartIcon className="w-6 h-6 lg:hidden" />
						</button>
					</form>
				</div>
			</div>
		</header>
	</>);
}

export default App;