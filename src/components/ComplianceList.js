import React, { useEffect, useState } from 'react';
import { getComplianceRecords, deleteCompliance } from '../api/api';

function ComplianceList() {
    const [compliance, setCompliance] = useState([]);

    useEffect(() => {
        loadCompliance();
    }, []);

    const loadCompliance = async () => {
        const result = await getComplianceRecords();
        setCompliance(result.data);
    };

    const handleDelete = async (id) => {
        await deleteCompliance(id);
        loadCompliance();
    };

    return (
        <div>
            <h2>Compliance Records</h2>
            <ul>
                {compliance.map(record => (
                    <li key={record._id}>
                        {record.productName} - {record.complianceType} - {record.status}
                        <button onClick={() => handleDelete(record._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ComplianceList;
