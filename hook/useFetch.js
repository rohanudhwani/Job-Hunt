import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

const rapidApiKey = "045ee77126msh70a78c2250a21cbp1c3f5djsn3d9de8058df2"

const useFetch = (endpoint, query) => {
    const [data, setdata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setdata(response.data.data);
            setIsLoading(false);

        } catch (error) {
            setError(error);
            console.log(error)
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, [])
    
      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }


      return {data, isLoading, error, refetch};
}

export default useFetch