import React from "react";
import { FaUmbrellaBeach, FaLandmark, FaLightbulb, FaFortAwesome } from "react-icons/fa";
import { GiDolphin } from "react-icons/gi";

const NearbyDistance = () => {
    const places = [
        { name: "Guhagar Beach (गुहागर बीच)", distance: "within walkable distance", icon: <FaUmbrellaBeach /> },
        { name: "Guhagar Vyadeshwar Temple (गुहागर व्याडेश्वर मंदीर)", distance: "within walkable distance", icon: <FaLandmark /> },
        { name: "Ashtvane Temple (अष्टवणे मंदीर)", distance: "within 2 km", icon: <FaLandmark /> },
        { name: "Anjanvel Lighthouse (अंजनवेल लाइटहाउस)", distance: "within 32 km", icon: <FaLightbulb /> },
        { name: "Dolphin Point (डॉल्फिन पॉइंट)", distance: "within 31 km", icon: <GiDolphin /> },
        { name: "GopalGad Fort (गोपाळगड किल्ला)", distance: "within 35 km", icon: <FaFortAwesome /> }
    ];

    return (
        <div style={styles.NContainer}>
            <h2 style={styles.NTitle}>Nearby Attractions</h2>
            <ul style={styles.NList}>
                {places.map((place, index) => (
                    <li key={index} style={{ ...styles.NListItem, animationDelay: `${index * 0.1}s` }}>
                        <div style={styles.NIcon}>{place.icon}</div>
                        <div style={styles.NInfo}>
                            <strong style={styles.NPlaceName}>{place.name}</strong>
                            <span style={styles.NDistance}> - {place.distance}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    NContainer: {
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "20px auto"
    },
    NTitle: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#007bff",
        textAlign: "center",
        marginBottom: "15px"
    },
    NList: {
        listStyleType: "none",
        padding: "0",
        margin: "0"
    },
    NListItem: {
        display: "flex",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid #ddd",
        opacity: "0",
        transform: "translateY(20px)",
        animation: "fadeInUp 0.5s ease forwards"
    },
    NIcon: {
        fontSize: "24px",
        color: "rgb(169, 77, 123)", // Icon color
        marginRight: "15px",
        cursor: "pointer",
        boxShadow: "0 0 10px rgba(169, 77, 123, 0.6)", // Glow effect
        transition: "box-shadow 0.3s ease-in-out",
    },
    NInfo: {
        display: "flex",
        flexDirection: "column"
    },
    NPlaceName: {
        fontSize: "18px",
        fontWeight: "600",
        background: "linear-gradient(90deg, rgba(169, 77, 123, 1), rgba(255, 183, 197, 1), rgba(169, 77, 123, 1))",
        backgroundSize: "200% auto",
        color: "#333",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "glowText 2.5s linear infinite" // Animation for glowing text
    },
    NDistance: {
        fontSize: "14px",
        color: "#666"
    }
};

// Adding CSS animations with keyframes
const styleSheet = document.styleSheets[0];

// Fade-in animation for the list items
const keyframesFadeInUp = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`;

// Horizontal glow animation for the place names
const keyframesGlowText = `
@keyframes glowText {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}`;

styleSheet.insertRule(keyframesFadeInUp, styleSheet.cssRules.length);
styleSheet.insertRule(keyframesGlowText, styleSheet.cssRules.length);

export default NearbyDistance;
