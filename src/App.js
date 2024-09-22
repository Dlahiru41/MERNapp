import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import DefectTrackingList from './components/DefectTrackingList';
import AddDefect from './components/AddDefect';
import ComplianceList from './components/ComplianceList';
import AddCompliance from './components/AddCompliance';
import CAPAList from './components/CAPAList';
import AddCAPA from './components/AddCAPA';
import EditCAPA from './components/EditCAPA';
import DefectReport from './components/DefectReport';
import './styles.css';


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/defect-tracking">Defect Tracking List</Link></li>
                        <li><Link to="/add-defect">Add Defect</Link></li>
                        <li><Link to="/compliance-list">Compliance List</Link></li>
                        <li><Link to="/add-compliance">Add Compliance</Link></li>
                        <li><Link to="/capa-list">CAPA List</Link></li>
                        <li><Link to="/add-capa">Add CAPA</Link></li>
                        {/*<li><Link to="/defect-report">Defect Report</Link></li> /!* New Report Route *!/*/}

                    </ul>
                </nav>

                <Routes>
                    <Route path="/defect-tracking" element={<DefectTrackingList />} />
                    <Route path="/add-defect" element={<AddDefect />} />
                    <Route path="/compliance-list" element={<ComplianceList />} />
                    <Route path="/add-compliance" element={<AddCompliance />} />
                    <Route path="/capa-list" element={<CAPAList />} />
                    <Route path="/add-capa" element={<AddCAPA />} />
                    <Route path="/edit-capa/:id" element={<EditCAPA />} />
                    <Route path="/defect-report" element={<DefectReport />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
