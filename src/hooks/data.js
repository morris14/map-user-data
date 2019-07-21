import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = url => {
    const [data, setdata] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then(res => setdata(res.data))
            .catch(err => console.error(err));
    }, [url]);

    return data;
};
