<script lang="ts">
	export const prerender = true
</script>

<template lang="pug">
	nav
		ul
			li
				a(href="/")
					img(src="/images/logo.png" width="300px" alt="logo")
			li.float-right.sticky
				a(href="/about") About
	.content
		slot
</template>
