import React, { useEffect } from 'react';

function Shop(): JSX.Element {

	useEffect(() => {
		window.location.href = 'https://shop.treefarmer.xyz';
	}, []);

	return <div />;
}

export default Shop;