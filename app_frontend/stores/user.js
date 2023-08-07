import { defineStore } from "pinia"

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {
      isAuth: false,
      email: null,
      token: null,
    },
  }),
  getters: {
    upperCaseName() {
      return this.name.toUpperCase()
    },
  },
  actions: {
    initStore() {
      this.isAuth = false
      if (localStorage.getItem("user.token")) {
        this.isAuth = true
        this.token = localStorage.getItem("user.token")
        this.email = localStorage.getItem("user.email")
      }
    },
    setToken(token, email) {
      this.token = token
      this.email = email
      this.isAuth = true
      localStorage.setItem("user.token", token)
      localStorage.setItem("user.email", email)
    },
    removeToken() {
      this.token = null
      this.email = null
      this.isAuth = false
      localStorage.setItem("user.token", "")
      localStorage.setItem("user.email", "")
    },
  },
})
