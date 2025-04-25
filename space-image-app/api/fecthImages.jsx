export default async function handler(req, res) {
    const { query } = req.query;
    const UNSPLASH_ACCESS_KEY = process.env.SECRET_UNSPLASH_SPACE_APP_ACCESS_KEY;

    if (!UNSPLASH_ACCESS_KEY) {
        res.status(500).json({error: "API key is missing" });
        return;
    }
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}`;
    try { 
        const response = await fetch(url);
        console.log("API Response: ", response);

        if (!response.ok) {
            console.error(`API response status of fetchImages component: ${response.status}`);
            throw new Error(`Network response was not ok`)
        }

        const data = await response.json();
        res.status(200).json(data);
        console.log("data response of fetchImages Component>> ", data)
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    };
};