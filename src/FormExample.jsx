import React, {useState} from 'react';


const FormExample = () => {
    const [formData, setFormData] = useState({ name: '', email: ''});
    const [submittedData, setSubmittedData] = useState(null);

    const handeInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({ name: '', email: ''})
    };


    return (
        <div>
            <h1>Form Example</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handeInputChange}
                    placeholder='Name'
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handeInputChange}
                    placeholder='Email'
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {submittedData && (
                <div>
                    <h2>Submitted Data:</h2>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Name:</strong> {submittedData.email}</p>
                </div>
            )}


        </div>
    );
};

export default FormExample;