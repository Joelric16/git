/* eslint-disable react/prop-types */
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { useRef } from "react";
const AddItem = ({ newItem, setNewItem, handleSubmit, deleteAll }) => {
	const inputRef = useRef();
	return (
		<form action="" className="flex space-x-2 p-2" onSubmit={handleSubmit}>
			<input
				type="text"
				ref={inputRef}
				name=""
				id="addItem"
				placeholder="Add Item"
				required
				className="w-full rounded-md py-2 px-3 text-xl"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
				autoFocus
			/>
			<button type="submit" aria-label="Add Item" className="border bg-slate-400 p-3 rounded-md " onClick={() => inputRef.current.focus()}>
				<FaPlus />
			</button>
			<button type="button" aria-label="Delete All" className="border bg-slate-400 p-3 rounded-md" onClick={deleteAll}>
				<FaTrash />
			</button>
		</form>
	);
};

export default AddItem;
