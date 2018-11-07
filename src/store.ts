import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { profile } from "./profile/index";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0", // a simple property
    },
    modules: {
        profile,
    },
    plugins: [vuexLocal.plugin]
};

export default new Vuex.Store<RootState>(store);
