<template>
    <section class="p-4 md:ml-64 h-auto pt-20 min-h-screen">
    </section>
</template>

<script setup>
    import { format, addDays } from 'date-fns';
    import { useElectionStore } from '@/stores/adminStore';
    import { reactive, computed } from 'vue';

    // ...

    const store = useElectionStore();

    // Access the submitDateRange getter directly:
    let date = reactive({
        start: store.submitDateRange?.start || new Date(),
        end: store.submitDateRange?.end || addDays(new Date(), 5),
    })

    computed(() => {
        return{
            formattedDate() {
            return store.submitDateRange?.start
                ? format(store.submitDateRange.start, 'yyyy-MM-dd')
                : 'No date range selected';
        }}
    })
</script>