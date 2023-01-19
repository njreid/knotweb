<script lang="ts">
	import TestComponent from '$lib/TestComponent.svelte'
	//@ts-ignore
	import Bowline from '$lib/data/bowline.md'
</script>

<template lang="pug">

.test
	TestComponent()
	Bowline()

</template>
