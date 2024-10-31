import React, { useState } from "react"
import { Form, Button, Row, Col, Container, Spinner, Alert } from "react-bootstrap"
import moment from "moment"
import { getAvailableRooms } from "../utils/ApiFunctions"
import RoomSearchResults from "./RoomSearchResult"
import RoomTypeSelector from "./RoomTypeSelector"
import { FaCalendarAlt } from "react-icons/fa" // Add this import for icons

const RoomSearch = () => {
	const [searchQuery, setSearchQuery] = useState({
		checkInDate: "",
		checkOutDate: "",
		roomType: ""
	})

	const [errorMessage, setErrorMessage] = useState("")
	const [availableRooms, setAvailableRooms] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [hasSearched, setHasSearched] = useState(false) // New state to track if a search has been performed

	const handleSearch = (e) => {
		e.preventDefault()
		const checkInMoment = moment(searchQuery.checkInDate)
		const checkOutMoment = moment(searchQuery.checkOutDate)
		if (!checkInMoment.isValid() || !checkOutMoment.isValid()) {
			setErrorMessage("Please enter valid dates")
			return
		}
		if (!checkOutMoment.isSameOrAfter(checkInMoment)) {
			setErrorMessage("Check-out date must be after check-in date")
			return
		}
		setIsLoading(true)
		setHasSearched(true) // Set the search flag to true
		getAvailableRooms(searchQuery.checkInDate, searchQuery.checkOutDate, searchQuery.roomType)
			.then((response) => {
				setAvailableRooms(response.data)
				setTimeout(() => setIsLoading(false), 2000)
			})
			.catch((error) => {
				console.log(error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setSearchQuery({ ...searchQuery, [name]: value })
		const checkInDate = moment(searchQuery.checkInDate)
		const checkOutDate = moment(searchQuery.checkOutDate)
		if (checkInDate.isValid() && checkOutDate.isValid()) {
			setErrorMessage("")
		}
	}
	const handleClearSearch = () => {
		setSearchQuery({
			checkInDate: "",
			checkOutDate: "",
			roomType: ""
		})
		setAvailableRooms([])
		setHasSearched(false) // Reset the search flag when clearing
	}

	return (
		<Container className="shadow mt-n5 mb-5 py-5 rounded" style={{ backgroundColor: '#fff' }}>
			<Form onSubmit={handleSearch}>
				<Row className="justify-content-center">
					<Col xs={12} md={3}>
						<Form.Group controlId="checkInDate">
							<Form.Label>Check-in Date</Form.Label>
							<Form.Control
								type="date"
								name="checkInDate"
								value={searchQuery.checkInDate}
								onChange={handleInputChange}
								min={moment().format("YYYY-MM-DD")}
							/>
						</Form.Group>
					</Col>
					<Col xs={12} md={3}>
						<Form.Group controlId="checkOutDate">
							<Form.Label>Check-out Date</Form.Label>
							<Form.Control
								type="date"
								name="checkOutDate"
								value={searchQuery.checkOutDate}
								onChange={handleInputChange}
								min={moment().format("YYYY-MM-DD")}
							/>
						</Form.Group>
					</Col>
					<Col xs={12} md={3}>
						<Form.Group controlId="roomType">
							<Form.Label>Room Type</Form.Label>
							<div className="d-flex">
								<RoomTypeSelector
									handleRoomInputChange={handleInputChange}
									newRoom={searchQuery}
								/>
								<Button 
									variant="primary" 
									type="submit" 
									className="ml-2 btn-hotel"
								>
									Search
								</Button>
							</div>
						</Form.Group>
					</Col>
				</Row>
			</Form>

			{isLoading ? (
				<div className="mt-4 text-center">
					<Spinner animation="border" role="status" />
					<p>Finding available rooms...</p>
				</div>
			) : hasSearched && availableRooms.length === 0 ? ( // Check if search has been performed and no rooms are available
				<p className="mt-4">No rooms available for the selected dates and room type.</p>
			) : (
				availableRooms.length > 0 && (
					<RoomSearchResults results={availableRooms} onClearSearch={handleClearSearch} />
				)
			)}

			{errorMessage && (
				<Alert variant="danger" className="mt-4">{errorMessage}</Alert>
			)}
		</Container>
	)
}

export default RoomSearch
