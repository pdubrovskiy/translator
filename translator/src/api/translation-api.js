const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c147d9e83emsh67a3f877dbe8350p1151e5jsn90e95c3e00af',
		'X-RapidAPI-Host': 'wordwise3.p.rapidapi.com'
	}
};

const TranslationAPI = {
    async translate(text){
        const response = await fetch(`https://wordwise3.p.rapidapi.com/translate?text=${text}&dest_language=en`, options);
        const result = await response.text();
        return result.slice(1, -1);
    }
}

export default TranslationAPI;