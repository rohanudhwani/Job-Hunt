import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

const rapidApiKey = "70f2a4388dmshdbac561fc0ef762p1f31b4jsnd161ff28f9c7"

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