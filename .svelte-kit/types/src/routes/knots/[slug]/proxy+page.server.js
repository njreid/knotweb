// @ts-nocheck
// import { PWD } from '$env/static/private'
import { readFileSync } from 'fs'

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params }) {
	// @ts-ignore
	// const filename = '../${params.slug.toLowerCase().replace(" ", "")}.md'
	// // console.log(PWD)
	// console.log(filename)
	// let filedata = ''
	// try {
	// 	filedata = await import(filename
	// } catch (e) {
	// 	filedata = 'Not found.'
	// }
	// console.log(filedata)
	// return {
	// 	product: {
	// 		title: params.slug,
	// 		content: filedata
	// 	}
	// }'

	let title = params.slug
	let content = '<p>Not found.</p>'
	try {
		const knotDetail = await import(`../${params.slug}.md`)
		content = knotDetail.default.render().html
	} catch {}
	return {
		title,
		content
	}
}
