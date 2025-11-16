class Translator {
  static translator = null;

  static async getTranslator() {
    if (this.translator === null) {
      const { pipeline } = await import("@huggingface/transformers");

      this.translator = await pipeline(
        "translation",
        "Xenova/nllb-200-distilled-600M",
        { dtype: "q8" }
      );
    }

    return this.translator;
  }

  static translate(englishText) {
    return this.getTranslator().then((translator) =>
      translator(englishText, {
        src_lang: "eng_Latn",
        tgt_lang: "por_Latn",
      })
    );
  }
}

exports.Translator = Translator;
