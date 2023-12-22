export class cmsApiCalls {
    
    // static async fetchServicesInfo(){
    //     var requestOptions = {
	// 		method: 'GET',
	// 		redirect: 'follow',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
	// 	};

    //     return await fetch(`${process.env.REACT_APP_API_KEY}/`, requestOptions);
    // }

    static async fetchServicesInfo(filter){
        var requestOptions = {
			method: 'GET',
			redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
		};

        const query = new URLSearchParams(filter);
        return await fetch(`${process.env.REACT_APP_API_KEY}?${query}`, requestOptions);
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

    static async uploadImage(body){
        return await fetch(`${process.env.REACT_APP_API_KEY}/img-upload`, {
            method: "POST",
            body,
        });
    }

    static async testFetchFooter(endpoint){
        var requestOptions = {
			method: 'GET',
			redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
		};

        // const query = new URLSearchParams(filter);
        return await fetch(`${process.env.REACT_APP_API_KEY}/${endpoint}`, requestOptions);
    }
}