import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCAPARecordById, updateCAPA } from '../api/api';

function EditCAPA() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        actionId: '',
        actionType: '',
        status: '',
    });

    useEffect(() => {
        loadCAPA();
    }, []);

    const loadCAPA = async () => {
        const result = await getCAPARecordById(id);
        setFormData(result.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCAPA(id, formData);
        navigate('/capa-list'); // Redirect back to CAPA list after update
    };

    return (
        <div>
            <h2>Edit CAPA</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Action ID:</label>
                    <input
                        type="text"
                        name="actionId"
                        value={formData.actionId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Action Type:</label>
                    <input
                        type="text"
                        name="actionType"
                        value={formData.actionType}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update CAPA</button>
            </form>
        </div>
    );
}

export default EditCAPA;
