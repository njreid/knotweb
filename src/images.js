import deepai from 'deepai'

// console.log(deepai)

deepai.setApiKey('5c30778a-c607-4940-bc2c-4045915d2d05')

var result = await deepai.callStandardApi('stable-diffusion', {
	text: 'A green robot on a martian desert'
})

console.log(result)
