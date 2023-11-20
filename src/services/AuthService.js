export class AuthService {
  static verifyCredentials(username, password) {
    //  axios.post(URL,{username:username,password:password})
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: "text",
        });
      }, 10000); // Resolves after 1 second (1000 milliseconds)
    });
  }

  static createCredentials(email, firstName, lastName, password) {
    //  axios.post(URL,{username:username,password:password})
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: "text",
        });
      }, 10000); // Resolves after 1 second (1000 milliseconds)
    });
  }

  static verifyOTPCode(code) {
    //  axios.post(URL,{username:username,password:password})
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: "text",
        });
      }, 10000); // Resolves after 1 second (1000 milliseconds)
    });
  }

  static postFavouriteCategories(categories) {
    //  axios.post(URL,{username:username,password:password})
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: categories,
        });
      }, 10000); // Resolves after 1 second (1000 milliseconds)
    });
  }

  static getCategories() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: [
            "Sports",
            "Camera",
            "Photographic",
            "Stories",
            "Books",
            "Contents",
            "Videos",
            "Photos",
            "Stars",
            "Design",
            "Travels",
          ],
        });
      }, 1000);
    });
  }
}
