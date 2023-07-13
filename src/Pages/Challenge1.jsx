import { useEffect, useState } from "react";

const Challenge1 = () => {
	const [color, setColor] = useState("");
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		console.log("hello");
	}, [color]);
	return (
		<div className="grid place-items-center min-h-screen">
			<div className="flex flex-col space-y-4">
				<div
					className="border-2 border-slate-400 ring-2 ring-slate-400 rounded-md p-20 text-center "
					style={{ backgroundColor: color ? color : "", color: isDark ? "white" : "black" }}>
					<h1 className="text-xl">{color ? color : "Empty Value"}</h1>
				</div>
				<input
					className="py-2 px-3 text-xl rounded-md border-2  border-slate-400  ring-2 ring-slate-400"
					type="text"
					onChange={(e) => setColor(e.target.value)}
				/>
				<button onClick={() => setIsDark(!isDark)} className="border border-slate-400 py-2 px-3 rounded-md text-xl">
					Toggle Text Color
				</button>
			</div>
		</div>
	);
};

export default Challenge1;
