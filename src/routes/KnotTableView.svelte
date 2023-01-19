<script lang="ts">
	import { knots } from '../stores'
</script>

<template lang="pug">

.knots
	ul
		+each('$knots as knot')
			li
				a(href="/knots/{knot.name.toLowerCase().replace(' ', '')}")
					.knot.card.info
						p.summary { knot.name.toUpperCase() }
						.description
							p { knot.description }
						p.tags
							+each('knot.use_category.split(",") as tag')
								.tag {tag.toUpperCase()}

</template>

<style lang="stylus">

ul
	padding 0

li
	list-style none
	margin 1px

li > a
	text-decoration none
	color white

.knots > ul
	display grid
	grid-template-columns repeat(auto-fit, minmax(200px, 1fr))
	grid-gap 0rem 1.5rem

.card:hover
	border 1px solid yellow

.description > p
	overflow hidden
	text-overflow fade
	max-height 4rem
	font-size 0.9rem

.tags
	display flex
	flex-flow wrap
	gap 3px

.tag
	font-size 0.55em
	font-weight bold
	background-color #3151b3
	padding 2px 6px
	border-radius 4px

.summary
	font-size 0.8em
	padding-bottom 4px

</style>
