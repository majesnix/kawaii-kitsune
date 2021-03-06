declare module "kawaii-kitsune" {
  export class Anime {
    public id: string;
    public type: string;
    public slug: string;
    public synopsis: string;
    public titles: {
      english: string;
      romaji: string;
      japanese: string;
      canonical: string;
      abbreviated: string[];
    };
    public averageRating: string;
    public ratingFrequencies: object;
    public userCount: number;
    public favoritesCount: number;
    public startDate: string;
    public endDate: string;
    public popularityRank: number;
    public ratingRank: number;
    public ageRating: string;
    public ageRatingGuide: string;
    public subType: string;
    public posterImage: {
      tiny: string;
      small: string;
      large: string;
      original: string;
      meta: {
        dimensions: object;
      };
    };
    public coverImage: {
      tiny: string;
      small: string;
      large: string;
      original: string;
      meta: {
        dimensions: object;
      };
    };
    public episodeCount: number;
    public episodeLength: number;
    public youtubeVideoId: string;
    public showType: string;
    public nsfw: boolean;

    public readonly url: string;
    public readonly youtubeURL: string;
  }

  export class Manga {
    public id: string;
    public type: string;
    public slug: string;
    public synopsis: string;
    public titles: {
      english: string;
      romaji: string;
      canonical: string;
      abbreviated: string[];
    };
    public averageRating: string;
    public ratingFrequencies: object;
    public userCount: number;
    public favoritesCount: number;
    public startDate: string;
    public endDate: string;
    public popularityRank: number;
    public ratingRank: number;
    public ageRating: string;
    public ageRatingGuide: string;
    public subType: string;
    public posterImage: {
      tiny: string;
      small: string;
      large: string;
      original: string;
      meta: {
        dimensions: object;
      };
    };
    public coverImage: {
      tiny: string;
      small: string;
      large: string;
      original: string;
      meta: {
        dimensions: object;
      };
    };
    public chapterCount: number;
    public volumeCount: number;
    public serialization: string;
    public mangaType: string;

    public readonly url: string;
  }

  export class Drama {
    public id: string;
    public slug: string;
    public synopsis: string;
    public titles: {
      english: string;
      romaji: string;
      canonical: string;
      abbreviated: string[];
    };
    public averageRating: string;
    public ratingFrequencies: object;
    public startDate: string;
    public endDate: string;
    public posterImage: {
      tiny: string;
      small: string;
      large: string;
      original: string;
      meta: {
        dimensions: object;
      };
    };
    public coverImage: {
      tiny: string;
      small: string;
      large: string;
      original: string;
      meta: {
        dimensions: object;
      };
    };
    public dramaType: string;

    public readonly url: string;
  }

  export class User {
    public id: string;
    public name: string;
    public pastNames: string[];
    public about: string;
    public bio: string;
    public aboutFormatted: string;
    public location: string;
    public website: string;
    public waifuOrHusbando: string;
    public toFollow: string;
    public followersCount: string;
    public followingCount: string;
    public createdAt: string;
    public updatedAt: string;
    public onboarded: string;
    public lifeSpentOnAnime: string;
    public birthday: string;
    public gender: string;
    public facebookId: string;
    public commentsCount: string;
    public likesGivenCount: string;
    public likesReceivedCount: string;
    public postsCount: string;
    public ratingsCount: string;
    public avatar: object;
    public coverImage: object;

    public readonly url: string;
  }

  export class Character {
    public id: string;
    public type: string;
    public slug: string;
    public name: string;
    public malId: string;
    public description: string;
    public image: {
      original: string;
    };

    public readonly url: string;
  }

  export class Kitsu {
    public constructor();
    private _userAgent: string;
    private _options: {
      headers: {
        "User-Agent": string;
        Accept: string;
        "Content-Type": string;
      };
    };

    public searchAnime(search: string, offset?: number): Promise<Anime[]>;
    public getAnime(id: string): Promise<Anime>;
    public searchManga(search: string, offset?: number): Promise<Manga[]>;
    public getManga(id: string): Promise<Manga>;
    public searchUser(search: string): Promise<User[]>;
    public getUser(id: string): Promise<User>;
    public searchCharacter(search: string): Promise<Character[]>;
    public getCharacter(id: string): Promise<Character>;
  }
}
