<script lang="ts">
	import { knots } from '../stores'
</script>

<template lang="pug">

.knots
	+each('$knots as knot')
		.knot.card.info
			p.summary
				a(href="/knots/{knot.name.toLowerCase().replace(' ', '')}") { knot.name.toUpperCase() }
			p { knot.description }
			p.tags
				+each('knot.use_category.split(",") as tag')
					.tag {tag.toUpperCase()}

</template>

<style lang="stylus">

.knots
	display flex
	flex-flow wrap
	gap 20px

.knot
	width 30%

.tags
	display flex
	flex-flow wrap
	gap 3px

.tag
	font-size 0.6em
	font-weight bold
	background-color #a7c31d
	color black
	padding 2px 6px
	border-radius 4px

.summary
	font-size 0.8em
	padding-bottom 4px
	a
		color black
</style>
