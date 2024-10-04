import { User } from '../services/UserService.ts';

/**
 * Creates a profile HTML element for display.
 * @param {Object} user The user information
 * @param {String} user.id The unique id of the user.  
 * @param {String} user.lastName The last name of the user.  
 * @param {String} user.firstName The first name of the user.  
 * @param {String} user.email The email address of the user 
 * @param {String} user.photo The url of the photo for the user.
 * @param {String} user.title The title of the user.  
 * @param {Object} user.socialMedia The social media identifiers.
 * @param {Array.<String>} user.followers The count of the number of followers.  
 * @returns {HTMLElement} The HTML element to be rendered.
 */
export default function Profile(user : User) {
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="profile card">
      <div class="profile-action">
        <i class="bi bi-x text-muted js-profile-delete"></i>
      </div>
      <div class="card-body text-center">
        <div class="mt-3 mb-4">
          <img src="${ user.photo }" class="rounded-circle img-fluid" style="width: 100px;" />
        </div>
        <h4 class="mb-2">${ user.lastName }, ${ user.firstName }</h4>
        <p class="text-muted mb-4">@${ user.title } <span class="mx-2">|</span> <ahref="#!">${ user.email }</a></p>
        <div class="mb-4 pb-2">
          ${
            user.socialMedia.map((socialMedia) => {
              return `
                <button data-${ socialMedia.type }="${ socialMedia.value }" type="button" class="btn btn-outline-primary btn-floating">
                  <i class="bi bi-${ socialMedia.type }"></i>
                </button>
              `;
            }).join("")
           }
        </div>
        <button type="button" class="btn btn-primary position-relative btn-rounded btn-lg js-profile-follow">
          Follow Me 
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${ user.followers.length } <span class="visually-hidden">followers</span>
          </span>
        </button>
      </div>
    </div>
  `;
  const element = template.content.firstElementChild as HTMLElement;
  element.dataset.user = JSON.stringify(user);
  return element;
}

