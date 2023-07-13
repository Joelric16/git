/* eslint-disable react/prop-types */
const SearchItem = ({ search, setSearch }) => {
	return (
		<form action="" onSubmit={(e) => e.preventDefault()} className="p-2">
			<input
				type="text"
				id="search"
				role="searchbox"
				placeholder="Search Item"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="w-full rounded-md py-2 px-3 text-xl mb-2 "
			/>
		</form>
	);
};

export default SearchItem;
