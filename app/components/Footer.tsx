import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
const Footer = () => {
	return (
		<footer className="text-center text-gray  px-6 py-10 border-t-2 border-darkGrayishBlue/[.35] ">
			<div className="container mx-auto md:flex md:flex-row-reverse md:justify-between md:items-center">
				<div className="flex justify-center items-center">
					<Link
						href="https://www.linkedin.com/in/chihab-iddine-elhocine-chergui-885883210/"
						className="inline-block mr-5 text-xl p-1.5 rounded-full border border-gray/60 hover:border-softBlue hover:text-softBlue duration-300"
						aria-label="Link to Linked in account"
					>
						<FaLinkedinIn />
					</Link>

					<Link
						href="https://github.com/chihab1991"
						className="inline-block mr-5 text-xl p-1.5 rounded-full border border-gray/60 hover:border-softBlue hover:text-softBlue duration-300"
						aria-label="Link to github account"
					>
						<FaGithub />
					</Link>
				</div>
				<p className="mt-6 md:mt-0 text-md">
					&copy; 2024 Chergui Chihab Iddine
				</p>
			</div>
		</footer>
	);
};
export default Footer;
