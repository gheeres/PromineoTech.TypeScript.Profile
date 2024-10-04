import { getRandomInt  } from "../utilities.ts";

type SocialMedia = {
  type: string,
  value: string,
};
export type User = {
  id: string,
  lastName: string,
  firstName: string,
  email: string,
  photo: string,
  title: string,
  socialMedia: Array<SocialMedia>,
  followers: Array<string>,
};
const baseUrl = 'https://randomuser.me/api';

export default class UserService {
  url: string;

  constructor(url?: string) {
    this.url = url || baseUrl;
  }

  /**
   * Converts a JSON response into a user object.
   * @param {String} json The JSON response.
   * @returns {{id: String, lastName: String, firstName: String, email: String, photo: String, title: String, socialMedia: Array, followers: Array}} The user information.
   */
  #toUser(json: any) {
    return {
      id : json.id.value,
      lastName : json.name?.last,
      firstName : json.name?.first,
      email : json.email,
      photo : json.picture.medium,
      title : this.#getRandomTitle(json),
      socialMedia : this.#getRandomSocialMedia(json),
      followers: [ ],
    };
  }

  /**
   * Randomly generated social media links.
   * @param {String} json The JSON response.
   * @returns {Array.<{type: String, value: String}>} An array of social media data.
   */  
  #getRandomSocialMedia(json: any) {
    return [
      (getRandomInt(2) === 1) ? { type: 'facebook', value: json.login?.username } : null,
      (getRandomInt(2) === 1) ? { type: 'twitter', value: `#${ json.login?.username }` } : null,
      (getRandomInt(2) === 1) ? { type: 'skype', value: json.phone } : null,
    ].filter(f => f != null);
  }
   
  /**
   * Randomly generate or retrieve a job title for a user.
   * @param {String} _json The JSON response.
   * @returns {String} A random title.
   */
  #getRandomTitle(_json: any) {
    const titles = [
      'Marketing Coordinator',
      'Medical Assistant',
      'Web Designer',
      'Dog Trainer',
      'President of Sales',
      'Nursing Assistant',
      'Project Manager',
      'Librarian',
      'Project Manager',
      'Account Executive',
    ];
    return titles[getRandomInt(titles.length)];
  }

  /**
   * Retrieves a random user from the external endpoint.
   * @returns {{id: String, lastName: String, firstName: String, email: String, photo: String, title: String, socialMedia: Array, followers: Array}} The user information.
   */
  async get() {
    const url = `${ baseUrl }`;
    console.debug(`Requesting data from url: ${ url }`);
    const response = await fetch(url);
    if (response.status === 200) {
      const json = await response.json();
      return this.#toUser(json.results[0]);  
    }

    console.error(`Failed to retrieve data from url: ${ url }. Status(${ response.status }): ${ response.text }`);
    return null;
  }  
}
