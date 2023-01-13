// import { PWD } from '$env/static/private'
import { readFileSync } from 'fs'
import { Converter } from 'showdown'
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const filename = 'src/lib/data/' + params.slug.toLowerCase().replace(' ', '') + '.md'
	// console.log(PWD)
	console.log(filename)
	let filedata = ''
	try {
		filedata = await readFileSync(filename).toString()
		let converter = new Converter()
		filedata = converter.makeHtml(filedata)
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
