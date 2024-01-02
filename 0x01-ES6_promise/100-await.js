import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const upload = uploadPhoto();
  const create = createUser();
  try {
    const resultArray = await Promise.all([upload, create]);
    return {
      photo: resultArray[0],
      user: resultArray[1],
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
