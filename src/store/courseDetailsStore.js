import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCourseDetailsStore = defineStore('CourseDetails', () => {
    const course = ref([
        {
            id : '0001',
            title : 'Learn japanese Language',
            nextLecture : 'Sun 12:30',
            level : 'Beginner',
            durations : 6,
            days : 'Sat/Sun',
            time : '1 PM - 3 PM',
            currentWeek : 4,
            descri : 'The ultimate Japanese beginner course that will teach you Japanese faster than you thought possible!f something wrong went wrong i don’t  know what but is driving me crezy somewhat!!',

            syllabus : [
                {
                    week : 1,
                    lectures : ['course01, week01, lecture01', 'course01, week01, lecture02', 'course01, week01, lecture03'],
                    readings : ['course01, week01, reading01', 'course01, week01, reading02', 'course01, week01, reading03'],
                    assginments : ['course01, week01, assgin01', 'course01, week01, assgin02', 'course01, week01, assgin03'],
                    exercise : ['course01, week01, exercise01', 'course01, week01, exerciese02'],
                    discussion : ['course01, week01, discu01', 'course01, week01, discu02']

                },
                {
                    week : 2,
                    lectures : ['course01, week02, lecture01', 'course01, week02, lecture02'],
                    readings : ['course01, week02, reading01', 'course01, week02, reading02'],
                    assginments : ['course01, week02, assgin01', 'course01, week02, assgin02', 'course01, week02, assgin03', 'course01, week02, assgin04'],
                    exercise : ['course01, week02, exercise01', 'course01, week02, exerciese02', 'course01, week02, exerciese03'],
                    discussion : ['course01, week02, discu01', 'course01, week02, discu02']
                    
                },
                {
                    week : 3,
                    lectures : ['course01, week03, lecture01', 'course01, week03, lecture02', 'course01, week03, lecture03'],
                    readings : ['course01, week03, reading01', 'course01, week03, reading02', 'course01, week03, reading03', 'course01, week03, reading04'],
                    assginments : ['course01, week03, assgin01', 'course01, week03, assgin02'],
                    exercise : ['course01, week03, exercise01', 'course01, week03, exerciese02', 'course01, week03, exerciese03'],
                    discussion : ['course01, week03, discu01', 'course01, week03, discu02']
                   
                },
                {
                    week : 4,
                    lectures : ['course01, week04, lecture01'],
                    readings : ['course01, week04, reading01'],
                    assginments : ['course01, week04, assgin01', 'course01, week04, assgin02'],
                    exercise : ['course01, week04, exercise01', 'course01, week04, exerciese02'],
                    discussion : ['course01, week04, discu01', 'course01, week04, discu02']
                },
                {
                    week : 5,
                    lectures : ['course01, week05, lecture01', 'course01, week05, lecture02', 'course01, week05, lecture03'],
                    readings : ['course01, week05, reading01', 'course01, week05, reading02'],
                    assginments : ['course01, week05, assgin01'],
                    exercise : ['course01, week05, exercise01'],
                    discussion : ['course01, week05, discu01', 'course01, week05, discu02']
                }
            ]
        },

        {
            id : '0002',
            title : 'English Speak Fun',
            nextLecture : 'Fri 12:00',
            level : 'Intermediate',
            durations : 3,
            days : 'TUE/FRI',
            descri : '       The ultimate English intermediate course that will teach you Japanese faster than you thought possible!f something wrong went wrong i don’t  know what but is driving me crezy somewhat!!',
            time : '2 PM - 3:30 PM',
            currentWeek : 2,
            syllabus : [
                {
                    week : 1,
                    lectures : ['course02, week01, lecture01', 'course02, week01, lecture02', 'course02, week01, lecture03'],
                    readings : ['course02, week01, reading01', 'course02, week01, reading02', 'course02, week01, reading03'],
                    assginments : ['course02, week01, assgin01', 'course02, week01, assgin02', 'course02, week01, assgin03'],
                    exercise : ['course02, week01, exercise01', 'course02, week01, exerciese02'],
                    discussion : ['course02, week01, discu01', 'course02, week01, discu02']

                },
                {
                    week : 2,
                    lectures : ['course02, week02, lecture01', 'course02, week02, lecture02'],
                    readings : ['course02, week02, reading01', 'course02, week02, reading02'],
                    assginments : ['course02, week02, assgin01', 'course02, week02, assgin02', 'course02, week02, assgin03', 'course02, week02, assgin04'],
                    exercise : ['course02, week02, exercise01', 'course02, week02, exerciese02', 'course02, week02, exerciese03'],
                    discussion : ['course02, week02, discu01', 'course02, week02, discu02']
                    
                },
                {
                    week : 3,
                    lectures : ['course02, week03, lecture01', 'course02, week03, lecture02', 'course02, week03, lecture03'],
                    readings : ['course02, week03, reading01', 'course02, week03, reading02', 'course02, week03, reading03', 'course02, week03, reading04'],
                    assginments : ['course02, week03, assgin01', 'course02, week03, assgin02'],
                    exercise : ['course02, week03, exercise01', 'course02, week03, exerciese02', 'course02, week03, exerciese03'],
                    discussion : ['course02, week03, discu01', 'course02, week03, discu02']
                   
                },
                {
                    week : 4,
                    lectures : ['course02, week04, lecture01'],
                    readings : ['course02, week04, reading01'],
                    assginments : ['course02, week04, assgin01', 'course02, week04, assgin02'],
                    exercise : ['course02, week04, exercise01', 'course02, week04, exerciese02'],
                    discussion : ['course02, week04, discu01', 'course02, week04, discu02']
                },
                {
                    week : 5,
                    lectures : ['course02, week05, lecture01', 'course02, week05, lecture02', 'course02, week05, lecture03'],
                    readings : ['course02, week05, reading01', 'course02, week05, reading02'],
                    assginments : ['course02, week05, assgin01'],
                    exercise : ['course02, week05, exercise01'],
                    discussion : ['course02, week05, discu01', 'course02, week05, discu02']
                }
            ]
        },

        {
            id : '0003',
            title : 'Networking Fundamental',
            nextLecture : 'Sun 01:30',
            level : 'Beginner',
            durations : 4,
            time : '2 AM - 3:30 AM',
            descri : 'The ultimate Networking fundamental beginner course that will teach you Japanese faster than you thought possible!f something wrong went wrong i don’t  know what but is driving me crezy somewhat!!',
            days : 'Sat/Sun',
            syllabus : [
                {
                    week : 1,
                    lectures : ['course03, week01, lecture01', 'course03, week01, lecture02', 'course03, week01, lecture03'],
                    readings : ['course03, week01, reading01', 'course03, week01, reading02', 'course03, week01, reading03'],
                    assginments : ['course03, week01, assgin01', 'course03, week01, assgin02', 'course03, week01, assgin03'],
                    exercise : ['course03, week01, exercise01', 'course03, week01, exerciese02'],
                    discussion : ['course03, week01, discu01', 'course03, week01, discu02']

                },
                {
                    week : 2,
                    lectures : ['course03, week02, lecture01', 'course03, week02, lecture02'],
                    readings : ['course03, week02, reading01', 'course03, week02, reading02'],
                    assginments : ['course03, week02, assgin01', 'course03, week02, assgin02', 'course03, week02, assgin03', 'course03, week02, assgin04'],
                    exercise : ['course03, week02, exercise01', 'course03, week02, exerciese02', 'course03, week02, exerciese03'],
                    discussion : ['course03, week02, discu01', 'course03, week02, discu02']
                    
                },
                {
                    week : 3,
                    lectures : ['course03, week03, lecture01', 'course03, week03, lecture02', 'course03, week03, lecture03'],
                    readings : ['course03, week03, reading01', 'course03, week03, reading02', 'course03, week03, reading03', 'course03, week03, reading04'],
                    assginments : ['course03, week03, assgin01', 'course03, week03, assgin02'],
                    exercise : ['course03, week03, exercise01', 'course03, week03, exerciese02', 'course03, week03, exerciese03'],
                    discussion : ['course03, week03, discu01', 'course03, week03, discu02']
                   
                },
                {
                    week : 4,
                    lectures : ['course03, week04, lecture01'],
                    readings : ['course03, week04, reading01'],
                    assginments : ['course03, week04, assgin01', 'course03, week04, assgin02'],
                    exercise : ['course03, week04, exercise01', 'course03, week04, exerciese02'],
                    discussion : ['course03, week04, discu01', 'course03, week04, discu02']
                },
                {
                    week : 5,
                    lectures : ['course03, week05, lecture01', 'course03, week05, lecture02', 'course03, week05, lecture03'],
                    readings : ['course03, week05, reading01', 'course03, week05, reading02'],
                    assginments : ['course03, week05, assgin01'],
                    exercise : ['course03, week05, exercise01'],
                    discussion : ['course03, week05, discu01', 'course03, week05, discu02']
                }
            ]
        },

        {
            id : '0004',
            title : 'Yoga Training live',
            nextLecture : 'Mon 04:30',
            level : 'Upper Intermediate',
            durations : 1,
            descri : 'The ultimate Yoga intermediate course that will teach you Japanese faster than you thought possible!f something wrong went wrong i don’t  know what but is driving me crezy somewhat!!',
            time : '10:00 PM - 11:30 PM',
            days : 'Sat/Sun',
            syllabus : [
                {
                    week : 1,
                    lectures : ['course04, week01, lecture01', 'course04, week01, lecture02', 'course04, week01, lecture03'],
                    readings : ['course04, week01, reading01', 'course04, week01, reading02', 'course04, week01, reading03'],
                    assginments : ['course04, week01, assgin01', 'course04, week01, assgin02', 'course04, week01, assgin03'],
                    exercise : ['course04, week01, exercise01', 'course04, week01, exerciese02'],
                    discussion : ['course04, week01, discu01', 'course04, week01, discu02']

                },
                {
                    week : 2,
                    lectures : ['course04, week02, lecture01', 'course04, week02, lecture02'],
                    readings : ['course04, week02, reading01', 'course04, week02, reading02'],
                    assginments : ['course04, week02, assgin01', 'course04, week02, assgin02', 'course04, week02, assgin03', 'course04, week02, assgin04'],
                    exercise : ['course04, week02, exercise01', 'course04, week02, exerciese02', 'course04, week02, exerciese03'],
                    discussion : ['course04, week02, discu01', 'course04, week02, discu02']
                    
                },
                {
                    week : 3,
                    lectures : ['course04, week03, lecture01', 'course04, week03, lecture02', 'course04, week03, lecture03'],
                    readings : ['course04, week03, reading01', 'course04, week03, reading02', 'course04, week03, reading03', 'course04, week03, reading04'],
                    assginments : ['course04, week03, assgin01', 'course04, week03, assgin02'],
                    exercise : ['course04, week03, exercise01', 'course04, week03, exerciese02', 'course04, week03, exerciese03'],
                    discussion : ['course04, week03, discu01', 'course04, week03, discu02']
                   
                },
                {
                    week : 4,
                    lectures : ['course04, week04, lecture01'],
                    readings : ['course04, week04, reading01'],
                    assginments : ['course04, week04, assgin01', 'course04, week04, assgin02'],
                    exercise : ['course04, week04, exercise01', 'course04, week04, exerciese02'],
                    discussion : ['course04, week04, discu01', 'course04, week04, discu02']
                },
                {
                    week : 5,
                    lectures : ['course04, week05, lecture01', 'course04, week05, lecture02', 'course04, week05, lecture03'],
                    readings : ['course04, week05, reading01', 'course04, week05, reading02'],
                    assginments : ['course04, week05, assgin01'],
                    exercise : ['course04, week05, exercise01'],
                    discussion : ['course04, week05, discu01', 'course04, week05, discu02']
                }
            ]
        },
    ]);

    const currentCourseID = ref('0001');
    const totalcourse = computed(() => {
        return course.value.length;
    });
    const currentSyllabus = computed(() => {

        const currentCou = course.value.filter((c) => {
            
            return c.id === currentCourseID.value;
        });
        console.log('compute update');
        return currentCou;
    })

    const currentCourse = computed(() => {
        return currentCourseID;
    })

    const courseTitles = computed(() => {
        return course.value.map((c) => {
            return c.title;
        })
    })

    const courseIds = computed(() => {
        return course.value.map((c) => {
            return c.id
        });
    })

    return {course, currentCourseID, totalcourse, currentSyllabus, currentCourse, courseTitles, courseIds};
})