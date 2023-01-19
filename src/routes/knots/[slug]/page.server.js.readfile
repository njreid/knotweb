// import { PWD } from '$env/static/private'
import { readFileSync } from 'fs'
import { marked } from 'marked'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const filename = 'src/lib/data/' + params.slug.toLowerCase().replace(' ', '') + '.md'
	// console.log(PWD)
	console.log(filename)
	let filedata = ''
	try {
		filedata = await readFileSync(filename).toString()
		filedata = marked.parse(filedata)
	} catch (e) {
		filedata = 'Not found.'
	}
	console.log(filedata)
	return {
		product: {
			title: params.slug,
			content: filedata
		}
	}
}
