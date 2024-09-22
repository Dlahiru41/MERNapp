import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getQualityInspections = () => axios.get(`${API_URL}/inspections`);
export const addQualityInspection = (inspection) => axios.post(`${API_URL}/inspections`, inspection);
export const updateQualityInspection = (id, inspection) => axios.put(`${API_URL}/inspections/${id}`, inspection);
export const deleteQualityInspection = (id) => axios.delete(`${API_URL}/inspections/${id}`);



// Defect APIs
export const getDefects = () => axios.get(`${API_URL}/defects`);
export const addDefect = (defect) => axios.post(`${API_URL}/defects`, defect);
export const updateDefect = (id, defect) => axios.put(`${API_URL}/defects/${id}`, defect);
export const deleteDefect = (id) => axios.delete(`${API_URL}/defects/${id}`);

// Compliance APIs
export const getComplianceRecords = () => axios.get(`${API_URL}/compliance`);
export const addCompliance = (compliance) => axios.post(`${API_URL}/compliance`, compliance);
export const updateCompliance = (id, compliance) => axios.put(`${API_URL}/compliance/${id}`, compliance);
export const deleteCompliance = (id) => axios.delete(`${API_URL}/compliance/${id}`);

// CAPA APIs
export const getCAPARecords = () => axios.get(`${API_URL}/capa`);
export const addCAPA = (capa) => axios.post(`${API_URL}/capa`, capa);
export const updateCAPA = (id, capa) => axios.put(`${API_URL}/capa/${id}`, capa);
export const deleteCAPA = (id) => axios.delete(`${API_URL}/capa/${id}`);
export const getCAPARecordById = async (id) => axios.get(`${API_URL}/capa/${id}`);

// Fetch all defects to populate dropdown


// Create CAPA entry
export const createCAPA = async (capaData) => axios.post(`${API_URL}/capa`, capaData);
export const getDefectReport = async () => axios.get(`${API_URL}/defects/report`);