import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import './styles/Base.css';
import Index from './pages/index';

import NotFound from './pages/404';
import Discord from './pages/Discord';
import Docs from './pages/Docs';
import Invite from './pages/Invite';
import Shop from './pages/Shop';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/discord" element={<Discord />} />
				<Route path="/docs" element={<Docs />} />
				<Route path="/invite" element={<Invite />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/" element={<Index />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
