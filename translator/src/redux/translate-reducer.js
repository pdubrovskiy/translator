import TranslationAPI from "../api/translation-api";
import debounce from "../utils/debounce/debounce";

const SET_INPUT = 'SET-INPUT';
const SET_TRANSLATION = 'SET-TRANSLATION';

const initialState = {
    inputText: '',
    outputText: '',
}

const translatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT: {
            return {
                ...state,
                inputText: action.data
            }
        }
        case SET_TRANSLATION: {
            return {
                ...state,
                outputText: action.data
            }
        }
        default: {
            return state
        }
    }
}

export const setInput = (text) => {
    return { type: SET_INPUT, data: text };
}

export const setTranslation = (text) => {
    return { type: SET_TRANSLATION, data: text };
}

// export let getTranslation = (text) => async (dispatch) => {
//     let response = await TranslationAPI.translate(text);
//     dispatch(setTranslation(response));
// }

// debounce async redux-thunk

const innerFunction = debounce(async (dispatch, text) => {
    let response = await TranslationAPI.translate(text);
    dispatch(setTranslation(response))
}, 700);

export const getTranslation = (...args) => dispatch => innerFunction(dispatch, ...args);

export default translatorReducer;