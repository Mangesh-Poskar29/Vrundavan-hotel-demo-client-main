import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
    const sectionStyle = {
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
    };

    const headingStyle = {
        color: "#333",
        fontSize: "24px",
        marginBottom: "20px",
    };

    const linkStyle = {
        display: "inline-block",
        margin: "10px 0",
        textDecoration: "none",
        color: "#28a745", // Changed link color to dark green
        fontSize: "18px",
        transition: "color 0.3s",
    };

    const linkHoverStyle = {
        color: "#218838", // Darker shade for hover effect
    };

    return (
        <section style={sectionStyle} className="container mt-5">
            <h2 style={headingStyle}>Welcome to Admin Panel</h2>
            <hr />
            <Link to={"/existing-rooms"} style={linkStyle}>Manage Rooms</Link>
            <br />
            <Link to={"/existing-bookings"} style={linkStyle}>Manage Bookings</Link>
        </section>
    );
}

export default Admin;
