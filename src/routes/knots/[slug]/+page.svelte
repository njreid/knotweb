<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: {
		title: string
		content: string
	}
</script>

<template lang="pug">

.crumbs
	p
		a(href="/") HOME
		| &nbsp >
		| &nbsp {data.title.toUpperCase()}
//- h1 {data.title}
.insert {@html data.content}
</template>
