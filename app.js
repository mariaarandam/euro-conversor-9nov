import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const amount = ref("");

    const convertToDollars = computed(() => {
      return amount.value; // TODO: Apartado 1. Modifica este return para realizar la conversión de euros a dolares
    });

    return {
      amount,
      convertToDollars,
    };
  },
}).mount("#app");
