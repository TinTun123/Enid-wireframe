import {createStore} from "vuex";

const store = createStore({
    state : {
        schools : [
            {
                id : 1,
                name : 'Cherry language school',
                description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit odit officiis beatae consectetur, nihil porro, a repellat quaerat animi vero, nam vitae doloremque? Similique sequi quam ducimus obcaecati cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolores reiciendis suscipit labore voluptas nemo mollitia et quae, facilis itaque ea voluptatem autem aliquid. Officia ratione repellat quo optio reprehenderit!",
                choose : false
            },
            {
                id : 2,
                name : 'TOl Engineering',
                description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolores reiciendis suscipit labore voluptas nemo mollitia et quae, facilis itaque ea voluptatem autem aliquid. Officia ratione repellat quo optio reprehenderit!",
                choose : false
            
            },

            {
                id : 3,
                name : 'MIT Computer science school',
                description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolores reiciendis suscipit labore voluptas nemo mollitia et quae, facilis itaque ea voluptatem autem aliquid. Officia ratione repellat quo optio reprehenderit!",
                choose : false
            },
        ],
        // pick_id : 0,
    },

    mutations : {
        "PICK_SCHOOL" : (state, id) => {
            // console.log('Mutating PICK_ID', id);
            state.schools = state.schools.map((school) => {
                if (school.id == id) {
                    school.choose = true;
                } else {
                    school.choose = false;
                }
                return school;
            })
        },
    },

    getters : {
        
    },

    actions : {
        pick_school({commit}, id) {
            commit('PICK_SCHOOL', id);
        }
    }
})

export default store;

