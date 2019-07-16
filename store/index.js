export const state = () => ( {
  isLoading: true
})

export const mutations = {
  changeLoadingState(state) {
    state.isLoading = !state.isLoading
  }
}
