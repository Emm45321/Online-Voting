<template>


    <div class="antialiased bg-gray-100 dark:bg-gray-900">

        <main class="p-4 md:ml-64 h-auto pt-20 min-h-screen">
            <div class="space-y-7">
                <h1 class="font-semibold text-xl">ELECTION</h1>
                <h1 class=""></h1>

                <div v-if="saveFlag">
                    <!-- Seal Event -->
                    <div class="p-10 bg-white shadow-md space-x-3">
                        <div class="mb-5">
                            <h2 class="font-bold text-lg">Seal Election</h2>
                            <p class="text-sm font-medium text-gray-600">Toggle seal to edit or finalize election</p>
                        </div>
                        <Button variant="outline" @click="() => saveFlag = !saveFlag">Pause & Edit</Button>
                        <Button variant="destructive">Delete</Button>
                    </div>
                </div>


                <div v-if="!saveFlag" class="space-y-7">
                    <!-- Seal Event -->
                    <div class="p-10 bg-white shadow-md space-x-3">
                        <div class="mb-5">
                            <h2 class="font-bold text-lg">Seal Election</h2>
                            <p class="text-sm font-medium text-gray-600">Toggle seal to edit or finalize election</p>
                        </div>
                        <Button class="bg-blue-600 hover:bg-blue-500" @click="() => saveFlag = !saveFlag">Publish</Button>
                        <Button variant="destructive" @click="() => openConfirm = true">Delete</Button>
                    </div>
                    <!-- Basic Info -->
                    <div class="p-10 bg-white shadow-md">
                        <div class="mb-5">
                            <h2 class="font-bold text-lg">Basic Info</h2>
                            <p class="text-sm font-medium text-gray-600">Provide election nanme</p>
                        </div>
                        <div>
                            <div class="flex flex-col space-y-2">
                                <label class="font-semibold">Election</label>
                                <input v-model="election_title" type="text" placeholder="Election title"
                                    class="ring-1 ring-gray-400 py-2 px-4 rounded">
                            </div>

                        </div>
                    </div>
                    <!-- Duration -->
                    <div class="p-10 bg-white shadow-md">
                        <div class="mb-5">
                            <h2 class="font-bold text-lg">Duration</h2>
                            <p class="text-sm font-medium text-gray-600">Set election <span
                                    class="text-emerald-500">start
                                    time</span> and <span class="text-pink-500">end time</span></p>
                        </div>
                        <Datepicker />
                    </div>
                    <!-- Control Buttons -->
                    <div class="p-7 bg-white shadow-md">
                        <div class="flex justify-between">
                            <Button variant="outline" class="p-5">Back</Button>
                            <Button @click="showModal()"
                                class="outline outline-1 outline-slate-900 bg-slate-900 text-white py-2 px-5 rounded"
                                :disabled="saveFlag">Save</Button>
                        </div>
                    </div>
                </div>
            </div>



            <AlertDialog :open="openModal">
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Do you want to save the event?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action will start new election but will not officially start until you publish it.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel @click="closeModal()">Cancel</AlertDialogCancel>
                        <AlertDialogAction @click="addElection()">Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>


            <AlertDialog :open="openConfirm">
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Do you want to delete the event?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone once completed.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel @click="() => openConfirm = false">Cancel</AlertDialogCancel>
                        <AlertDialogAction variant="destructive" @click="deleteElection(store.allElection[0].id)">Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </main>
    </div>


</template>

<script setup>
    import { ref } from 'vue'
    import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
    import { db } from '@/firebase/init'
    import { toast } from '@/components/ui/toast/use-toast'

    import Datepicker from '@/components/Custom/Datepicker.vue';
    import Button from '@/components/ui/button/Button.vue';
    import { useElectionStore } from '@/stores/adminStore.js'
    import {
        AlertDialog,
        AlertDialogAction,
        AlertDialogCancel,
        AlertDialogContent,
        AlertDialogDescription,
        AlertDialogFooter,
        AlertDialogHeader,
        AlertDialogTitle,
    } from '@/components/ui/alert-dialog'

    const store = useElectionStore()
    let openModal = ref(false)
    let openConfirm = ref(false)
    let saveFlag = ref(false)
    let election_title = ref('')

    function showModal() {
        openModal.value = true
    }

    function closeModal() {
        openModal.value = false
    }



    function addElection() {
        store.isLoading = true
        closeModal()

        const colRef = collection(db, 'election')
        const data = {
            title: election_title.value,
            start: store.submitDateRange.start,
            end: store.submitDateRange.end,
            isActive: true
        }

        addDoc(colRef, data).then(() => {
            store.isLoading = false
        })

    }

    function deleteElection(id) {
        store.isLoading = true
        openConfirm.value = false

        deleteDoc(doc(db, 'election', id)).then(() => {
            toast({
                title: 'Delete',
                description: 'Item have been successfully deleted!'
            })
            store.isLoading = false
        })
    }
</script>
