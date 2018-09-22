const getDefaultState = () => {
  return {
    test: null
  };
};

const state = getDefaultState();

const mutations = {
};

const actions = {
};

const getters = {
};

const DASHBOARD_STORE = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};

export default DASHBOARD_STORE;
