import { defineStore } from "pinia";
import { db } from "@/firebase/init";
import { onSnapshot, collection} from 'firebase/firestore'
import {addDays} from 'date-fns'




export const useElectionStore = defineStore('election', {
    state: () => {
        return {
            isLoading: false,
            allElection: null,
            activeElection: null,
            submitDateRange: null,
        }
    },



    getters: {
        dateRange(){
            return{
                start: this.activeElection?.start || new Date(),
                end: this.activeElection?.end || addDays(new Date(), 5)
            }
        },

        submitDateRange: (state) => state.submitDateRange,
    },
    
    //functions
    actions: {
        fetchElection() {
            this.isLoading = true
            onSnapshot(collection(db, 'election'), (snapshot) => {
                this.allElection = []
                snapshot.forEach((doc) => {
                    const data = doc.data()
                    data.id = doc.id
                    this.allElection.push(data)
                })
                this.activeElection = this.allElection.filter(item=>item.isActive === true)
                this.isLoading = false
                this.submitDateRange={
                    start: (this.activeElection[0].start.toDate()) || new Date(),
                    end: (this.activeElection[0].end.toDate()) || addDays(new Date(), 7)
                }
                console.log(this.activeElection)
                console.log(this.submitDateRange.start)
                console.log(this.submitDateRange.end)
            })
        },
    }
})