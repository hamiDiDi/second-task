function Intro() {
	return (
		<div className="flex bg-[#fff] text-[#101828] w-full justify-center  ">
			<div className="flex flex-col items-center gap-3 md:gap-8">
				<div className="flex text-[#6941C6] text-xl font-semibold md:text-base ">Our blog</div>
				<h2 className="flex items-center justify-center text-[#101828] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
					Stories and interviews
				</h2>
				<p className="flex flex-wrap items-center justify-center text-center max-w-[90%] text-[#475467] ">
					Subscribe to learn about new product features, the latest in
					technology, solutions, and updates.
				</p>

				<div className="flex mt-2 flex-col items-start justify-center gap-1">
					<div className="flex gap-3 md:flex-row w-full flex-col items-center md:gap-4 " >
						<input
							className="md:px-[14px] px-3 border rounded-lg md:w-auto md:min-w-[300px] w-full py-3"
							type="email"
							placeholder="Enter your email"
						/>
						<button className="bg-[#7F56D9] md:px-5 w-full md:py-3 rounded-lg p-2 h-fit text-[#FFFFFF]">
							<span className="">Get started</span>
						</button>
					</div>
					<div className="text-[#475467] opacity-80 mt-2 text-sm">
						We care about your data in our privacy policy
					</div>
				</div>
			</div>
		</div>
	);
}
export default Intro;
