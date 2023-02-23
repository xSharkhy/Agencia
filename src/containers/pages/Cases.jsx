import CasesList from "components/cases/CasesList"
import Header from "components/cases/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

function Cases() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<Layout>
			<Helmet>
				<title>IES Serpis | Casos</title>
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
				<CasesList />
			</div>
			<Footer />
		</Layout>
	)
}
export default Cases