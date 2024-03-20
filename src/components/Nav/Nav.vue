<template>
    <nav class="bg-slate-900 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex justify-start items-center">
                <button
                    @click="drawer.toggle()"
                    aria-controls="drawer-navigation"
                    class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg aria-hidden="true" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Toggle sidebar</span>
                </button>
                <a href="https://flowbite.com" class="flex items-center justify-between mr-4 text-slate-100">
                    <img src="https://flowbite.s3.amazonaws.com/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EBOTO</span>
                </a>
            </div>
            <div class="flex items-center lg:order-2">

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button type="button"
                            class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button" aria-expanded="false">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-8 h-8 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                                alt="user photo" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Admin user</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div class="flex gap-2">
                                <Settings :size="20" />
                                <span>Account settings</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <div class="flex gap-2">
                                <Signout :size="20" />
                                <span>Signout</span>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </nav>




    <aside
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-slate-800 border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav" id="drawer-navigation">
        <div class="overflow-y-auto py-5 px-3 h-full bg-gray-900 dark:bg-gray-800">

            <ul class="space-y-2">
                <li class="text-base">
                    <!-- <RouterLink to="/admin/"
                    class="flex items-center p-2 font-semibold text-slate-400 rounded-lg dark:text-white hover:bg-slate-800 hover:text-white group">
                    <SpeedometerIcon/>
                    <span class="ml-3">Overview</span>
                </RouterLink> -->
                </li>
                <li class="text-base">
                    <RouterLink to="/admin/election" 
                        @click = "drawer.hide()"
                        class="flex items-center p-2 font-semibold text-slate-400 rounded-lg dark:text-white hover:bg-slate-800 hover:text-white group">
                        <Fingerprint />
                        <span class="ml-3">Election</span>
                    </RouterLink>
                </li>
                <li class="text-base">
                    <RouterLink to="/admin/positions"
                        @click = "drawer.hide()"
                        class="flex items-center p-2 font-semibold text-slate-400 rounded-lg dark:text-white hover:bg-slate-800 hover:text-white group">
                        <Stamp />
                        <span class="ml-3">Positions</span>
                    </RouterLink>
                </li>
                <li class="text-base">
                    <RouterLink to="/admin/candidates"
                        @click = "drawer.hide()"
                        class="flex items-center p-2 font-semibold text-slate-400 rounded-lg dark:text-white hover:bg-slate-800 hover:text-white group">
                        <Group />
                        <span class="ml-3">Candidates</span>
                    </RouterLink>
                </li>

            </ul>
        </div>

    </aside>


</template>

<script setup lang="ts">
    import{
        Settings, 
        Fingerprint, 
        Gauge,
        Stamp,
        User2 as Group,
        SquareArrowRightIcon as Signout
        
    } from 'lucide-vue-next'
    // import GearIcon from 'icons/CogOutline.vue'
    import { RouterLink } from 'vue-router';

    import {Drawer} from 'flowbite'

    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from '@/components/ui/dropdown-menu'
    import { onBeforeMount, onMounted } from 'vue';

    let drawer = null
   onMounted(()=>{
   
    drawer = new Drawer(document.getElementById('drawer-navigation'))
   })
</script>