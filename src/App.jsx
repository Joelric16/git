import { useEffect, useState } from "react";
import Header from "./Pages/Header";
import Content from "./Pages/Content";
import Footer from "./Pages/Footer";
import AddItem from "./Components/AddItem";
import SearchItem from "./Components/SearchItem";
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";
import apiRequest from "./Functions/apiRequest";
import Challenge2 from "./Pages/Challenge2";

function App() {
	const API_URL = "http://localhost:3500/items";
	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState("");
	const [search, setSearch] = useState("");
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItem = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error("Did not received expected data");
				const listItems = await response.json();
				console.log(response);
				console.log(listItems);
				setItems(listItems);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		setTimeout(() => {
			(async () => await fetchItem())();
		}, 3000);
	}, []);

	const addItem = async (item) => {
		const itemId = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id: itemId, checked: false, item };
		const listItems = [...items, myNewItem];
		setItems(listItems);

		const postOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(myNewItem),
		};

		const result = await apiRequest(API_URL, postOptions);

		if (result) setFetchError(result);
	};

	const deleteAll = () => {
		setItems([]);
	};

	const handleCheck = async (id) => {
		const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
		setItems(listItems); /* eslint-disable react/prop-types */

		const myItem = listItems.filter((item) => item.id === id);
		const updateOptions = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ checked: myItem[0].checked }),
		};

		const reqUrl = `${API_URL}/${id}`;
		const result = await apiRequest(reqUrl, updateOptions);
		if (result) setFetchError(result);
	};

	const handleDelete = async (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);

		const deleteOptions = { method: "DELETE" };
		const reqUrl = `${API_URL}/${id}`;
		const result = await apiRequest(reqUrl, deleteOptions);
		if (result) fetchError(result);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addItem(newItem);
		setNewItem("");
	};

	return (
		<>
			<Header title="Grocery List" />
			<AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} deleteAll={deleteAll} />
			<SearchItem search={search} setSearch={setSearch} />
			<main>
				{isLoading && (
					<p className="flex justify-center items-center space-x-4 text-2xl bg-slate-400 p-20">
						<FaSpinner className="animate-spin mr-2 " /> Loading Items...{" "}
					</p>
				)}
				{fetchError && <p className="text-xl p-5 bg-slate-400 text-center text-red-400">{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading && (
					<Content
						items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				)}
			</main>
			<Footer length={items.length} />
		</>
	);
}

export default App;
