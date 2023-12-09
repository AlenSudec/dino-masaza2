export class cmsApiCalls {
    
    static async fetchServicesInfo(){
        var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		};

        return await fetch(`${process.env.REACT_APP_API_KEY}/`, requestOptions);
    }
    
    static async updateServicesInfo(id, body) {
        return await fetch(`${process.env.REACT_APP_API_KEY}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    }
}