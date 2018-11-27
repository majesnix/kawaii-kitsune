class Character {
  constructor(data) {
    this.id = data.id;
    this.type = data.type;
    this.slug = data.attributes.slug;
    this.name = data.attributes.name;
    this.malId = data.attributes.malId;
    this.description = data.attributes.description;
    this.image = {
      original: data.attributes.image ? data.attributes.image.original : null
    };
  }

  get url() {
    return `https://kitsu.io/characters/${this.id}/`;
  }
}

module.exports = Character;
