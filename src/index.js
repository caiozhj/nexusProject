// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'assets/css/App.css';
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import AuthLayout from 'layouts/auth';
// import AdminLayout from 'layouts/admin';
// import RtlLayout from 'layouts/rtl';
// import { ChakraProvider } from '@chakra-ui/react';
// import theme from 'theme/theme';
// import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
// import { useState } from 'react';

// const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
// 	<Route
// 		{...rest}
// 		render={(props) =>
// 			isAuthenticated ? (
// 				<Component {...props} />
// 			) : (
// 				<Redirect to="/auth" />
// 			)
// 		}
// 	/>
// );

// function App() {
// 	const [isAuthenticated, setIsAuthenticated] = useState(false);

// 	// Função para fazer o login
// 	const login = () => {
// 		setIsAuthenticated(true);
// 	};

// 	return (
// 		<ChakraProvider theme={theme}>
// 			<React.StrictMode>
// 				<ThemeEditorProvider>
// 					<HashRouter>
// 						<Switch>
// 							<Route path="/auth" render={(props) => <AuthLayout {...props} login={login} />} />
// 							<PrivateRoute
// 								path="/admin"
// 								component={AdminLayout}
// 								isAuthenticated={isAuthenticated}
// 							/>
// 							<PrivateRoute path="/rtl" component={RtlLayout} isAuthenticated={isAuthenticated} />
// 							<Redirect from="/" to="/auth" />
// 						</Switch>
// 					</HashRouter>
// 				</ThemeEditorProvider>
// 			</React.StrictMode>
// 		</ChakraProvider>
// 	);
// }

// ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import RtlLayout from 'layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<ThemeEditorProvider>
				<HashRouter>
					<Switch>
						<Route path={`/auth`} component={AuthLayout} />
						<Route path={`/admin`} component={AdminLayout} />
						<Route path={`/rtl`} component={RtlLayout} />
						<Redirect from='/' to='/auth' />
					</Switch>
				</HashRouter>
			</ThemeEditorProvider>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);