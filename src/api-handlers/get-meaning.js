import axios from "axios";

export async function getMeaning(lang = "en", word = "eng") {
    const response = await axios(
        `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
    );

    return response.data;
}
