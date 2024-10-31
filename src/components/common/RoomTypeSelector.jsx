import React, { useState, useEffect } from "react"
import { getRoomTypes } from "../utils/ApiFunctions"

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
	// Initialize with default room types "Single" and "Double"
	const [roomTypes, setRoomTypes] = useState(["Single", "Double"])
	const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false)
	const [newRoomType, setNewRoomType] = useState("")

	useEffect(() => {
		getRoomTypes().then((data) => {
			if (data && Array.isArray(data)) {
				// Append fetched room types to the default ones
				setRoomTypes((prevRoomTypes) => [...prevRoomTypes, ...data])
			}
		})
	}, [])

	const handleNewRoomTypeInputChange = (e) => {
		setNewRoomType(e.target.value)
	}

	const handleAddNewRoomType = () => {
		if (newRoomType !== "") {
			setRoomTypes([...roomTypes, newRoomType])
			setNewRoomType("")
			setShowNewRoomTypeInput(false)
		}
	}

	return (
		<>
			<div>
				<select
					required
					className="form-select"
					name="roomType"
					onChange={(e) => {
						if (e.target.value === "Add New") {
							setShowNewRoomTypeInput(true)
						} else {
							handleRoomInputChange(e)
						}
					}}
					value={newRoom.roomType}>
					<option value="">Select a room type</option>
					{/* Default options */}
					{roomTypes.map((type, index) => (
						<option key={index} value={type}>
							{type}
						</option>
					))}
					{/* Option to add a new room type */}
					<option value={"Add New"}>Add New</option>
				</select>

				{/* Input field to add a new room type */}
				{showNewRoomTypeInput && (
					<div className="mt-2">
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="Enter New Room Type"
								value={newRoomType}
								onChange={handleNewRoomTypeInputChange}
							/>
							<button className="btn btn-hotel" type="button" onClick={handleAddNewRoomType}>
								Add
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default RoomTypeSelector
