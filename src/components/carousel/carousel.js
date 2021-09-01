import React, { useState } from 'react';

export default function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	// console.log('carusel');
	return (
		<div
			id="carouselExampleCaptions"
			className="carousel slide"
			data-ride="carousel"
		>
			<ol className="carousel-indicators">
				<li
					data-target="#carouselExampleCaptions"
					data-slide-to="0"
					className="active"
				></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://www.wallpapertip.com/wmimgs/6-68420_crossfit-quote-wallpaper-rich-froning-handstand.jpg"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://c4.wallpaperflare.com/wallpaper/251/44/984/legs-power-muscles-crossfit-wallpaper-preview.jpg"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Some representative placeholder content for the second slide.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://d1s2fu91rxnpt4.cloudfront.net/legacy/LisaHepfer_snatch.jpg"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>Some representative placeholder content for the third slide.</p>
					</div>
				</div>
			</div>
			<a
				className="carousel-control-prev"
				href="#carouselExampleCaptions"
				role="button"
				data-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href="#carouselExampleCaptions"
				role="button"
				data-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
}
