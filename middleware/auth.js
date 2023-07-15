import { useRealmApp } from '../composables/realm';

export default defineNuxtRouteMiddleware((to, from) => {
    // skip middleware on server
    if (process.server) return

    const { currentUser } = useRealmApp();
    
    if (!currentUser) {
        return navigateTo('/');
    }
});