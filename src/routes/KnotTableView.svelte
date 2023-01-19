<script lang="ts">
	import { knots } from '../stores'
</script>

<template lang="pug">

section.knots
	ul
		+each('$knots as knot')
			li
				a(href="/knots/{knot.name.toLowerCase().replace(' ', '')}")
					.knot.card.info
						p.summary { knot.name.toUpperCase() }
						p.smaller { knot.description }
						p.tags
							+each('knot.use_category.split(",") as tag')
								.tag {tag.toUpperCase()}

</template>

<style lang="stylus">

li
	list-style none

li > a
	text-decoration none
	color white

.knots
	padding 0 1rem

.knots > ul
	display grid
	grid-template-columns repeat(auto-fit, minmax(200px, 1fr))
	grid-gap 1.25rem

.card:hover
	border 1px solid yellow

.knot
	text-overflow ellipsis

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

</style>
