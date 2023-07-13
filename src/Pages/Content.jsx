/* eslint-disable react/prop-types */
import ItemLists from "../Components/ItemLists";

const Content = ({ items, handleCheck, handleDelete }) => {
	return (
		<>
			{items.length ? (
				<ItemLists items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
			) : (
				<h1 className="bg-slate-400  text-center text-4xl  p-5">Your cart is empty</h1>
			)}
		</>
	);
};

export default Content;
