const API_URL = {
  USER: "https://bootcamp-api.codeit.kr/api/users/1",
  LINK: "https://bootcamp-api.codeit.kr/api/users/1/links",
  FOLDER_LIST: "https://bootcamp-api.codeit.kr/api/users/1/folders",
  SHARED: "https://bootcamp-api.codeit.kr/api/sample/folder",
  USER_CHECK: "https://bootcamp-api.codeit.kr/api/check-email",
  SIGN_IN: "https://bootcamp-api.codeit.kr/api/sign-in",
};

export async function getUser() {
  const response = await fetch(API_URL.USER);
  const body = await response.json();
  return body;
}

export async function getLink(folderId: string | null) {
  if (!folderId) {
    const response = await fetch(API_URL.LINK);
    const body = await response.json();
    return body;
  }
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}`);
  const body = await response.json();
  return body;
}

export async function getFolderList() {
  const response = await fetch(API_URL.FOLDER_LIST);
  const body = await response.json();
  return body;
}

export async function getShared() {
  const response = await fetch(API_URL.SHARED);
  const body = await response.json();
  return body;
}

export async function duplicationCheck(email: string) {
  const response = await fetch(API_URL.USER_CHECK, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });

  if (response.ok === false) {
    throw new Error("duplication");
  }

  return response;
}

export async function signIn(email: string, password: string) {
  const response = await fetch(API_URL.SIGN_IN, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password}),
  });

  if (response.ok === false) {
    throw new Error("login failed");
  }

  return response;
}
