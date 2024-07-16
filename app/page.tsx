import Image from "next/image";
import NavBar from "./components/navbar";
import Intro from "./components/main-pages/intro";
import RecentPosts from "./components/main-pages/recent-posts";
import AllPosts from "./components/main-pages/all-posts";

export default function Home() {
	return (
		<div className="flex flex-col w-full gap-8 items-center">
			<div className="flex flex-col gap-[100px] w-full h-full max-w-7xl">
				<NavBar></NavBar>
				<Intro></Intro>
				<RecentPosts></RecentPosts>
				<AllPosts></AllPosts>
			</div>
		</div>
	);
}
