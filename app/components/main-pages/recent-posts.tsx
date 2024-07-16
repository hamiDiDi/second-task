import Image from "next/image";
function RecentPosts() {
	return (
		<>
			<div className="flex flex-col bg-[#fff] text-[#101828] w-full gap-8">
				<h3 className="flex justify-start text-2xl font-semibold">
					Recent blog posts
				</h3>
				<div className="flex flex-col md:flex-row gap-8 justify-center items-center ">
					<div className="flex flex-col gap-3">
						<Image
							src="/images/chair.png"
							alt="chairs"
							width={592}
							height={236}
						/>
						<p className="text-[#6941C6] text-sm font-semibold">
							Olivia Rhye • 20 Jan 2022
						</p>
						<h4 className="text-2xl font-semibold">UX review presentations</h4>
						<p className="text-[#475467] text-base">
							How do you create compelling presentations that wow your
							colleagues and impress your managers?
						</p>
						<div className="flex gap-2">
							<div className="text-[#026AA2] bg-[#F0F9FF] rounded-2xl py-[2px] px-[10px]">
								<button>Design</button>
							</div>
							<div className="text-[#C11574] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
								<button>Research</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-8">
						<div className="flex gap-6">
							<Image
								src="/images/Image101.png"
								alt="chairs"
								width={320}
								height={200}
							/>
							<div className="flex flex-col gap-3">
								<p className="text-[#6941C6] text-sm font-semibold">
									Phoenix Baker • 19 Jan 2022
								</p>
								<h4 className="text-2xl font-semibold">
									Migrating to Linear 101
								</h4>
								<p className="text-[#475467] text-base">
									Linear helps streamline software projects, sprints, tasks, and
									bug tracking. Here’s how to get...
								</p>
								<div className="flex gap-2">
									<div className="text-[#6941C6] bg-[#F9F5FF] rounded-2xl py-[2px] px-[10px]">
										<button>Design</button>
									</div>
									<div className="text-[#C11574] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
										<button>Research</button>
									</div>
								</div>
							</div>
						</div>
						<div className="flex gap-6">
							<Image
								src="/images/chair.png"
								alt="chairs"
								width={320}
								height={200}
							/>
							<div className="flex flex-col gap-3 ">
								<p className="text-[#6941C6] text-sm font-semibold">
									Lana Steiner • 18 Jan 2022
								</p>
								<h4 className="text-2xl font-semibold">
									Building your API Stack
								</h4>
								<p className="text-[#475467] text-base">
									The rise of RESTful APIs has been met by a rise in tools for
									creating, testing, and manag...
								</p>
								<div className="flex gap-2">
									<div className="text-[#027A48] bg-[#ECFDF3] rounded-2xl py-[2px] px-[10px]">
										<button>Software</button>
									</div>
									<div className="text-[#C11574] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
										<button>Research</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default RecentPosts;
