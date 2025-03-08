import '../css/app.css';
import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { ZiggyVue } from 'ziggy-js';
import { Ziggy } from './ziggy.js';
import MainLayout from './Layouts/MainLayout.vue';

createInertiaApp({
    resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
    let page = pages[`./Pages/${name}.vue`];
    
    // if (!page) {
    //     throw new Error(`Page "${name}" not found in import.meta.glob.`);
    // }

    if(!page.default.layout) {
        page.default.layout = MainLayout;
    }
    console.log(page);
    return page;
    },
    setup({ el, App, props, plugin }) {
        const app = createSSRApp({
            render: () => h(App, props)
        });
    app.use(plugin)
        .use(ZiggyVue, Ziggy)
        .mount(el);

    return app;
    },
});