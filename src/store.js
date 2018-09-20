const getDefaultState = () => {
  return {
    email: null,
    login_attempt_token: null,
    session_id: null
  };
};

const state = getDefaultState();

const mutations = {
};

const actions = {
};

const getters = {
};

const SIGN_STORE = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};

export default SIGN_STORE;
