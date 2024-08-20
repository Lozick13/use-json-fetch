import useJsonFetch from '../../hooks/useJsonFetch';

const LoadingFetch = () => {
	const [data, loading, error] = useJsonFetch(
		'http://localhost:7070',
		'LoadingFetch'
	);
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

export default LoadingFetch;
