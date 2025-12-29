export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    token: null
  }),
  actions: {
    login(userInfo) {
      this.userInfo = userInfo
      this.token = 'mock-token'
    },
    logout() {
      this.userInfo = null
      this.token = null
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.token
  }
})
