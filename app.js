import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const amount = ref("");

    const convertToDollars = computed(() => {
      return amount.value * 1.07; 
      // TODO: Apartado 1. Modifica este return para realizar la conversión de euros a dolares          
    });

    const convertToYens = computed(() => {
      return amount.value * 161.53; 
          
    });

    return {
      amount,
      convertToDollars,
      convertToYens,
      
    };
  },
}).mount("#app");
