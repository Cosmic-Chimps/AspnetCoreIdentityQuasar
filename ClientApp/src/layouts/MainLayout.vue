<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat
               dense
               round
               icon="menu"
               aria-label="Menu"
               @click="leftDrawerOpen = !leftDrawerOpen" />

        <q-toolbar-title>
          QuasarAspNetCoreIdentitySample
        </q-toolbar-title>
        <q-space />
        <template v-if="isLoggedIn">
          <q-separator dark
                       vertical />
          <q-btn stretch
                 flat
                 label="Logout"
                 :to="{name: 'logout'}" />
        </template>
        <template v-else>
          <q-separator dark
                       vertical />
          <q-btn stretch
                 flat
                 label="Login"
                 :to="{name: 'login'}" />
          <q-separator dark
                       vertical />
          <q-btn stretch
                 flat
                 label="Register"
                 :to="{name: 'register'}" />
        </template>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen"
              show-if-above
              bordered
              content-class="bg-grey-1"
              v-if="essentialLinks.lenght > 0">
      <q-list>
        <q-item-label header
                      class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink v-for="link in essentialLinks"
                       :key="link.title"
                       v-bind="link" />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import { mainOidc } from '../boot/oidcService';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const leftDrawerOpen = ref(false);
    const isLoggedIn = mainOidc.isAuthenticated;

    return { leftDrawerOpen, isLoggedIn };
  },
});
</script>
