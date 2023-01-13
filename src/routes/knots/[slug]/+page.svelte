<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data
</script>

<template lang="pug">

h1 {data.product.title}
p {@html data.product.content}


</template>
