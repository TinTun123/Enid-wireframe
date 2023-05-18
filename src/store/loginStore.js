import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore('Login', () => {
    const schools = ref([
        {
            id : '01',
            title : "Learn English Live",
            descri : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati suscipit illum perspiciatis ad voluptatum, necessitatibus explicabo totam nemo sed maxime, molestias iure eum illo facilis fugit recusandae dolore tempore?',
        },

        {
            id : '02',
            title : "Networking Essentials",
            descri : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati suscipit illum perspiciatis ad voluptatum, necessitatibus explicabo totam nemo sed maxime, molestias iure eum illo facilis fugit recusandae dolore tempore?',
        },

        {
            id : '03',
            title : "Chinese Intermetiate",
            descri : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati suscipit illum perspiciatis ad voluptatum, necessitatibus explicabo totam nemo sed maxime, molestias iure eum illo facilis fugit recusandae dolore tempore?',
        },
    ]);

    const picked_id = ref();
    return {schools, picked_id}
})