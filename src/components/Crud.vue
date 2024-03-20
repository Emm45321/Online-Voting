<template>
    <!-- Start block -->
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div
                    class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Search" required="">
                            </div>
                        </form>
                    </div>
                    <div
                        class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <Button type="button" @click="() => changeState('Create')">
                            <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            Add product
                        </Button>
                    </div>
                </div>
                <div class="overflow-x-auto relative">

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-4">Elecion title</th>
                                <th scope="col" class="px-4 py-3">Date</th>
                                <th scope="col" class="px-4 py-3">ID</th>
                                <th scope="col" class="px-4 py-3">Status</th>
                                <th scope="col" class="px-4 py-3">
                                    <span class="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="allElection.length != 0" v-for="(doc, index) in allElection" class="border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{doc.title }}</th>
                                <td class="px-4 py-3">{{ doc.date }}</td>
                                <td class="px-4 py-3">{{ doc.id }}</td>
                                <td class="px-4 py-3">{{ doc.isActive }}</td>
                                <td class="px-4 py-3 flex items-center justify-end">
                                    <div class="space-x-2">
                                        <Button variant="outline" @click="changeState('Update', doc)">Update</Button>
                                        <Button variant="destructive" @click="deleteElection(doc.id)">Delete</Button>
                                    </div>
                                </td>
                            </tr>

                            <tr v-else>
                                <td colspan="5" class="text-center">No data record</td>
                            </tr>
                        </tbody>
                    </table>
                    <pre>
                        {{ activeElection }}
                    </pre>
                </div>
                <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                    aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing
                        <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                        of
                        <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                    </span>
                    <ul class="inline-flex items-stretch -space-x-px">
                        <li>
                            <a href="#"
                                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Previous</span>
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page"
                                class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Next</span>
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>

    <Dialog :open="showCreate">
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>{{ state === 'Create' ? 'Create' : 'Update' }} Election</DialogTitle>
                <DialogDescription>
                    {{ state === 'Create' ? 'Fill all the fields' : "Make changes to the election info here. Click save when you're done."}}
                </DialogDescription>
            </DialogHeader>
            <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="name" class="text-right">
                        Title
                    </Label>
                    <Input v-model="formData.title" id="name" class="col-span-3" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="username" class="text-right">
                        Date
                    </Label>
                    <Input v-model="formData.date" type="date" id="username" class="col-span-3" />
                </div>
            </div>
            <DialogFooter>
                <Button variant="outline" type="button" @click="() => showCreate = false">
                    Cancel
                </Button>
                <Button type="button" @click="state === 'Create' ? addElection() : updateElection()">
                    {{ state === 'Create' ? 'Create' :'Save Changes' }}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>

   
</template>

<script setup>
    import { Button } from "@/components/ui/button"
    import { db } from '@/firebase/init'
    import { ref, onBeforeMount } from 'vue'
    import { onSnapshot, deleteDoc, updateDoc, doc, collection, query, where, addDoc } from 'firebase/firestore'
    import SpinnerVue from "./Spinner/Spinner.vue";
    import {
        Dialog,
        DialogContent,
        DialogDescription,
        DialogFooter,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
    } from '@/components/ui/dialog'
    import { Input } from '@/components/ui/input'
    import { Label } from '@/components/ui/label'
    import { useToast } from '@/components/ui/toast/use-toast'
    const { toast } = useToast()
    let election_id = ref()
    const allElection = ref([])
    const activeElection = ref([])
    const isLoading = ref(false)
    const showCreate = ref(false)
    let state = ref()
    const formData = ref({
        title: '',
        date: '',
    })

    function fetchElection() {
        isLoading.value = true
        onSnapshot(collection(db, 'election'), (snapshot) => {
            allElection.value = []
            snapshot.forEach((doc) => {
                const data = doc.data()
                data.id = doc.id
                allElection.value.push(data)
            })
            activeElection.value = allElection.value.filter(item=>item.isActive === true)
            isLoading.value = false
        })
    }

    function addElection() {
        isLoading.value = true
        showCreate.value = false
        const dataPass = {
            title: formData.value.title,
            date: formData.value.date,
            isActive: true
        }


        addDoc(collection(db, 'election'), dataPass)
            .then((docRef) => {
                toast({
                    title: 'Created',
                    variant: 'success',
                    description: 'Election created successfully!'
                })
                formData.value.title = ''
                formData.value.date = ''
            })
        isLoading.value = false
    }

    function deleteElection(id) {
        isLoading.value = true

        deleteDoc(doc(db, 'election', id)).then(() => {
            toast({
                title: 'Delete',
                description: 'Item have been successfully deleted!'
            })
            isLoading.value = false
        })
    }

    function updateElection() {
        isLoading.value = true
        showCreate.value = false
        updateDoc(doc(db, 'election', election_id.value), formData.value).then(() => {
            isLoading.value = false
        })
    }

    function changeState(s, doc = {}) {
        state.value = s
        election_id.value = doc.id
        formData.value.title = doc.title
        formData.value.date = doc.date

        showCreate.value = true
    }

    onBeforeMount(() => {
        fetchElection()
    })

</script>