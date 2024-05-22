import axios from "axios";

export class AuthService {
  static verifyCredentials({ email, password }) {
    return new Promise((resolve) =>
      setTimeout(() => {
        return axios
          .post(process.env.REACT_APP_BASE_API_URL + "/auth/login", {
            email: email,
            password: password,
          })
          .then(resolve);
      }, 2000)
    );
  }

  static verifyOTPCode(otpCode) {
    return axios.post(
      process.env.REACT_APP_BASE_API_URL + "/auth/validate-otp",
      { otpCode: otpCode }
    );
  }

  static postFavouriteCategories(categories) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: categories,
        });
      }, 1000);
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

  static recoverPass(email) {
    return axios.post(process.env.REACT_APP_BASE_API_URL + "/auth/recover", {
      email: email,
    });
  }

  static registerUser({ email, firstname, lastname, password }) {
    return axios.post(process.env.REACT_APP_BASE_API_URL + "/auth/sign-up", {
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password,
    });
  }
}
