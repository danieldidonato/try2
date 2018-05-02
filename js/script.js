$('.js-modal').on($.modal.BEFORE_OPEN, (e, modal) => {
	setTimeout(() => {
		modal.$elm.find('audio').trigger('play')
	}, 1000);
});



const $giphContainer = $('.js-rainGif')
const gifURL = 'http://api.giphy.com/v1/gifs/search?q=rain&api_key=Nlu41GYoEb83vQiekoMQsuciJgIpkEQZ'
$.get(gifURL, response => {
	const gifs = response.data;
	// for (let i = 0; i < gifs.length; i++) {
		console.log(gifs[1])
		const end = gifs[0].images.downsized_medium.url;
		$giphContainer.prepend(`<img src="${end}">`)
		// }
	})


const $giphContainer1 = $('.js-windGif')
const gifURL1 = 'http://api.giphy.com/v1/gifs/search?q=field%20breeze&api_key=Nlu41GYoEb83vQiekoMQsuciJgIpkEQZ'
$.get(gifURL1, response => {
	const gifs = response.data;
	// for (let i = 0; i < gifs.length; i++) {
		console.log(gifs[1])
		const end = gifs[1].images.downsized_medium.url;
		$giphContainer1.prepend(`<img src="${end}">`)
		// }
	})


const $giphContainer2 = $('.js-waterGif')
const gifURL2 = 'http://api.giphy.com/v1/gifs/search?q=rushing%20water&api_key=Nlu41GYoEb83vQiekoMQsuciJgIpkEQZ'
$.get(gifURL2, response => {
	const gifs = response.data;
	// for (let i = 0; i < gifs.length; i++) {
		console.log(gifs[1])
		const end = gifs[0].images.downsized_medium.url;
		$giphContainer2.prepend(`<img src="${end}">`)
		// }
	})


const $giphContainer3 = $('.js-beachGif')
const gifURL3 = 'http://api.giphy.com/v1/gifs/search?q=ocean&api_key=Nlu41GYoEb83vQiekoMQsuciJgIpkEQZ'
$.get(gifURL3, response => {
	const gifs = response.data;
	// for (let i = 0; i < gifs.length; i++) {
		console.log(gifs[1])
		const end = gifs[0].images.downsized_medium.url;
		$giphContainer3.prepend(`<img src="${end}">`)
		// }
	})
