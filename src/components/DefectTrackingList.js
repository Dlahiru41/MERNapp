import React, { useEffect, useState } from 'react';
import { getDefects, deleteDefect } from '../api/api';

function DefectTrackingList() {
    const [defects, setDefects] = useState([]);

    useEffect(() => {
        loadDefects();
    }, []);

    const loadDefects = async () => {
        const result = await getDefects();
        setDefects(result.data);
    };

    const handleDelete = async (id) => {
        await deleteDefect(id);
        loadDefects();
    };

    return (
        <div>
            <h2>Defect Tracking</h2>
            <ul>
                {defects.map(defect => (
                    <li key={defect._id}>
                        {defect.productName} - {defect.defectType} - {defect.status}
                        <button onClick={() => handleDelete(defect._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DefectTrackingList;
