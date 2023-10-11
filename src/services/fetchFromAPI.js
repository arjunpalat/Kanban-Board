const fetchData = async (group, order) => {
    const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const rawData = await response.json();
        return rawData;
    } catch (error) {
        console.error('Error Fetching Data:', error);
        throw error;
    }
};

export { fetchData };
