import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Chergui Chihab Iddine | Web Developer",
	description:
		"Portfolio of Chergui Chihab Iddine, a passionate web developer specializing in JavaScript, React, and Next.js. Discover projects, skills, and insights in modern web development with a focus on clean, responsive design and seamless user experiences.",
	keywords: [
		"Web Developer",
		"React Developer",
		"Next.js",
		"JavaScript",
		"TypeScript",
		"Frontend Developer",
		"Fullstack Developer",
		"Portfolio",
		"Chergui Chihab Iddine",
	],
	authors: [{ name: "Chergui Chihab Iddine" }],
	creator: "Chergui Chihab Iddine",
	openGraph: {
		title: "Chergui Chihab Iddine | Web Developer",
		description:
			"Portfolio of Chergui Chihab Iddine, a passionate web developer specializing in JavaScript, React, and Next.js. Discover projects, skills, and insights in modern web development with a focus on clean, responsive design and seamless user experiences.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-white`}
			>
				<Header />
				{children}
				<Toaster position="top-center" richColors />
				<Footer />
			</body>
		</html>
	);
}
