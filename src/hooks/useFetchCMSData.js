import { useCallback, useEffect, useState } from "react";
import { cmsApiCalls } from "../api-calls";

export function useFetchCMSData(filter){

    const [data, setFetchedData] = useState(null);

    const fetchOffers = useCallback(async () => {

		try {
			const result = await cmsApiCalls.fetchServicesInfo(filter);
            //400 isnt thrown for some reason
			setFetchedData(await result.json());
		} catch (error) {
			console.error(error);
		}

	}, [filter])

   useEffect(() => {
      fetchOffers();
   }, [fetchOffers])

   return data;
}   