// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import MainHeader from "../layout/MainHeader";
import HotelService from "../common/HotelService";
import Parallax from "../common/Parallax";
import RoomCarousel from "../common/RoomCarousel";
import RoomSearch from "../common/RoomSearch";
import { useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import GuhagarGallery from "../common/guhagarImage";
import BreakFast from "../common/breakFast";
import Loading from "./Loading"; // Import the Loading component
import ContactUs from "../common/ContactUs"; // Import the ContactUs component
import NearbyDistance from "../common/NearByDistrance";

const Home = () => {
	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const message = location.state && location.state.message;
	const currentUser = localStorage.getItem("userId");

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<section>
			{message && <p className="text-warning px-5">{message}</p>}
			{currentUser && (
				<h6 className="text-success text-center">You are logged in as {currentUser}</h6>
			)}
			<MainHeader />
			<div className="container">
				<RoomSearch />
				<RoomCarousel />
				<HotelService />
				<GuhagarGallery />
				<NearbyDistance />
				<BreakFast />
				<Parallax />
				<ContactUs /> 
				<RoomCarousel />
			</div>
		</section>
	);
};

export default Home;
