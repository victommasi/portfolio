import PropTypes from 'prop-types';


const Card = ({ title, subtitle, link, source }) => {
	return (
		<div className="max-w-2xl mx-auto hover:scale-[1.03] transition duration-300" role="link">
			<a href={link} target="_blank" rel="noreferrer">
				<div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs">
					<img className="rounded-t-lg h-[90px] w-[290px] object-fill" src={source} alt=""/>
					<div className="px-4 py-3 leading-none">
						<h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2 leading-none">{title}</h5>
						<p className="font-normal text-gray-700 mb-3 leading-none">{subtitle}</p>
					</div>
				</div>
			</a>
		</div>
	)
}

Card.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	link: PropTypes.string,
	source: PropTypes.string,
}

export default Card;