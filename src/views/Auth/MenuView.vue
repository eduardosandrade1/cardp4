<script setup>
import MenuVue from '../../components/Config/MenuVue.vue'
import ModalError from '../../components/ModalError.vue'
</script>

<template>
    
    <ModalError :message="message" :title="titleError" :show="userAgentAuthorized" />

    <MenuVue v-if="!userAgentAuthorized" />
    <ModalError v-if="!userAgentAuthorized" />

</template>

<script>

export default {
    data() {
        return {
            userAgentAuthorized: this.verifyuserAgentAuthorized(),
            titleError: 'Ops,',
            message: `Parece que você está tentando acessar por um dispositivo não permitido para edição do cardápio.
                      Por favor, tente acessar por um notebook ou compudator Desktop.`
        }
    },
    methods: {
        verifyuserAgentAuthorized() {
            let userA = navigator.userAgent;
            let pos   = userA.indexOf('Mobile');
            if (pos > -1) {
                return true;
            }
            return false;
        }
    }
}
</script>