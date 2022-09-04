function App(): JSX.Element {
	return (<>
		<footer className="w-full p-8 -mt-1 main">
			<div className="max-w-7xl mx-auto px-8 text-center font-semibold">
				&copy; {new Date().getFullYear()} Tree Farmer - All rights reserved.
				<br />
				Developed with <span className="text-red-500">❤</span> by <a className="hover:underline" href="https://luyx.dev/" target="_blank" rel="noopener noreferrer">Luyx Development</a>.
			</div>
		</footer>
	</>);
}

export default App;