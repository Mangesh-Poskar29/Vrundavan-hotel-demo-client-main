import React from "react";
import img1 from '../../assets/Guhagar/1.jpeg';
import img2 from '../../assets/Guhagar/2.jpeg';
import img3 from '../../assets/Guhagar/3.jpeg';
import img4 from '../../assets/Guhagar/4.jpeg';
import img5 from '../../assets/Guhagar/5.jpeg';
import img6 from '../../assets/Guhagar/6.jpeg';
import img7 from '../../assets/Guhagar/7.jpeg';
import img8 from '../../assets/Guhagar/8.jpeg';
import img9 from '../../assets/Guhagar/9.jpeg';
import img10 from '../../assets/Guhagar/10.jpeg';
import img11 from '../../assets/Guhagar/11.jpeg';
import img12 from '../../assets/Guhagar/12.jpeg';
import img13 from '../../assets/Guhagar/13.jpeg';
import img14 from '../../assets/Guhagar/14.jpeg';



const GuhagarGallery = () => {
	// Sample images related to Guhagar area
	const guhagarImages = [
		img1,
        img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		img9,
		img10,
		img11,
		img12,
		img13,
		img14,

	];

	return (
		<div className="guhagar-image-gallery my-5">
			<h2 className="text-center">Explore Guhagar</h2>
			<div className="row">
				{guhagarImages.map((image, index) => (
					<div className="col-md-3" key={index}>
						<img
							src={image}
							alt={`Guhagar ${index + 1}`}
							className="img-fluid rounded"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default GuhagarGallery;
