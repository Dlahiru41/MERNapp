import React, { useState } from 'react';
import { addQualityInspection } from '../api/api';

function AddInspection() {
    const [inspection, setInspection] = useState({
        productName: '',
        inspectorName: '',
        stage: '',
        status: '',
        notes: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addQualityInspection(inspection);
        setInspection({ productName: '', inspectorName: '', stage: '', status: '', notes: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" value={inspection.productName} onChange={e => setInspection({ ...inspection, productName: e.target.value })} />
            <input type="text" placeholder="Inspector Name" value={inspection.inspectorName} onChange={e => setInspection({ ...inspection, inspectorName: e.target.value })} />
            <input type="text" placeholder="Stage" value={inspection.stage} onChange={e => setInspection({ ...inspection, stage: e.target.value })} />
            <input type="text" placeholder="Status" value={inspection.status} onChange={e => setInspection({ ...inspection, status: e.target.value })} />
            <textarea placeholder="Notes" value={inspection.notes} onChange={e => setInspection({ ...inspection, notes: e.target.value })}></textarea>
            <button type="submit">Add Inspection</button>
        </form>
    );
}

export default AddInspection;
