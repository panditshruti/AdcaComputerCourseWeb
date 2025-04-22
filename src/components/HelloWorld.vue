<template>
  <div class="min-h-screen bg-darkblue flex flex-col items-center justify-between relative">
    <!-- Background -->
    <div class="cut-background absolute inset-0 z-0"></div>

    <!-- Text Section Positioned at the Top -->
    <div class="absolute top-8 left-0 w-full text-center lg:text-left lg:pl-12 z-10">
      <h1 class="text-4xl lg:text-6xl font-bold text-blue-300 mb-2">Welcome to</h1>
      <h2 class="text-3xl lg:text-5xl font-bold text-blue-300 mb-4">ADCA Computer Course</h2>
      <h2 class="text-3xl lg:text-5xl font-bold text-blue-300 mb-4">Course</h2>
    </div>

    <!-- Content Section -->
    <div class="content-container relative z-10 text-white p-8 flex flex-col lg:flex-row items-center gap-12 mt-40">
      <!-- Text Section -->
      <div class="text-center lg:text-left flex-grow lg:w-2/3">
        <p class="text-md lg:text-lg mb-6">
          In this app and website , you will find all the notes related to computer courses, along with objective questions available chapter-wise. You will also get to play quizzes related 
          to computers, and typing codes are available in both Hindi and English.
        </p>
        <p> This app is very helpful for computer students.</p>
      </div>

      <!-- Circle Image Section -->
      <div class="image-container flex-shrink-0">
        <div class="glow-ring rounded-full overflow-hidden">
          <img
            src="@/assets/logoadca.png"
            alt="Profile"
            class="profile-image"
          />
        </div>
      </div>
    </div>

    <!-- Install Button at the Bottom -->
    <div class="button-container w-full flex justify-start pl-8 mb-4">
  <button class="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-xl hover:bg-blue-700 transition">
    Install Mobile App
  </button>
</div>
  </div>
</template>

<script>
export default {
  name: "PortfolioHeader",
};
</script>

<style scoped>
/* Background Style with a Cut */
.cut-background {
  background: linear-gradient(135deg, #0f1c2e 50%, #1e2a38 50%);
  clip-path: polygon(10 50%, 100% 40%, 100% 90%, 30% 100%);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0; /* Behind the content */
}

/* Glow Ring for Circle Image */
.glow-ring {
  padding: 10px;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(29, 37, 59), /* Magenta */
    rgba(29, 37, 59), /* Cyan */
    rgb(29, 37, 59) /* Yellow */
  );
  box-shadow: 0 0 15px rgba(0, 21, 255, 0.7), 0 0 30px rgba(79, 120, 243, 0.7),
    0 0 45px rgba(157, 248, 237, 0.7);
  border-radius: 50%;
}

/* Profile Image */
.profile-image {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
}

/* General Page Styling */
.bg-darkblue {
  background-color: #0f1c2e;
}

.content-container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

h1, h2, p {
  margin: 0;
}

/* Adjustments for Top Positioning */
.absolute {
  position: absolute;
}

/* Ensures the button stays at the bottom */
.button-container {
  position: absolute;
  bottom: 80px; /* Adjust the bottom margin as needed */
  width: 100%;
  text-align: start;
}
</style>
