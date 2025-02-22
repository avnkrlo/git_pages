<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const isNavbarOpen = ref(false);
const isServicesDropdownOpen = ref(false);
const isQuoteDropdownOpen = ref(false);

const toggleNavbar = () => {
    isNavbarOpen.value = !isNavbarOpen.value;
};

const showServicesDropdown = () => {
    isServicesDropdownOpen.value = true;
};

const hideServicesDropdown = () => {
    isServicesDropdownOpen.value = false;
};

const showQuoteDropdown = () => {
    isQuoteDropdownOpen.value = true;
};

const hideQuoteDropdown = () => {
    isQuoteDropdownOpen.value = false;
};
</script>

<style scoped>
@media (max-width: 768px) {
    .hidden {
        display: none;
    }
}

/* Ensure the navbar remains sticky at the top */
nav {
    position: sticky;
    top: 0;
    z-index: 20;
}

/* Dropdown menu styling */
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 10;
    display: none;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
}

.dropdown-menu.show {
    display: block;
}

/* Adjust the flex display for the navbar items */
@media (min-width: 768px) {
    .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }

    .navbar-nav {
        display: flex;
        flex-direction: row;
    }
}

/* Hover and focus effects for dropdown buttons */

button:focus {
    outline: none;
    box-shadow: none;
}

/* Responsive navbar items */
.navbar-nav .nav-item {
    position: relative;
    margin-bottom: 1rem;
}

.navbar-nav .nav-link {
    display: block;
    padding: 0.5rem 1rem;
}

.navbar-nav .dropdown-menu {
    position: static;
    float: none;
}

.navbar-nav .dropdown-menu .dropdown-item {
    width: 100%;
    padding: 0.25rem 1rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background: 0 0;
    border: 0;
}

.navbar-nav .dropdown-menu .dropdown-item:hover, .navbar-nav .dropdown-menu .dropdown-item:focus {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
    .dark-mode {
        background-color: #1f2937;
        color: #f9fafb;
    }

    .dark-mode .dropdown-menu {
        background-color: #1f2937;
        color: #f9fafb;
    }

    .dark-mode .dropdown-menu .dropdown-item:hover, .dark-mode .dropdown-menu .dropdown-item:focus {
        background-color: #374151;
    }

    .dark-mode button:hover, .dark-mode button:focus {
        background-color: #374151;
    }
}
</style>


<template>
    <nav class="fixed top-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-yellow-300">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <Link :href="route('/')" class="flex items-center space-x-3 rtl:space-x-reverse">
                <!-- <img src="Images/cck.png" class="h-8" /> -->
            </Link>

            <button @click="toggleNavbar" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <div :class="['w-full md:block md:w-auto', { 'hidden': !isNavbarOpen }]" id="navbar-dropdown">
                <ul class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link :href="route('/')" class="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                            About Us
                        </Link>
                    </li>

                    <!-- DATA ENTRY DROPDOWN -->
                    <li>
                        <div class="relative" @mouseenter="showServicesDropdown" @mouseleave="hideServicesDropdown">
                            <button class="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Services
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <!-- Dropdown menu -->
                            <div v-show="isServicesDropdownOpen" class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" aria-labelledby="dropdownLargeButton">
                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('/')" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Entry
                                        </Link>
                                    </li>
                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('/')" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Multi-Lingual
                                        </Link>
                                    </li>
                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('/')" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Software Development
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <!-- QUOTE DROPDOWN -->
                    <li>
                        <div class="relative" @mouseenter="showQuoteDropdown" @mouseleave="hideQuoteDropdown">
                            <button class="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Request a Quote
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <!-- Dropdown menu -->
                            <div v-show="isQuoteDropdownOpen" class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" aria-labelledby="dropdownLargeButton">
                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('/')" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Entry Services Quote
                                        </Link>
                                    </li>
                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('/')" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Software Development Services Quote
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link :href="route('/')" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Careers
                        </Link>
                    </li>

                    <li>
                        <Link :href="route('/')" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Recruitment
                        </Link>
                    </li>

                    <li>
                        <Link :href="route('/')" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Blog
                        </Link>
                    </li>

                    <li>
                        <Link :href="route('/')" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <slot></slot>
</template>