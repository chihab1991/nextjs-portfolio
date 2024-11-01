import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
	return (
		<>
			<main className="md:max-w-4xl md:mx-auto ">
				<Hero />
				<About />
				<Services />
				<Projects />
				<ContactMe />
			</main>
		</>
	);
}
