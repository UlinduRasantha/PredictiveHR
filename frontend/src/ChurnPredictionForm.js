import React, { useState } from 'react';

function ChurnPredictionForm() {
    const [absenteeism, setAbsenteeism] = useState('');
    const [performanceScore, setPerformanceScore] = useState('');
    const [lateLogins, setLateLogins] = useState('');
    const [churnProbability, setChurnProbability] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setChurnProbability(null);

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', { // Replace with your Flask API URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    absenteeism: parseInt(absenteeism),
                    performance_score: parseInt(performanceScore),
                    late_logins: parseInt(lateLogins),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong!');
            }

            const data = await response.json();
            setChurnProbability(data.churn_probability);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <h1>HR Churn Prediction</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                    <label htmlFor="absenteeism" style={{ display: 'block', marginBottom: '5px' }}>Absenteeism (days per year):</label>
                    <input
                        type="number"
                        id="absenteeism"
                        value={absenteeism}
                        onChange={(e) => setAbsenteeism(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div>
                    <label htmlFor="performanceScore" style={{ display: 'block', marginBottom: '5px' }}>Performance Score (1-10):</label>
                    <input
                        type="number"
                        id="performanceScore"
                        value={performanceScore}
                        onChange={(e) => setPerformanceScore(e.target.value)}
                        min="1"
                        max="10"
                        required
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div>
                    <label htmlFor="lateLogins" style={{ display: 'block', marginBottom: '5px' }}>Number of Late Logins:</label>
                    <input
                        type="number"
                        id="lateLogins"
                        value={lateLogins}
                        onChange={(e) => setLateLogins(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <button type="submit" disabled={loading}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        fontSize: '16px'
                    }}>
                    {loading ? 'Predicting...' : 'Predict Resignation Probability'}
                </button>
            </form>

            {loading && <p style={{ marginTop: '20px', color: '#007bff' }}>Loading...</p>}
            {error && <p style={{ marginTop: '20px', color: 'red' }}>Error: {error}</p>}

            {churnProbability !== null && (
                <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #28a745', borderRadius: '5px', backgroundColor: '#e6ffe6' }}>
                    <h2 style={{ color: '#28a745' }}>Prediction Result:</h2>
                    <p style={{ fontSize: '1.2em' }}>
                        The probability of this employee resigning is:
                        <strong style={{ color: '#0056b3' }}> { (churnProbability * 100).toFixed(2) }%</strong>
                    </p>
                    {churnProbability > 0.5 ? (
                        <p style={{ color: 'orange', fontWeight: 'bold' }}>
                            Consider this employee at high risk of resignation.
                        </p>
                    ) : (
                        <p style={{ color: 'green' }}>
                            This employee is at lower risk of resignation.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default ChurnPredictionForm;