import Image from "next/image";
function AllPosts() {
	return (
		<>
			<div className="flex flex-col bg-[#fff] text-[#101828] gap-8">
				<h3 className="flex justify-start text-2xl font-semibold">All blog posts</h3>
				<div className="flex flex-col md:flex-row gap-12">
					<div className="flex flex-col gap-3 max-w-[384px]">
						<Image
							src="/images/mountain.png"
							alt="mountain"
							width={384}
							height={240}
						/>
						<p className="text-[#6941C6] text-sm font-semibold">
							Alec Whitten • 17 Jan 2022
						</p>
						<h4 className="text-2xl font-semibold text-[#101828]">
							Bill Walsh leadership lessons
						</h4>
						<p className="text-[#475467] text-base w-full">
							Like to know the secrets of transforming a 2-14 team into a 3x
							Super Bowl winning Dynasty?
						</p>
						<div className="flex gap-2">
							<div className="text-[#6941C6] bg-[#F0F9FF] rounded-2xl py-[2px] px-[10px]">
								<button>Leadership</button>
							</div>
							<div className="text-[#363F72] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
								<button>Management</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<Image
							src="/images/meeting.png"
							alt="meeting"
							width={384}
							height={240}
						/>
						<p className="text-[#6941C6] text-sm font-semibold">
							Demi WIlkinson • 16 Jan 2022
						</p>
						<h4 className="text-2xl font-semibold text-[#101828]">
							PM mental models
						</h4>
						<p className="text-[#475467] text-base">
							Mental models are simple expressions of complex processes or
							relationships.
						</p>
						<div className="flex gap-2">
							<div className="text-[#026AA2] bg-[#F0F9FF] rounded-2xl py-[2px] px-[10px]">
								<button>Product</button>
							</div>
							<div className="text-[#3538CD] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
								<button>Research</button>
							</div>
							<div className="text-[#B93815] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
								<button>Frameworks</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<Image
							src="/images/office.png"
							alt="office"
							width={384}
							height={240}
						/>
						<p className="text-[#6941C6] text-sm font-semibold">
                        Candice Wu • 15 Jan 2022
						</p>
						<h4 className="text-2xl font-semibold text-[#101828]">
                        What is Wireframing?
						</h4>
						<p className="text-[#475467] text-base">
                        Introduction to Wireframing and its Principles. Learn from the best in the industry.
						</p>
						<div className="flex gap-2">
							<div className="text-[#6941C6] bg-[#F0F9FF] rounded-2xl py-[2px] px-[10px]">
								<button>Design</button>
							</div>
							<div className="text-[#3538CD] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
								<button>Research</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex gap-12 flex-col md:flex-row">
					<div className="flex flex-col gap-3">
						<Image
							src="/images/design.png"
							alt="design"
							width={384}
							height={240}
						/>
						<p className="text-[#6941C6] text-sm font-semibold">
                        Natali Craig • 14 Jan 2022
						</p>
						<h4 className="text-2xl font-semibold text-[#101828]">
                        How collaboration makes us better designers
						</h4>
						<p className="text-[#475467] text-base">
                        Collaboration can make our teams stronger, and our individual designs better.
						</p>
						<div className="flex gap-2">
							<div className="text-[#6941C6] bg-[#F0F9FF] rounded-2xl py-[2px] px-[10px]">
								<button>Design</button>
							</div>
							<div className="text-[#3538CD] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
								<button>Research</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3 w-max-[384px]">
						<Image
							src="/images/framework.png"
							alt="framework"
							width={384}
							height={240}
						/>
						<p className="text-[#6941C6] text-sm font-semibold">
                        Drew Cano • 13 Jan 2022
						</p>
						<h4 className="text-2xl font-semibold text-[#101828] w-full">
                        Our top 10 Javascript frameworks to use
						</h4>
						<p className="text-[#475467] text-base w-full">
                        JavaScript frameworks make development easy with extensive features and functionalities.
						</p>
						<div className="flex gap-2">
							<div className="text-[#027A48] bg-[#F0F9FF] rounded-2xl py-[2px] px-[10px]">
								<button>Software</button>
							</div>
							<div className="text-[#C11574] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
								<button>Tools</button>
							</div>
                            <div className="text-[#C01048] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
								<button>SaaS</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<Image
							src="/images/podcast.png"
							alt="podcast"
							width={384}
							height={240}
						/>
						<p className="text-[#6941C6] text-sm font-semibold">
                        Orlando Diggs • 12 Jan 2022
						</p>
						<h4 className="text-2xl font-semibold text-[#101828]">
                        Podcast: Creating a better CX Community
						</h4>
						<p className="text-[#475467] text-base">
                        Starting a community doesn’t need to be complicated, but how do you get started?
						</p>
						<div className="flex gap-2">
							<div className="text-[#6941C6] bg-[#F0F9FF] rounded-2xl py-[2px] px-[10px]">
								<button>Podcasts</button>
							</div>
							<div className="text-[#363F72] bg-[#FDF2FA] rounded-2xl py-[2px] px-[10px]">
								<button>Costumer Success</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default AllPosts;
