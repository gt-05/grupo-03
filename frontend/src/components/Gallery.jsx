import {useState} from 'react';


export default function Gallery({width = '1600px', height = '900px', hidden}) {

	const [current, setCurrent] = useState(0);

	let css = {
		transform: `translateX(-${current}%)`
	}

	let imgs = [
		{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-4.jpeg" },
		{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-5.jpeg" },
		{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-6.jpeg" },
		{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-8.jpeg" },
		{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-7.jpeg" },
	];

	function handlerSlide(direction) {
		
		if (direction === 'next') {
			let position = current + 100;
			setCurrent(position > (imgs.length-1)*100 ? 0 : position);
		}

		if (direction === 'prev') {
			let position = current - 100;
			setCurrent(position < 0 ? (imgs.length - 1) * 100 : position);
		}
	}
	function handlerThumbnailClick(index) {
		setCurrent(index * 100);
	}

	let thumbnails = imgs.map((img, index) => {
		return (
			<div key={index} className={`thumbnail min-w-[60px] m-1 cursor-pointer flex ${hidden}`} onClick={() => handlerThumbnailClick(index)}>
				<img className= "w-full h-full object-cover"
				src={img.src}
				alt={`thumbnail ${index + 1}`} />
			</div>
		);
	});

	let tagsImg = imgs.map(function (img, index) {
		return (
			<div key={index} className="slide min-w-full">
				<img className="w-full h-full object-cover" src={img.src} />
			</div>
		)
	});

	return (
		<div className="gallery ml-1 mr-1" style={{maxWidth: width, maxHeight: height}}>
			<div className="slider relative overflow-hidden rounded-xl">
				<div 
					id='item' className="slides flex ease-in-out duration-500"
					style={css}>
					{tagsImg}
				</div>
				<span 
					className="absolute top-1/2 cursor-pointer ml-2" 
					id="prev" 
					onClick={event => handlerSlide('prev')}>
					<img src="/src/assets/icons/prev.svg" />
				</span>
				<span 
					className="absolute top-1/2 cursor-pointer right-0 mr-2" 
					id="next"
					onClick={event => handlerSlide('next')}>
					<img src="/src/assets/icons/next.svg" />
				</span>
			</div>
			<div className="thumbnails flex justify-center mt-4">
				{thumbnails}
			</div>
		</div>
	);
}