import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false); // For the pop-up message

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (send data to a server or show a success message)
        console.log("Form submitted: ", formData);
        setFormData({ name: '', email: '', message: '' });

        // Show the "Message Sent" pop-up
        setIsSubmitted(true);

        // Hide the pop-up after 2 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <div className="max-w-lg mx-auto mt-12 p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
            {isSubmitted && (
                <div className="text-center bg-green-500 text-white py-2 mb-4 rounded-md animate-fade-out">
                    Message Sent!
                </div>
            )} {/* Pop-up message */}
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="name" className="mb-2 font-semibold text-gray-600">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />

                <label htmlFor="email" className="mb-2 font-semibold text-gray-600">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />

                <label htmlFor="message" className="mb-2 font-semibold text-gray-600">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                ></textarea>

                <button
                    type="submit"
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
