<template>
    <div class="min-h-screen bg-gradient-to-b from-indigo-500 to-purple-700 p-6">
      <header class="mb-10">
        <button @click="goBack" class="text-white text-2xl">← Back</button>
        <h1 class="text-white text-3xl font-bold tracking-wide mt-4">{{ courseName }} Details</h1>
      </header>
      <div class="bg-white rounded-xl shadow-md p-6">
        <p class="text-lg text-gray-800">Course details for {{ courseName }} will go here.</p>
        <!-- Add more course details here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['courseName'], // Declare the 'courseName' prop
    methods: {
      goBack() {
        this.$router.go(-1); // Go back to the previous page
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional styles for CourseDetail.vue */
  </style>
  