import { Notifications } from "../components/Notifications";

export const postAndPatchData = async (url = '', type, data = {}) => {
    console.log(`Sending ${type} request to ${url} with data:`, data);
    
    try {
        const response = await fetch(url, {
            method: type,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log('status : ' + response.status);
        Notifications(response.status);
        if (!response.ok) {
            console.log(`Response status: ${response.status}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result.error) {
            console.log('status : ' + response.status);
            throw new Error(`API error! message: ${result.error}`);
        }

        return ({
            result,
            status: response.status,
        });
    } catch (error) {
        console.error(`Error occurred: ${error}`);
        throw error;
    }
};
