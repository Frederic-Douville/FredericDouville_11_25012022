import { useState, useEffect } from 'react';

export function useFetch(url, id) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return setError(true);
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();
                !id
                    ? setData(data)
                    : setData(() =>
                          data.map((item) =>
                              item.id === id ? setData(item) : null
                          )
                      );
                setLoading(false);
            } catch (error) {
                setError(true);
                throw new Error('Erreur lors du call API');
            }
        }
        fetchData();
    }, [url, id]);
    return { isLoading, data, error };
}
