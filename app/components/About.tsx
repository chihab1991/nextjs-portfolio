import Link from "next/link";

const About = () => {
	return (
		<section id="about" className="text-center px-6 py-20 container mx-auto">
			<h1 className="text-2xl font-bold ">About Me</h1>
			<h4 className="text-lg ">
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-softBlue to-white">
					Get to know me
				</span>
			</h4>
			<p className="pt-12 leading-8">
				Hello! I’m a passionate React & Next.js Web Developer based in Algeria.
				With a background in electrical engineering and a deep love for coding,
				I’ve transitioned into web development to create clean, efficient, and
				user-centric web applications. I specialize in building dynamic and
				responsive websites using JavaScript, TypeScript, and modern frameworks
				like React and Next.js.
			</p>
			<p className="pt-12 leading-8">
				I’m skilled in crafting intuitive front-end interfaces with Tailwind CSS
				and developing robust back-end solutions using Node.js and Express.js.
				My expertise extends to working with MongoDB, ensuring seamless data
				management for full-stack applications.
			</p>
			<p className="pt-12 leading-8">
				Currently, I’m also teaching middle school, balancing both my passion
				for education and web development. I’m on a journey to expand my
				freelance work and bring impactful digital solutions to clients
				globally.
			</p>
			<p className="pt-12 leading-8">
				Feel free to explore my portfolio and reach out for collaboration
				opportunities. Let’s create something amazing together!
			</p>
		</section>
	);
};
export default About;
