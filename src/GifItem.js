const GifItem = ({ gif }) => {
	return (
		<div className="gif">
			<img src={gif.url} alt="" />
		</div>
	);
};

export default GifItem;
