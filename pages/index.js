// pages/index.js
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [operation, setOperation] = useState('factor');
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('/api/math', { operation, expression });
            setResult(response.data.result);
        } catch (error) {
            console.error(error);
            setResult('An error occurred. Please try again.');
        }

        setLoading(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <h1>Advanced Math Solver</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <select value={operation} onChange={(e) => setOperation(e.target.value)} style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}>
                    <option value="factor">Factor</option>
                    <option value="simplify">Simplify</option>
                    <option value="derive">Derive</option>
                    <option value="integrate">Integrate</option>
                    <option value="zeroes">Find Zeroes</option>
                    <option value="tangent">Find Tangent</option>
                    <option value="area">Area Under Curve</option>
                    <option value="cos">Cosine</option>
                    <option value="sin">Sine</option>
                    <option value="tan">Tangent</option>
                    <option value="arccos">Arccosine</option>
                    <option value="arcsin">Arcsine</option>
                    <option value="arctan">Arctangent</option>
                    <option value="abs">Absolute Value</option>
                    <option value="log">Logarithm</option>
                </select>
                <input
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    placeholder="Enter a math expression"
                    style={{ padding: '10px', fontSize: '16px', marginBottom: '10px', width: '300px' }}
                />
                <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }} disabled={loading}>
                    {loading ? 'Calculating...' : 'Calculate'}
                </button>
            </form>
            {result && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '300px', textAlign: 'center' }}>
                    <strong>Result:</strong> {result}
                </div>
            )}
        </div>
    );
}
