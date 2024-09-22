import React, { useEffect, useState } from 'react';
import { getQualityInspections, deleteQualityInspection } from '../api/api';

function QualityInspectionList() {
    const [inspections, setInspections] = useState([]);

    useEffect(() => {
        loadInspections();
    }, []);

    const loadInspections = async () => {
        const result = await getQualityInspections();
        setInspections(result.data);
    };

    const handleDelete = async (id) => {
        await deleteQualityInspection(id);
        loadInspections();
    };

    return (
        <div>
            <h2>Quality Inspections</h2>
            <ul>
                {inspections.map(inspection => (
                    <li key={inspection._id}>
                        {inspection.productName} - {inspection.status}
                        <button onClick={() => handleDelete(inspection._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QualityInspectionList;
