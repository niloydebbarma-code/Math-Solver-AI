// pages/api/math.js
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    const { operation, expression } = req.body;

    if (!operation || !expression) {
        return res.status(400).json({ message: 'Operation and expression are required' });
    }

    try {
        const response = await axios.get(`https://newton.now.sh/api/v2/${operation}/${encodeURIComponent(expression)}`);
        return res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
