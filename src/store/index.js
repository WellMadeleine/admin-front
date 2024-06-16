import { createStore } from "vuex";
import { login, getinfo } from "~/api/manager";
import { setToken, removeToken } from "~/composables/auth";

const store = createStore({
  state() {
    return {
      // 用户信息
      user: {},
    };
  },
  mutations: {
    // 记录用户信息
    SET_USERINFO(state, user) {
      // 调用state存储token
      state.user = user;
    },
  },
  actions: {
    // 登录
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        login(username, password)
          .then((res) => {
            // 请求成功后存储token
            setToken(res.token);

            // 上面的new Promise请求成功后,调用resolve方法
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    },
    // 获取当前用户信息
    getinfo({ commit }) {
      return new Promise((resolve, reject) => {
        // 调用getinfo方法
        getinfo()
          .then((res) => {
            // 调用SET_USERINFO方法，存储token
            commit("SET_USERINFO", res);

            // 上面的new Promise请求成功后,调用resolve方法
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    },
    // 退出登录
    logout({ commit }) {
      removeToken();
      commit("SET_USERINFO", {});
    },
  },
});

export default store;
