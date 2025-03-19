<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

</script>

<template>
  <header class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block text-teal-600 dark:text-teal-300" href="#">
            <span class="sr-only">Home</span>
            <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Flowbite<span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2">PRO</span></h1>
          </a>
        </div>
  
        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <Link class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  :href="route('experience.index')">
                  Work Experience
                </Link>
              </li>
  
              <li>
                <Link class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                :href="route('project.index')">
                  Projects
                </Link>
              </li>
  
              <li>
                <Link class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                :href="route('about.index')">
                  About
                </Link>
              </li>

              <li>
                <Link class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                :href="route('contact.index')">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>