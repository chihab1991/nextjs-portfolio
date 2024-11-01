import Image from "next/image";
import Link from "next/link";
const Hero = () => {
	return (
		<section id="hero" className="text-center px-6 py-20 container mx-auto ">

			<Image
				src="/img/my-photo.jpeg"
				width={140}
				height={140}
				alt="chergui chihab iddine"
				className="mt-4 mx-auto rounded-full"
			/>
			<h1 className="text-2xl font-bold  mt-6">Chergui Chihab Iddine</h1>
			<h3 className="text-xl font-semibold mt-6 ">
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-softBlue to-white">
					Web Developer
				</span>
			</h3>
			<p className="leading-7 mt-6 md:leading-8">
				Hi, I&apos;m Chergui Chihab Iddine, a dedicated React & Next.js Web Developer
				based in Algeria. With a passion for coding and a commitment to
				excellence, I specialize in crafting dynamic, user-friendly web
				applications that prioritize both performance and aesthetics. Explore my
				work, discover my skills, and let&apos;s connect to turn your ideas into
				reality!
			</p>
			<Link
				href="#contact-me"
				className=" inline-block border-2 rounded-full font-semibold border-softBlue px-10 py-3 mt-6 hover:text-softBlue duration-300"
			>
				Contact Me
			</Link>
		</section>
	);
};
export default Hero;
