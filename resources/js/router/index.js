import { createRouter, createWebHistory } from 'vue-router';

// Import all of the resource routes files.
function loadRootRoutes() {
    let routeFolderContext = require.context("./", true, /\.route\.js$/); //(directory: current, sub folder : true, pattern: files end with .route.js)
    return routeFolderContext
        .keys()
        .map(routeFolderContext) // import module
        .map(routeFile => routeFile.default); // get `default` export from each resolved module
}

let rootRoutes = loadRootRoutes().flat();
 

const routes = [
    {
        name: 'index',
        path: '/',
        component: () => import('../components/Home'),
    },
    {
        name: 'about',
        path: '/about',
        component: () => import('../components/About'),
    },
    ...rootRoutes
];

export default createRouter({
    history: createWebHistory(),
    routes
})