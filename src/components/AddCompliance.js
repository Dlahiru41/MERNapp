import React, { useState } from 'react';
import { addCompliance } from '../api/api';

function AddCompliance() {
    const [compliance, setCompliance] = useState({
        productName: '',
        complianceType: '',
        status: '',
        certificationBody: '',
        validFrom: '',
        validUntil: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCompliance(compliance);
        setCompliance({ productName: '', complianceType: '', status: '', certificationBody: '', validFrom: '', validUntil: '' });
    };

    return (
        <div>
            <h2>Add Compliance Record</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" value={compliance.productName} onChange={e => setCompliance({ ...compliance, productName: e.target.value })} />
            <input type="text" placeholder="Compliance Type" value={compliance.complianceType} onChange={e => setCompliance({ ...compliance, complianceType: e.target.value })} />
            <input type="text" placeholder="Status" value={compliance.status} onChange={e => setCompliance({ ...compliance, status: e.target.value })} />
            <input type="text" placeholder="Certification Body" value={compliance.certificationBody} onChange={e => setCompliance({ ...compliance, certificationBody: e.target.value })} />
            <input type="date" placeholder="Valid From" value={compliance.validFrom} onChange={e => setCompliance({ ...compliance, validFrom: e.target.value })} />
            <input type="date" placeholder="Valid Until" value={compliance.validUntil} onChange={e => setCompliance({ ...compliance, validUntil: e.target.value })} />
            <button type="submit">Add Compliance</button>
        </form>
        </div>
    );
}

export default AddCompliance;
