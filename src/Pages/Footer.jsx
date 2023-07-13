/* eslint-disable react/prop-types */
const Footer = ({ length }) => {
	return (
		<div
			className="bg-slate-300 absolute bottom-0
     w-full p-5 text-center">
			{length} List {length === 1 ? "item" : "items"}
		</div>
	);
};

export default Footer;
