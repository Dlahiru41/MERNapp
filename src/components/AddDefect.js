import React, { useState } from 'react';
import { addDefect } from '../api/api';

function AddDefect() {
    const [defect, setDefect] = useState({
        productName: '',
        defectType: '',
        defectSeverity: '',
        status: '',
        reportedBy: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDefect(defect);
        setDefect({ productName: '', defectType: '', defectSeverity: '', status: '', reportedBy: '' });
    };

    return (
        <div>
            <h2>Add Defect</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" value={defect.productName} onChange={e => setDefect({ ...defect, productName: e.target.value })} />
            <input type="text" placeholder="Defect Type" value={defect.defectType} onChange={e => setDefect({ ...defect, defectType: e.target.value })} />
            <input type="text" placeholder="Defect Severity" value={defect.defectSeverity} onChange={e => setDefect({ ...defect, defectSeverity: e.target.value })} />
            <input type="text" placeholder="Status" value={defect.status} onChange={e => setDefect({ ...defect, status: e.target.value })} />
            <input type="text" placeholder="Reported By" value={defect.reportedBy} onChange={e => setDefect({ ...defect, reportedBy: e.target.value })} />
            <button type="submit">Add Defect</button>
        </form>
        </div>
    );
}

export default AddDefect;
