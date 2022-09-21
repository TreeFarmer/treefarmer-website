import { useEffect } from 'react';

function Invite(): JSX.Element {

	useEffect(() => {
		window.location.href = 'https://discord.com/oauth2/authorize?client_id=772935872646610994&permissions=281600&scope=bot%20applications.commands';
	}, []);

	return <div />;
}

export default Invite;