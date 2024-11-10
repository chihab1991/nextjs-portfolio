import Image from "next/image";
import Link from "next/link";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import placeholder from "./../../public/img/300x200.png";

const Projects = () => {
	return (
		<section id="projects" className="text-center px-6 py-20 container mx-auto">
			<h1 className="text-2xl font-bold ">Projects</h1>
			<h2 className="text-lg ">
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-softBlue to-white">
					Some of my Work
				</span>
			</h2>
			{/* <ul>
				{ TODO projects filter }
				<li>All</li>
				<li>Next js</li>
				<li>React js</li>
			</ul> */}
			<div className="grid grid-cols-1 lg:grid-cols-2 text-left gap-y-16 lg:gap-14 pt-28">
				<div>
					<Image src={placeholder} alt="project 01" className="w-full" />
					<div className="flex items-center justify-between mt-12">
						<div>
							<h4 className="text-lg font-semibold">
								Project name/ description
							</h4>
							<p className="mt-4 text-gray">Tech Used</p>
						</div>
						<Link
							href="#"
							target="_blank"
							className="self-end"
							aria-label="link to project one"
						>
							<BsFillArrowUpRightCircleFill className=" rounded-full text-5xl text-softBlue bg-white" />
						</Link>
					</div>
				</div>

				<div>
					<Image src={placeholder} alt="project 01" className="w-full" />
					<div className="flex items-center justify-between mt-12">
						<div>
							<h4 className="text-lg font-semibold">
								Project name/ description
							</h4>
							<p className="mt-4 text-gray">Tech Used</p>
						</div>
						<Link
							href="#"
							target="_blank"
							className="self-end"
							aria-label="link to project two"
						>
							<BsFillArrowUpRightCircleFill className=" rounded-full text-5xl text-softBlue bg-white" />
						</Link>
					</div>
				</div>

				<div>
					<Image src={placeholder} alt="project 01" className="w-full" />
					<div className="flex items-center justify-between mt-12">
						<div>
							<h4 className="text-lg font-semibold">
								Project name/ description
							</h4>
							<p className="mt-4 text-gray">Tech Used</p>
						</div>
						<Link
							href="#"
							target="_blank"
							className="self-end"
							aria-label="link to project three"
						>
							<BsFillArrowUpRightCircleFill className=" rounded-full text-5xl text-softBlue bg-white" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Projects;
