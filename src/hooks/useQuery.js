import { API_URL } from "../config";

// SOCIAL
export async function getSocial() {
  const response = await fetch(`${API_URL}/api/social`);

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message, data);
  }
  return data;
}

export async function newSocial(socialData) {
  const response = await fetch(`${API_URL}/api/addSocial`, {
    method: "POST",
    body: socialData,
    /*  headers: {
      'content-type': 'multipart/form-data'
    }  */
  });

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message, data);
  }
  return data;
}

// SONGS
export async function getSongs() {
  const response = await fetch(`${API_URL}/api/songs`);

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message, data);
  }
  return data;
}

export async function newSong(songData) {
  const response = await fetch(`${API_URL}/api/addSong`, {
    method: "POST",
    body: songData,
  });

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message, data);
  }
  return data;
}

// PHOTOS
export async function getPhotos() {
  const response = await fetch(`${API_URL}/api/photos`);

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message, data);
  }
  return data;
}

export async function newPhoto(photoData) {
  const response = await fetch(`${API_URL}/api/addPhoto`, {
    method: "POST",
    body: photoData,
  });

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message, data);
  }
  return data;
}

// ABOUT
export async function getAbout() {
  const response = await fetch(`${API_URL}/api/about`);

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message, data);
  }
  return data;
}

export async function newAbout(textData) {
  const response = await fetch(`${API_URL}/api/addAbout`, {
    method: "POST",
    body: JSON.stringify(textData),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message, data);
  }
  return data;
  
}
