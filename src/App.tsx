import './App.css';
import DataFetch from './components/DataFetch/DataFetch';
import ErrorFetch from './components/ErrorFetch/ErrorFetch';
import LoadingFetch from './components/LoadingFetch/LoadingFetch';

function App() {
	return (
		<>
			<DataFetch />
			<ErrorFetch />
			<LoadingFetch />
		</>
	);
}

export default App;
