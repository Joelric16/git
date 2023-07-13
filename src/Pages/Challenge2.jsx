import { useEffect, useState } from "react";
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";

const Challenge2 = () => {
	const list = [
		{
			id: 1,
			name: "users",
		},
		{
			id: 2,
			name: "posts",
		},
		{
			id: 3,
			name: "comments",
		},
	];

	const API_BASE_URL = "https://jsonplaceholder.typicode.com";

	const [content, setContent] = useState([]);
	const [name, setName] = useState(list[0].name);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItem = async () => {
			try {
				const response = await fetch(`${API_BASE_URL}/${name}`);
				if (!response.ok) throw Error("Please reload the application");
				const listItems = await response.json();
				console.log(response);
				console.log(listItems);
				setContent(listItems);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		(async () => fetchItem())();
	}, [name]);

	return (
		<div>
			Challenge2
			<div className="grid grid-cols-3 bg-slate-400 p-5">
				{list.map((item) => (
					<button className="bg-slate-700 p-5 rounded-sm mx-3" key={item.id} onClick={() => setName(item.name)}>
						{item.name}
					</button>
				))}
			</div>
			{fetchError && <p>{fetchError}</p>}
			{isLoading && (
				<p className="flex justify-center items-center space-x-4 text-2xl bg-slate-400 p-20">
					<FaSpinner className="animate-spin mr-2 " /> Loading Items...{" "}
				</p>
			)}
			{!fetchError && !isLoading && (
				<ul>
					{content.map((item) => (
						<li className="p-5 " key={item.id}>
							{JSON.stringify(item)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Challenge2;
