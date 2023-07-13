/* eslint-disable react/prop-types */
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
const LineItem = ({ item, handleCheck, handleDelete }) => {
	return (
		<li className="grid grid-cols-12 space-y-2 bg-green-400 items-center px-2  border border-yellow-400 mb-4">
			<input type="checkbox" checked={item.checked} className="h-[30px]" onChange={() => handleCheck(item.id)} />
			<label className={`col-span-10 text-xl p-5 ${item.checked ? "line-through" : ""}`} onDoubleClick={() => handleCheck(item.id)}>
				{item.item}
			</label>

			<FaTrashAlt
				role="button"
				tabIndex={0}
				className="text-2xl mx-auto hover:text-red-500 h-[30px]"
				onClick={() => handleDelete(item.id)}
				aria-label={`Delete ${item.item}`}
			/>
		</li>
	);
};

export default LineItem;
