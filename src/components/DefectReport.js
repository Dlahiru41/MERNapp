import React, { useEffect, useState } from 'react';
import { getDefectReport } from '../api/api';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const DefectReport = () => {
    const [defectReport, setDefectReport] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDefectReport();
    }, []);

    const loadDefectReport = async () => {
        try {
            const result = await getDefectReport();
            setDefectReport(result.data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading defect report", error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    // Extract data for visualization
    const defectTypes = defectReport.typesOfDefects.map(defect => defect.type);
    const defectTypeCounts = defectReport.typesOfDefects.map(defect => defect.count);

    const defectRates = defectReport.defectRates.map(rate => rate.count);
    const rateLabels = defectReport.defectRates.map(rate => rate.date);

    const correctiveActions = defectReport.correctiveActions.map(capa => `${capa.actionId} - ${capa.actionType}`);

    return (
        <div>
            <h2>Defect Report</h2>

            {/* Defect Rates Bar Chart */}
            <div>
                <h3>Defect Rates Over Time</h3>
                <Bar
                    data={{
                        labels: rateLabels,
                        datasets: [{
                            label: 'Defect Rates',
                            data: defectRates,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)'
                        }]
                    }}
                    options={{
                        scales: {
                            y: { beginAtZero: true }
                        }
                    }}
                />
            </div>

            {/* Types of Defects Pie Chart */}
            <div>
                <h3>Types of Defects</h3>
                <Pie
                    data={{
                        labels: defectTypes,
                        datasets: [{
                            label: 'Defect Types',
                            data: defectTypeCounts,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)'
                            ]
                        }]
                    }}
                />
            </div>

            {/* Corrective Actions List */}
            <div>
                <h3>Corrective Actions Taken (CAPA)</h3>
                <ul>
                    {correctiveActions.map((action, index) => (
                        <li key={index}>{action}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DefectReport;
