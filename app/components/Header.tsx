"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleClick = () => {
		setShowMenu(!showMenu);
	};
	return (
		<>
			<header className="fixed top-0 left-0 bg-dark w-screen z-20 py-4 border-b-2 border-darkGrayishBlue/[.35]">
				<nav className="container mx-auto flex justify-between items-center px-4 md:px-6">
					<div>
						<Image
							src="/img/logo.png"
							alt="logo image"
							width="50"
							height="50"
						/>
					</div>
					<div className="hidden md:block">
						{/* <Link href="#home" className="mr-4 ">
						Home
						</Link> */}

						<Link
							href="#about"
							className="md:mr-8 lg:mr-16 text-xl hover:text-softBlue duration-500"
						>
							About
						</Link>

						<Link
							href="#projects"
							className="md:mr-8 lg:mr-16 text-xl hover:text-softBlue duration-500"
						>
							Projects
						</Link>

						<Link
							href="#services"
							className="md:mr-8 lg:mr-16 text-xl hover:text-softBlue duration-500"
						>
							Services
						</Link>

						<Link
							href="#resume"
							className="text-xl hover:text-softBlue duration-500"
						>
							Resume
						</Link>
					</div>

					<div>
						<Link href="#contact-me" className="hidden md:inline-block">
							Contact Me
						</Link>
					</div>
					<div className="md:hidden">
						<button onClick={handleClick}>
							{showMenu ? (
								<FaX className="text-2xl" />
							) : (
								<FaBarsStaggered className="text-2xl" />
							)}
						</button>
					</div>

					{/* TODO light / dark theme */}
					{/* <div>light / dark theme</div> */}
				</nav>
			</header>
			{showMenu && (
				<div
					className={`md:hidden flex flex-col text-center px-4 fixed top-20 left-0 w-screen bg-dark top-0 ${
						showMenu ? "animate-fadeInDown" : "animate-fadeOutUp"
					}`}
				>
					{/* <Link href="#home" className="mr-4 ">
						Home
						</Link> */}

					<Link
						href="#about"
						className="text-xl hover:text-softBlue duration-500 py-3 border-b border-darkGrayishBlue/[.35]"
						onClick={handleClick}
					>
						About
					</Link>

					<Link
						href="#projects"
						className="text-xl hover:text-softBlue duration-500 py-3 border-b border-darkGrayishBlue/[.35]"
						onClick={handleClick}
					>
						Projects
					</Link>

					<Link
						href="#services"
						className="text-xl hover:text-softBlue duration-500 py-3 border-b border-darkGrayishBlue/[.35] "
						onClick={handleClick}
					>
						Services
					</Link>
					<Link
						href="#contact-me"
						className="text-xl hover:text-softBlue duration-500 py-3 border-b border-darkGrayishBlue/[.35]"
						onClick={handleClick}
					>
						Contact Me
					</Link>
				</div>
			)}
		</>
	);
};
export default Header;
