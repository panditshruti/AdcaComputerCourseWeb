<template>
  <div class="min-h-screen bg-cover bg-center bg-darkblue flex items-center justify-center">
    <div class="container mx-auto flex flex-col lg:flex-row items-center gap-12 text-white">
      <!-- Text Section -->
      <div class="text-center lg:text-left flex-grow lg:w-2/3">
        <h1 class="text-8xl lg:text-7xl font-bold text-black mb-4">Welcome to ADCA Computer Course</h1>
  
        
        <p class="text-md text-black lg:text-lg mb-6">
          I'm an Android software developer and web developer and designer with extensive experience for over 
          3 years. My expertise is in creating Android apps and websites, 
          as well as frontend and backend development and design, and much more.
        </p>

        <!-- Social Media Links -->
<!-- Social Media Links -->
<div class="flex justify-center lg:justify-start gap-4 mb-6">
  <!-- Facebook -->
  <a href="https://www.facebook.com/yourprofile" target="_blank" class="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-500 transition">
    <i class="fab fa-facebook-f"></i>
  </a>
  <!-- WhatsApp -->
  <a href="https://wa.me/7739717389" target="_blank" class="bg-green-700 w-12 h-12 flex items-center justify-center rounded-full hover:bg-green-400 transition">
    <i class="fab fa-whatsapp"></i>
  </a>
  <!-- Instagram -->
  <a href="https://www.instagram.com/skpandit413" target="_blank" class="bg-gradient-to-r from-pink-500 to-orange-600 w-12 h-12 flex items-center justify-center rounded-full hover:opacity-80 transition">
    <i class="fab fa-instagram"></i>
  </a>
</div>

        <!-- More About Me Button -->
        <button class="bg-blue-600 text-white font-bold py-2 px-6 rounded-full animate-bounce shadow-xl shadow-blue-400 hover:bg-blue-700 transition">
          More About Me
        </button>
      </div>

      <!-- Image Section -->
      <div class="image-container lg:w-1/3 flex-shrink-0">
        <div class="glow-ring mx-auto rounded-full overflow-hidden">
          <img
            src="@/assets/logoadca.png"
            alt="Profile"
            class="profile-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioHeader",
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

.glow-ring {
  padding: 10px;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgb(55, 61, 245), /* Magenta */
    rgba(44, 93, 243, 0.5), /* Cyan */
    rgb(144, 55, 245)  /* Yellow */
  );
  box-shadow: 0 0 15px rgba(33, 146, 227, 0.7), 0 0 30px rgba(79, 120, 243, 0.7),
    0 0 45px rgba(157, 248, 237, 0.7);
  border-radius: 50%;
}

.profile-image {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 10%;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Keep the image centered vertically */
}

.container {
  max-width: 1200px;
}
</style>
