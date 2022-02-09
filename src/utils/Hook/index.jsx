import { useState, useEffect } from 'react';

export function useFetch(url, id) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return setLoading(true);
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                if (id) {
                    data.map((item) => (item.id === id ? setData(item) : null));
                }
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url, id]);
    return { isLoading, data, error };
}
