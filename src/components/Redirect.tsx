import Footer from '@/components/Footer';
import RootLayout from '@/components/Layout';
import Nav from '@/components/Nav';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Code, Divider } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function RedirectPage({ url }: { url: string | URL }) {
	return (
		<RootLayout noFooter={true}>
			<div className="h-screen flex flex-col justify-stretch items-stretch">
				<Nav />
				<main className="bg-base text-white flex-grow flex flex-col justify-center items-center p-8">
					<motion.h1
						className="text-right font-bold text-4xl p-4"
						initial={{
							transform: 'scaleX(-1)'
						}}
						whileInView={{
							transform: 'scaleX(1)'
						}}
					>
						Hi! You are now leaving the woods and entering unknown territory.
					</motion.h1>
					<p className="p-4 text-xl my-8">
						Please leave a trail of breadcrumbs so you can find your way back.
						<Divider className="my-16 text-white" />
						You are going to: <Code>{url.toString()}</Code>
					</p>
					<motion.div
						className="p-1 rounded-2xl bg-clip-border"
						whileHover={{
							scale: 1.125,
							transition: {
								duration: 0.25,
								repeatType: 'reverse'
							},
							backgroundImage:
								'radial-gradient(circle at 50% 50%, #0ff, #0f0, #f0f)'
						}}
						initial={{
							backgroundImage:
								'radial-gradient(circle at 50% 50%, #f0f, #0ff, #0f0)'
						}}
					>
						<Button
							id="redirect-button"
							onPress={() => window.location.assign(url)}
							color="secondary"
							variant="shadow"
							radius="lg"
							endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
							className="bg-gradient-to-tr from-primary to-secondary shadow-xl text-2xl py-6"
						>
							Get redirected
						</Button>
					</motion.div>
				</main>
				<Footer />
			</div>
		</RootLayout>
	);
}
