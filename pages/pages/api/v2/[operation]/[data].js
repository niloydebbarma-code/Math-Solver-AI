
// pages/api/v2/[operation]/[data].js
import axios from 'axios';

export default async function handler(req, res) {
    const { operation, data } = req.query;

    if (!operation || !data) {
        return res.status(400).json({ message: 'Operation and data are required' });
    }

    try {
        const response = await axios.get(`https://newton.now.sh/api/v2/${operation}/${encodeURIComponent(data)}`);
        return res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
