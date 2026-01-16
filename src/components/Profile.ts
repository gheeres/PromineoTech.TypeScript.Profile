import { createHTMLElement } from "../utils/helper.ts";
import { User } from "../types.ts";

export default function Profile(user: User): HTMLElement | null {
  let element = createHTMLElement(`
    <div class="profile card">
      <div class="profile-action">
        <i class="bi bi-x text-muted js-profile-delete"></i>
      </div>
      <div class="card-body text-center">
        <div class="mt-3 mb-4">
          <img src="${ user?.photo }" class="rounded-circle img-fluid" style="width: 100px;">
        </div>
        <h4 class="mb-2">${ user?.firstName } ${ user?.lastName }</h4>
        <p class="text-muted mb-4">${ user?.title } <span class="mx-2">|</span> <a href="mailto:${ user?.email }">${ user?.email }</ahref="#!"></p>
        <div class="mb-4 pb-2">
          <button type="button" class="btn btn-outline-primary btn-floating">
            <i class="bi bi-facebook"></i>
          </button>
          <button type="button" class="btn btn-outline-primary btn-floating">
            <i class="bi bi-twitter"></i>
          </button>
          <button type="button" class="btn btn-outline-primary btn-floating">
            <i class="bi bi-skype"></i>
          </button>
        </div>
        <button type="button" disabled="" class="btn btn-primary position-relative btn-rounded btn-lg js-profile-follow">
          Follow Me 
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0 <span class="visually-hidden">followers</span>
          </span>
        </button>
      </div>
    </div>
  `);
  return element;
}