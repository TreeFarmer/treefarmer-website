import { useEffect } from 'react';

function Docs(): JSX.Element {

	useEffect(() => {
		window.location.href = 'https://docs.treefarmer.xyz';
	}, []);

	return <div />;
}

export default Docs;