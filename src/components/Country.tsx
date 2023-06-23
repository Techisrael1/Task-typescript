import React from "react";

interface CountryProps {
	name: string;
	region: string;
	area: number;
}

const Country: React.FC<CountryProps> = ({ name, region, area }) => {
	return (
		<div>
			<div className="dropdown">
				<div className="cards border border-0 text-dark shadow fs-5 my-2 py-3 bg-light px-3 d-block">
					<div className="d-flex justify-content-between">{name}</div>
				</div>
				<ul className="w-100">
					<a className="cardss dropdown-item bg-green" href="#">
						Region: {region}
					</a>
					<a className="cardss dropdown-item bg-red" href="#">
						Area: {area}
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Country;
