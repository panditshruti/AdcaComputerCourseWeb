<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Our Services</h2>
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      <div v-for="(service, index) in services" :key="index" class="bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <img :src="service.image" alt="Service Image" class="w-24 h-24 mx-auto mb-4 rounded-full" />
        <h3 class="text-xl font-semibold text-white">{{ service.title }}</h3>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          image: require("@/assets/adcaiuyt.png"), // Load image from assets folder
          title: "ADCA",
          description: "Get your passport size photo printed in high quality.",
        },
        {
          image: require("@/assets/dca.png"),// Replace with an actual image URL if needed
          title: "DCA",
          description: "Get your Aadhaar card printed on PVC plastic.",
        },
        {
          image: require("@/assets/dtp.png"),
          title: "DTP",
          description: "Get your bank passbook printed with your latest transactions.",
        },
        {
          image: require("@/assets/quizoption.png"),
          title: "Quiz",
          description: "Get your bank passbook printed with your latest transactions.",
        },
        {
          image: require("@/assets/typing.png"),
          title: "Typing Code",
          description: "Get your bank passbook printed with your latest transactions.",
        },
        {
          image: require("@/assets/youtube.png"),
          title: "Ch-Videos",
          description: "Get your bank passbook printed with your latest transactions.",
        },
        {
          image: require("@/assets/shortceky.png"),
          title: "ShortCut Key",
          description: "Get your bank passbook printed with your latest transactions.",
        },
      
        {
          image: require("@/assets/questiontype.png"),
          title: "MCQ",
          description: "Get your bank passbook printed with your latest transactions.",
        },
      ],
    
    };
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
