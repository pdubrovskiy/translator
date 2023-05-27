import debounce from "../utils/debounce/debounce";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9b7b08a5dbmsh724221038fc0cc2p136d71jsn07099f4ad942',
        'X-RapidAPI-Host': 'wordwise3.p.rapidapi.com'
    }
};

const TranslationAPI = {
    async translate(text) {
        const response = await fetch(`https://wordwise3.p.rapidapi.com/translate?text=${text}&dest_language=en`, options);
        const result = await response.text();
        return result.slice(1, -1);
    }
}

export default TranslationAPI;