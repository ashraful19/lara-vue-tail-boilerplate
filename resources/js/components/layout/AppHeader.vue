<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div
                    class="flex-1 flex items-center justify-start sm:items-stretch"
                >
                    <div class="flex-shrink-0 flex items-center">
                        <router-link to="/">
                            <img
                                class="block h-8 w-auto"
                                src="images/logo.png"
                                alt="Workflow"
                            />
                        </router-link>
                    </div>
                    <div class="lg:ml-10 md:ml-8 ml-2 flex items-baseline space-x-4">
                        <router-link to="/">
                            <h2 class="md:block hidden text-white font-bold text-2xl">Laravel-Vue-Tailwind Boilerplate</h2>
                            <h2 class="block md:hidden text-white font-bold text-2xl">LVT Boilerplate</h2>
                        </router-link>
                    </div>
                </div>
                <div
                    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                >
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4">
                            <router-link
                                v-for="item in navigation"
                                :key="item.name"
                                :to="item.to"
                                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                active-class="bg-indigo-600 hover:bg-indigo-700 text-white"
                                aria-current-value="page"
                            >
                                {{ item.name }}
                            </router-link>
                        </div>
                    </div>
                </div>
                <div
                    class="absolute inset-y-0 right-0 flex items-center sm:hidden"
                >
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                        <span class="sr-only">Open main menu</span>
                        <MenuIcon
                            v-if="!open"
                            class="block h-6 w-6"
                            aria-hidden="true"
                        />
                        <XIcon
                            v-else
                            class="block h-6 w-6"
                            aria-hidden="true"
                        />
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <DisclosureButton
                    v-for="item in navigation"
                    :key="item.name"
                    as="template"
                    :to="item.to"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    :aria-current="item.current ? 'page' : undefined"
                >
                    <router-link :to="item.to" active-class="bg-indigo-600 hover:bg-indigo-700 text-white">{{ item.name }}</router-link>
                </DisclosureButton
            >
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const navigation = [
    { name: "Home", to: {name: 'index'}, current: true },
    { name: "About", to: {name: 'about'}, current: false },
];

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        MenuIcon,
        XIcon,
    },
    setup() {
        return {
            navigation,
        };
    },
};
</script>
