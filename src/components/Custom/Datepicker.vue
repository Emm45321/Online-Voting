<script setup lang="ts">
import { format } from 'date-fns'

import { reactive, } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { CalendarIcon } from '@radix-icons/vue'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useElectionStore } from '@/stores/adminStore'

const store = useElectionStore()

let date = reactive({
  start: new Date(),
  end: new Date()
})

const handleChange = (newData)=>{
  store.submitDateRange = newData
  console.log(store.submitDateRange)
}
</script>

<template>
  <div :class="cn('grid gap-2', $attrs.class ?? '')">
    <Popover>
      <PopoverTrigger as-child>
        <Button
          id="date"
          :variant="'outline'"
          :class="cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )"
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
        
          <span>
            {{ date.start ? (
              date.end ? `${format(date.start, 'LLL dd, y')} - ${format(date.end, 'LLL dd, y')}`
              : format(date.start, 'LLL dd, y')
            ) : 'Pick a date' }}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0" align="start">
        <Calendar
          v-model.range="date" @update:model-value="handleChange"
          :columns="2"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>