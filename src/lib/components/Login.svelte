<div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
	<h1 class="text-2xl font-bold text-center">Login</h1>
	<form class="space-y-4" action="#">
		<div>
			<label for="email" class="block mb-2 text-sm font-medium">Your email</label>
			<input
				type="email"
				name="email"
				id="email"
				class="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				placeholder="you@example.com"
			/>
		</div>
		<div>
			<label for="password" class="block mb-2 text-sm font-medium">Your password</label>
			<input
				type="password"
				name="password"
				id="password"
				class="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				placeholder="••••••••"
			/>
		</div>
		<button
			type="submit"
			class="w-full px-3 py-2 text-white bg-indigo-500 rounded-md focus:outline-none focus:bg-indigo-600"
			>Sign in</button
		>
	</form>
</div>
