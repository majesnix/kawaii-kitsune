With this repo im trying to fix the typings and may update some things, original Readme below

# kawaii-kitsune

## Features

- Search anime by name or id
- Search manga by name or id
- Search users by name or id
- Search characters by name or id

## Install

```bash
npm install --save kawaii-kitsune
```

## Usage

#### Normal usage:

```js
const Kitsu = require('kawaii-kitsune');
const kitsu = new Kitsu();

kitsu.searchAnime('fate/apocrypha')
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
```

#### TypeScript:

```ts
import { Kitsu } from 'kawaii-kitsune';
const kitsu = new Kitsu();

kitsu.searchAnime('fate/apocrypha')
  .then((result: any) => console.log(result))
  .catch((err: any) => console.error(err));
```

## Docs

#### kitsu.searchAnime(anime, offset)
| Parameter | Type          | Optional | Default | Description |
|-----------|:-------------:|:--------:|:-------:|-------------|
| anime     | string        |          | *none*  | The anime you want to search
| offset    | number        |    X     | 0       | Offset for pagination

#### kitsu.searchManga(manga, offset)
| Parameter | Type          | Optional | Default | Description |
|-----------|:-------------:|:--------:|:-------:|-------------|
| manga     | string        |          | *none*  | The manga you want to search
| offset    | number        |    X     | 0       | Offset for pagination

#### kitsu.getAnime(animeID)
| Parameter | Type          | Optional | Default | Description |
|-----------|:-------------:|:--------:|:-------:|-------------|
| animeID   | string        |          | *none*  | The anime you want to search

#### kitsu.getManga(mangaID)
| Parameter | Type          | Optional | Default | Description |
|-----------|:-------------:|:--------:|:-------:|-------------|
| mangaID   | string        |          | *none*  | The manga you want to search

#### kitsu.searchUsers(userName)
| Parameter | Type          | Optional | Default | Description |
|-----------|:-------------:|:--------:|:-------:|-------------|
| userName  | string        |          | *none*  | The name of the user you want to search

#### kitsu.getUsers(userID)
| Parameter | Type          | Optional | Default | Description |
|-----------|:-------------:|:--------:|:-------:|-------------|
| userID    | string        |          | *none*  | The user you want to search

#### kitsu.searchCharacter(characterName)
| Parameter     | Type          | Optional | Default | Description |
|---------------|:-------------:|:--------:|:-------:|-------------|
| characterName | string        |          | *none*  | The name of the character you want to search

#### kitsu.getCharacter(characterID)
| Parameter    | Type          | Optional | Default | Description |
|--------------|:-------------:|:--------:|:-------:|-------------|
| characterID  | string        |          | *none*  | The character you want to search

## TODO
- Search for producers
- Search for user stats