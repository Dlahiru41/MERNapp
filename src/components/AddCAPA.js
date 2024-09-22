import React, { useState, useEffect } from 'react';
import { createCAPA, getDefects } from '../api/api'; // Assumed API functions

const AddCAPA = () => {
    const [defects, setDefects] = useState([]);
    const [capa, setCAPA] = useState({
        actionId: '',
        actionType: '',
        description: '',
        relatedDefect: '', // Stores selected defect ID
        status: '',
        assignedTo: '',
        dueDate: '',
        completionDate: ''
    });

    // Load defects from the backend when the component is mounted
    useEffect(() => {
        const loadDefects = async () => {
            try {
                const result = await getDefects(); // Fetch defects from the API
                setDefects(result.data); // Set the defects in the state
            } catch (error) {
                console.error('Failed to fetch defects:', error);
            }
        };
        loadDefects();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCAPA({ ...capa, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCAPA(capa); // Post CAPA data to the backend
            alert('CAPA added successfully!');
            setCAPA({
                actionId: '',
                actionType: '',
                description: '',
                relatedDefect: '',
                status: '',
                assignedTo: '',
                dueDate: '',
                completionDate: ''
            }); // Reset form fields
        } catch (error) {
            console.error('Failed to create CAPA:', error);
        }
    };

    return (
        <div>
            <h2>Add Corrective and Preventive Action CAPA</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Action ID:</label>
                <input
                    type="text"
                    name="actionId"
                    value={capa.actionId}
                    onChange={handleInputChange}
                    placeholder="Enter Action ID"
                    required
                />
            </div>

            <div>
                <label>Action Type:</label>
                <input
                    type="text"
                    name="actionType"
                    value={capa.actionType}
                    onChange={handleInputChange}
                    placeholder="Enter Action Type"
                    required
                />
            </div>

            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={capa.description}
                    onChange={handleInputChange}
                    placeholder="Enter Description"
                    required
                />
            </div>

            <div>
                <label>Related Defect:</label>
                <select
                    name="relatedDefect"
                    value={capa.relatedDefect}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select Related Defect</option>
                    {defects.map(defect => (
                        <option key={defect._id} value={defect._id}>
                            {defect.productName} - {defect.defectType}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Status:</label>
                <input
                    type="text"
                    name="status"
                    value={capa.status}
                    onChange={handleInputChange}
                    placeholder="Enter Status"
                    required
                />
            </div>

            <div>
                <label>Assigned To:</label>
                <input
                    type="text"
                    name="assignedTo"
                    value={capa.assignedTo}
                    onChange={handleInputChange}
                    placeholder="Assigned To"
                    required
                />
            </div>

            <div>
                <label>Due Date:</label>
                <input
                    type="date"
                    name="dueDate"
                    value={capa.dueDate}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label>Completion Date:</label>
                <input
                    type="date"
                    name="completionDate"
                    value={capa.completionDate}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Add CAPA</button>
        </form>
        </div>
    );
};

export default AddCAPA;
