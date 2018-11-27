const axios = require('axios');

const { version } = require('../package.json');
const Anime = require('./Anime');
const Manga = require('./Manga');
const User = require('./User');
const Character = require('./Character');

class Kitsu {
	constructor() {
		this._userAgent = `kawaii-kitsune/v${version} - (npmjs.com/package/kawaii-kitsune)`;
		this._options = {
			headers: {
				'User-Agent': this._userAgent,
				'Accept': 'application/vnd.api+json',
				'Content-Type': 'application/vnd.api+json'
			}
		};
	}

	searchAnime(search, offset = 0) {
		return new Promise((resolve, reject) => {
			return axios.get(`https://kitsu.io/api/edge/anime?filter[text]="${search}"&page[offset]=${offset}`, this._options)
				.then((res) => resolve(res.data.data.map((moreData) => new Anime(moreData))))
				.catch((err) => reject(new Error(`Couldn't fetch the api: ${err}`)));
		});
	}

	getAnime(id) {
		return new Promise((resolve, reject) => {
			return axios.get(`https://kitsu.io/api/edge/anime/${id}`, this._options)
				.then((res) => resolve(new Anime(res.data.data)))
				.catch((err) => reject(new Error(`Couldn't fetch the api: ${err}`)));
		});
	}

	searchManga(search, offset = 0) {
		return new Promise((resolve, reject) => {
			return axios.get(`https://kitsu.io/api/edge/manga?filter[text]="${search}"&page[offset]=${offset}`, this._options)
				.then((res) => resolve(res.data.data.map((moreData) => new Manga(moreData))))
				.catch((err) => reject(new Error(`Couldn't fetch the api: ${err}`)));
		});
	}

	getManga(id) {
		return new Promise((resolve, reject) => {
			return axios.get(`https://kitsu.io/api/edge/manga/${id}`, this._options)
				.then((res) => resolve(new Manga(res.data.data)))
				.catch((err) => reject(new Error(`Couldn't fetch the api: ${err}`)));
		});
	}

	searchUser(search) {
		return new Promise((resolve, reject) => {
			return axios.get(`https://kitsu.io/api/edge/users/?filter[name]="${search}"`, this._options)
				.then((res) => resolve(res.data.data.map((moreData) => new User(moreData))))
				.catch((err) => reject(new Error(`Couldn't fetch the api: ${err}`)));
		});
	}

	getUser(id) {
		return new Promise((resolve, reject) => {
			return axios.get(`https://kitsu.io/api/edge/users/${id}`, this._options)
				.then((res) => resolve(new User(res.data.data)))
				.catch((err) => reject(new Error(`Couldn't fetch the api: ${err}`)));
		});
	}

	searchCharacter(search) {
		return new Promise((resolve, reject) => {
			return axios.get(`https://kitsu.io/api/edge/characters/?filter[name]="${search}"`, this._options)
				.then((res) => resolve(res.data.data.map((moreData) => new Character(moreData))))
				.catch((err) => reject(new Error(`Couldn't fetch the api: ${err}`)));
		});
	}

	getCharacter(id) {
		return new Promise((resolve, reject) => {
			return axios.get(`https://kitsu.io/api/edge/characters/${id}`, this._options)
				.then((res) => resolve(new Character(res.data.data)))
				.catch((err) => reject(new Error(`Couldn't fetch the api: ${err}`)));
		});
	}
}

module.exports = Kitsu;
