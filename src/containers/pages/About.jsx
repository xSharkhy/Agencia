import Clients from "components/about/Clients"
import Features from "components/about/Features"
import Header from "components/about/Header"
import Images from "components/about/Images"
import Team from "components/about/Team"
import TestStats from "components/about/TestStats"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

function About() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<Layout>
			<Helmet>
				<title>IES Serpis | Sobre Nosotros</title>
				<meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
				<meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
				<meta name="robots" content='all' />
				<link rel="canonical" href="https://www.iesserpis.com/" />
				<meta name="author" content='IES Serpis' />
				<meta name="publisher" content='IES Serpis' />

				{/* Social Media Tags */}
				<meta property="og:title" content='IES Serpis | Software Agency' />
				<meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
				<meta property="og:url" content="https://www.iesserpis.com/" />
				<meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

				<meta name="twitter:title" content='IES Serpis | Software Agency' />
				<meta
					name="twitter:description"
					content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
				/>
				<meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
				<meta name="twitter:card" content="summary_large_image" />
			</Helmet>

			<Navbar />
			<div className="pt-28">
				<Header />
				<TestStats />
				<Images />
				<Clients />
				<div className="bg-white">
					<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
							<div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
								<img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
							</div>
							<div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
								<img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
							</div>
							<div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
								<img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
							</div>
							<div className="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
								<img
									className="h-12"
									src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
									alt="Transistor"
								/>
							</div>
							<div className="flex justify-center col-span-2 md:col-span-3 lg:col-span-1">
								<img
									className="h-12"
									src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
									alt="Workcation"
								/>
							</div>
						</div>
					</div>
				</div>
				<Features />
				<Team />
				<div className="bg-white">
					<div className="max-w-full px-4 py-12 mx-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							<span className="block">Ready to dive in?</span>
							<span className="block text-indigo-600">Start your free trial today.</span>
						</h2>
						<div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<a
									href="#"
									className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
								>
									Get started
								</a>
							</div>
							<div className="inline-flex ml-3 rounded-md shadow">
								<a
									href="#"
									className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50"
								>
									Learn more
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	)
}
export default About