import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/Login.vue";
import Register from "../views/login/Register.vue";
import Password from "../views/login/Password.vue";
import Wallet from "../views/authentication/wallet/Wallet.vue";
import Walletuistore from "../views/authentication/wallet/Wallet-ui-store.vue";
import Walletuiget from "../views/authentication/wallet/Wallet-ui-get.vue";
import Issuer from "../views/authentication/issuer/Issuer.vue";
import Verifier from "../views/authentication/verifier/Verifier.vue";
import VerifyType from "../views/authentication/verifier/VerifyType.vue";
import Information from "../views/management/Information.vue";
import Auth_management from "../views/management/Auth_management.vue";
import Customer_service from "../views/management/Customer_service.vue";
import Notice from "../views/management/Notice.vue";
import Qrscan from "../views/management/Qrscan.vue";
import VpWallet from "../views/management/VpWallet.vue";
import Nightmeal from "../views/context/NightFoodContext.vue";
import Test from "../test.vue";
import Holdingevent from "../views/student_council/council_student_holding_event.vue";
import EventCheck from "../views/student_council/eventCheck.vue";
import Mywallet from "../views/authentication/wallet/Mywallet.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", //mode를 설정하지 않으면 주소 뒤에 #이 붙는다.
  routes: [{
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: Login
    },
    {
      path:"/test",
      component: Test
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/password",
      component: Password
    },
    {
      path: "/wallet",
      component: Wallet
    },
    {
      path: "/wallet-ui-store",
      component: Walletuistore
    },
    {
      path: "/wallet-ui-get",
      component: Walletuiget
    },
    {
      path: "/issuer",
      component: Issuer
    },
    {
      path: "/verifier",
      component: Verifier
    },
    {
      path: "/verifyType",
      component: VerifyType
    },
    {
      path: "/information",
      component: Information
    },
    {
      path: "/auth_management",
      component: Auth_management
    },
    {
      path: "/customer_service",
      component: Customer_service
    },
    {
      path: "/notice",
      component: Notice
    },
    {
      path: "/qrscan",
      component: Qrscan,
      name: "qrscan",
    },
    {
      path: "/vpwallet",
      component: VpWallet
    },
    {
      path: "/nightfoodcontext",
      component: Nightmeal
    },
    {
      path: "/council_student_holding_event",
      component: Holdingevent
    },
    {
      path: "/event_check",
      component: EventCheck
    },
    {
      path: "/Mywallet",
      component: Mywallet
    },
  ]
});
