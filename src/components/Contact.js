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
        <div className="contact-container">
            <h2>Contact Us</h2>
            {isSubmitted && <div className="popup-message">Message Sent!</div>} {/* Pop-up message */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
