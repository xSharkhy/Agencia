import { Link } from "react-router-dom"

function CaseCard({ data, index }) {

	return (
		<Link
			to='/cases/id'
			onMouseEnter={() => {
				const title_element = document.getElementById(index)
				title_element.classList.add('text-orange-500')
				const img = document.getElementById(data.id)
				img.classList.add('object-scale-down')
			}}
			onMouseLeave={() => {
				const title_element = document.getElementById(index)
				title_element.classList.remove('text-orange-500')
				const img = document.getElementById(data.id)
				img.classList.remove('object-scale-down')
			}}

			className="flex flex-col overflow-hidden rounded-lg shadow-lg">
			<div className="flex-shrink-0">
				<img id={data.id} className="object-cover w-full transition ease-in-out h-96 duration-400" src={data.imageUrl} alt="" />
			</div>
			<div className="flex flex-col justify-between flex-1 p-6 bg-white">
				<div className="flex-1">
					<p className="text-xl font-medium text-gray-800">
						<a href={data.category.href} className="hover:underline">
							{data.category.name}
						</a>
					</p>
					<a href={data.href} className="block mt-2">
						<p id={index} className="pt-4 pb-6 text-2xl font-semibold text-gray-900 transition ease-in-out lg:text-4xl duration-400">{data.title}</p>
						<p className="mt-3 space-y-2 text-2xl leading-9 text-gray-500">{data.description}</p>
					</a>
				</div>
			</div>
		</Link>
	)
}

export default CaseCard