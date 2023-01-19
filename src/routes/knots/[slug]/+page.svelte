<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: {
		title: string
		content: string
	}
</script>

<template lang="pug">
h1 {data.title}
.content {@html data.content}
</template>
