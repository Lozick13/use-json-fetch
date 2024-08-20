import useJsonFetch from '../../hooks/useJsonFetch';

const DataFetch = () => {
	const [data, loading, error] = useJsonFetch('http://localhost:7070', 'data');
	return (
		<>
			<div>
				<span>data: "{JSON.stringify(data)}"</span>
				<br />
				<span>loading: "{loading + ''}"</span>
				<br />
				<span>error: "{error}"</span>
			</div>
		</>
	);
};

export default DataFetch;
