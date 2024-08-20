import { useEffect, useState } from 'react';

export default function useJsonFetch(url: string, opts: string) {
	const [data, setData] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<number | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);

			const response = await fetch(`${url}/${opts}`);

			if (!response.ok) {
				setError(response.status);
			}

			setData(await response.json());
			setLoading(false);
		};

		fetchData();
	}, [url, opts]);
	return [data, loading, error];
}
