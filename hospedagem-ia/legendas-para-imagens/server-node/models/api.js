const { Translator } = require("./Translator");

async function translate(englishText){
    return Translator.translate(englishText)
}

exports.translate = translate;