/* eslint-disable react/prop-types */
import LineItem from "./LineItem";
const ItemLists = ({ items, handleCheck, handleDelete }) => {
	return (
		<ul className="p-5 bg-slate-400 ">
			{items.map((item) => (
				<LineItem item={item} handleCheck={handleCheck} handleDelete={handleDelete} key={item.id} />
			))}
		</ul>
	);
};

export default ItemLists;
