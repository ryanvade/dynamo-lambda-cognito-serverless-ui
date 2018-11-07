/// <reference types="aws-sdk" />
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faCheck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./styles/main.scss";
import Config from "./config";
import Amplify, * as AmplifyModules from "aws-amplify";
import { Auth } from "aws-amplify";

library.add(faCheck);
library.add(faEnvelope);
library.add(faUserCircle);

dom.watch();

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: Config.COGNITO_REGION,
    userPoolId: Config.COGNITO_USER_POOL_ID,
    identityPoolId: Config.COGNITO_IDENTITY_POOL_ID,
    userPoolWebClientId: Config.COGNITO_APP_CLIENT_ID
  },
  Storage: {
    region: Config.S3_REGION,
    bucket: Config.S3_BUCKET,
    identityPoolId: Config.COGNITO_IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "tasks",
        endpoint: Config.APIGATEWAY_URL,
        region: Config.APIGATEWAY_REGION,
      },
    ]
  }
});



Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentUserInfo().then((resp) => {
      if (!resp) {
        next({
          name: "login",
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    }).catch((error) => { console.error(error); next(); });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
