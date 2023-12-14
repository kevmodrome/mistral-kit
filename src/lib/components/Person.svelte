<script>
	import Avatar from './Avatar.svelte';
</script>

<div class="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto">
	<div class="flex items-center space-x-4">
		<Avatar />
		<div>
			<h2 class="text-xl font-semibold text-gray-800">John Doe</h2>
			<p class="text-gray-600">Web Developer</p>
		</div>
	</div>
	<p class="mt-4 text-gray-600">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum
		ultrices. Suspendisse potenti. Sed commodo, magna ut commodo egestas, augue ipsum lacinia nisi,
		sit amet consectetur sapien libero eget dui.
	</p>
	<div class="mt-4 flex items-center space-x-4">
		<a href="#" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Profile</a>
		<a href="#" class="text-gray-600 hover:text-gray-800">Message</a>
	</div>
</div>
