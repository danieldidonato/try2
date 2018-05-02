$('.js-modal').on($.modal.BEFORE_OPEN, (e, modal) => {
	setTimeout(() => {
		modal.$elm.find('audio').trigger('play')
	}, 1000);
});




const $giphContainer3 = $('.js-beachGif')
const gifURL3 = 'https://api.giphy.com/v1/gifs/search?q=ocean&api_key=Nlu41GYoEb83vQiekoMQsuciJgIpkEQZ'
$.get(gifURL3, response => {
	const gifs3 = response.data;
	// for (let i = 0; i < gifs.length; i++) {
		console.log(gifs3[1])
		const end = gifs3[0].images.downsized_medium.url;
		$giphContainer3.prepend(`<img src="${end}">`)
		// }
	})



const $giphContainer = $('.js-rainGif')
const gifURL = 'https://api.giphy.com/v1/gifs/search?q=rain&api_key=Nlu41GYoEb83vQiekoMQsuciJgIpkEQZ'
$.get(gifURL, response => {
	const gifs = response.data;
	// for (let i = 0; i < gifs.length; i++) {
		console.log(gifs[1])
		const end = gifs[0].images.downsized_medium.url;
		$giphContainer.prepend(`<img src="${end}">`)
		// }
	})


const $giphContainer1 = $('.js-windGif')
const gifURL1 = 'https://api.giphy.com/v1/gifs/search?q=field%20breeze&api_key=Nlu41GYoEb83vQiekoMQsuciJgIpkEQZ'
$.get(gifURL1, response => {
	const gifs1 = response.data;
	// for (let i = 0; i < gifs.length; i++) {
		console.log(gifs1[1])
		const end = gifs1[1].images.downsized_medium.url;
		$giphContainer1.prepend(`<img src="${end}">`)
		// }
	})


const $giphContainer2 = $('.js-rushingGif')
const gifURL2 = 'https://api.giphy.com/v1/gifs/search?q=nature%20waters&api_key=Nlu41GYoEb83vQiekoMQsuciJgIpkEQZ'
$.get(gifURL2, response => {
	const gifs2 = response.data;
	// for (let i = 0; i < gifs.length; i++) {
		console.log(gifs2[1])
		const end = gifs2[0].images.downsized_medium.url;
		$giphContainer2.prepend(`<img src="${end}">`)
		// }
	})
