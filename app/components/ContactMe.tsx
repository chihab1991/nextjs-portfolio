"use client";

const ContactMe = () => {
	const submitHandler = async (e) => {
		e.preventDefault();
	};
	return (
		<section
			id="contact-me"
			className="text-center px-6 py-20 container mx-auto"
		>
			<h1 className="text-2xl font-bold ">Get In Touch</h1>
			<h4 className="text-lg ">
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-softBlue to-white">
					Lets work together
				</span>
			</h4>

			<form
				onSubmit={submitHandler}
				className="text-left mt-16 md:max-w-2xl md:mx-auto"
			>
				<div>
					<label htmlFor="name" className="block text-lg font-semibold ">
						Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Full name"
						className="w-full bg-dark px-8 py-4 my-4 border border-softBlue rounded-lg focus:outline focus:outline-2 focus:outline-softBlue  "
					/>
				</div>

				<div>
					<label htmlFor="email" className="block  text-lg font-semibold">
						Email
					</label>
					<input
						type="text"
						name="email"
						id="email"
						placeholder="example@gmail.com"
						className="w-full bg-dark px-8 py-4 my-4 border border-softBlue rounded-lg focus:outline focus:outline-2 focus:outline-softBlue"
					/>
				</div>

				<div>
					<label htmlFor="message" className="block  text-lg font-semibold">
						Message
					</label>
					<textarea
						name="message"
						id="message"
						className="w-full h-36 bg-dark px-8 py-4 my-4 border border-softBlue rounded-lg focus:outline focus:outline-2 focus:outline-softBlue leading-7 resize-none"
					></textarea>
				</div>

				<button
					type="submit"
					className="w-full bg-white hover:bg-softBlue duration-300 text-dark font-semibold  px-8 py-4 rounded-md"
				>
					Get in Touch
				</button>
			</form>
		</section>
	);
};
export default ContactMe;
