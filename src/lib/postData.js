export const postData = async (url = '', data = {}) => {
    console.log(data);
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    if (result.error) {
        throw new Error(`API error! message: ${result.error}`);
    }
    return result;
}

