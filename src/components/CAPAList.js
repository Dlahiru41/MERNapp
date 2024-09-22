import React, { useEffect, useState } from 'react';
import { getCAPARecords, deleteCAPA } from '../api/api';
import { useNavigate } from 'react-router-dom';

function CAPAList() {
    const [capa, setCAPA] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadCAPA();
    }, []);

    const loadCAPA = async () => {
        const result = await getCAPARecords();
        setCAPA(result.data);
    };

    const handleDelete = async (id) => {
        await deleteCAPA(id);
        loadCAPA();
    };

    const handleEdit = (id) => {
        navigate(`/edit-capa/${id}`);
    };

    return (
        <div>
            <h2>Corrective and Preventive Actions (CAPA)</h2>
            <ul>
                {capa.map((action) => (
                    <li key={action._id}>
                        {action.actionId} - {action.actionType} - {action.status}
                        <button onClick={() => handleEdit(action._id)}>Edit</button>
                        <button onClick={() => handleDelete(action._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CAPAList;
