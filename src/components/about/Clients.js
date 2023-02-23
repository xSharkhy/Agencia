function Clients() {
	return (
		<div className="bg-white">
			<div className="max-w-full px-4 py-12 mx-auto lg:mx-12 sm:px-6 lg:py-16 lg:px-8">
				<div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
					<div>
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Used by the world's most average companies
						</h2>
						<p className="max-w-3xl mt-3 text-lg text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
							scelerisque amet ullamcorper eu enim et fermentum, augue.
						</p>
						<div className="mt-8 sm:flex">
							<div className="rounded-md shadow">
								<a
									href="#"
									className="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
								>
									Create Account
								</a>
							</div>
							<div className="mt-3 sm:mt-0 sm:ml-3">
								<a
									href="#"
									className="flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200"
								>
									Contact Us
								</a>
							</div>
						</div>
					</div>
					<div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
						<div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img
								className="max-h-12"
								src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
								alt="Workcation"
							/>
						</div>
						<div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
						</div>
						<div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
						</div>
						<div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img
								className="max-h-12"
								src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
								alt="Laravel"
							/>
						</div>
						<div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img
								className="max-h-12"
								src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
								alt="StaticKit"
							/>
						</div>
						<div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img
								className="max-h-12"
								src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
								alt="Statamic"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Clients