import { FaCode, FaServer, FaMobileAlt } from "react-icons/fa";

const Services = () => {
	return (
		<section id="services" className="text-center px-6 py-32 container mx-auto">
			<h1 className="text-2xl font-bold ">What I Do</h1>
			<h2 className="text-lg ">
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-softBlue to-white">
					My Services
				</span>
			</h2>
			<div className="mt-16 grid grid-column-1 text-left gap-8">
				<div className="py-8 px-6 bg-charlestonGreen rounded-lg  shadow shadow-gray/5 border border-veryLightGray/5">
					<div className=" inline-block p-4 bg-white text-xl text-charlestonGreen rounded-md">
						<FaCode />
					</div>
					<h3 className="mt-4 text-lg font-semibold">Frontend Development</h3>
					<p className="mt-4 text-lightGray leading-7">
						I build modern, responsive websites using React and Next.js,
						ensuring a seamless user experience.
					</p>
				</div>

				<div className="py-8 px-6 bg-charlestonGreen rounded-lg  shadow shadow-gray/5 border border-veryLightGray/5">
					<div className=" inline-block p-4 bg-white text-xl text-charlestonGreen rounded-md">
						<FaServer />
					</div>
					<h3 className="mt-4 text-lg font-semibold">Backend Development</h3>
					<p className="mt-4 text-lightGray leading-7">
						I develop scalable backend systems with Node.js and Express,
						creating efficient server-side applications.
					</p>
				</div>

				<div className="py-8 px-6 bg-charlestonGreen rounded-lg  shadow shadow-gray/5 border border-veryLightGray/5">
					<div className=" inline-block p-4 bg-white text-xl text-charlestonGreen rounded-md">
						<FaMobileAlt />
					</div>
					<h3 className="mt-4 text-lg font-semibold">
						Mobile Responsive Design
					</h3>
					<p className="mt-4 text-lightGray leading-7">
						I design and optimize websites for mobile and tablet devices to
						ensure cross-platform compatibility.
					</p>
				</div>
			</div>
		</section>
	);
};
export default Services;
