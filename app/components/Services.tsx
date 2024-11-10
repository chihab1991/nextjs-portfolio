import { ImSun } from "react-icons/im";

const Services = () => {
	return (
		<section id="services" className="text-center px-6 py-20 container mx-auto">
			<h1 className="text-2xl font-bold ">What I Do</h1>
			<h2 className="text-lg ">
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-softBlue to-white">
					My Services
				</span>
			</h2>
			<div className="mt-16 grid grid-column-1 text-left gap-8">
				<div className="py-8 px-6 bg-charlestonGreen rounded-lg  shadow shadow-gray/5 border border-veryLightGray/5">
					<div className=" inline-block p-4 bg-white text-xl text-dark rounded-md">
						<ImSun />
					</div>
					<h4 className="mt-4 text-lg font-semibold">frontend</h4>
					<p className="mt-4 text-lightGray leading-7">
						JOB DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Temporibus cumque consequatur omnis adipisci repellendus
						aliquid.
					</p>
				</div>

				<div className="py-8 px-6 bg-charlestonGreen rounded-lg  shadow shadow-gray/5 border border-veryLightGray/5">
					<div className=" inline-block p-4 bg-white text-xl text-dark rounded-md">
						<ImSun />
					</div>
					<h4 className="mt-4 text-lg font-semibold">frontend</h4>
					<p className="mt-4 text-lightGray leading-7">
						JOB DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Temporibus cumque consequatur omnis adipisci repellendus
						aliquid.
					</p>
				</div>

				<div className="py-8 px-6 bg-charlestonGreen rounded-lg  shadow shadow-gray/5 border border-veryLightGray/5">
					<div className=" inline-block p-4 bg-white text-xl text-dark rounded-md">
						<ImSun />
					</div>
					<h4 className="mt-4 text-lg font-semibold">frontend</h4>
					<p className="mt-4 text-lightGray leading-7">
						JOB DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Temporibus cumque consequatur omnis adipisci repellendus
						aliquid.
					</p>
				</div>
			</div>
		</section>
	);
};
export default Services;
