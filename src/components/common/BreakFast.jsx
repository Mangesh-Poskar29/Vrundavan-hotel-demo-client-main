import React from "react";
import img1 from '../../assets/BeakFastImage/b1.jpeg';
import img2 from '../../assets/BeakFastImage/b2.jpeg';
import img3 from '../../assets/BeakFastImage/b3.jpeg';
import img4 from '../../assets/BeakFastImage/b4.jpeg';
import img5 from '../../assets/BeakFastImage/b5.jpeg';
import img6 from '../../assets/BeakFastImage/b6.jpg';
import img7 from '../../assets/BeakFastImage/b7.jfif';



const BreakFast = () => {
	const guhagarImages = [
		img1,
        img2,
		img3,
		img4,
		img5,
		img6,
		img7
	];

	return (
		<div className="guhagar-image-gallery my-5">
			<h2 className="text-center">Break Fast (Charges Included)</h2>
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

export default BreakFast;
