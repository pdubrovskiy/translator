import debounce from "../utils/debounce/debounce";

const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '9b7b08a5dbmsh724221038fc0cc2p136d71jsn07099f4ad942',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    }
};


const TranslationAPI = {
    async translate(text) {
        if (text === '') {
            return '';
        } else {
            options.body = new URLSearchParams({
                source_language: 'ru',
                target_language: 'en',
                text: text
            })
            const response = await fetch(url, options);
            const result = JSON.parse(await response.text());
            return result.data.translatedText;
        }
    }
}

export default TranslationAPI;