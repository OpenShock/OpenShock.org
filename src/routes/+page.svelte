<script>
  import Features from '$lib/components/Features.svelte';
  import FeaturesHero from '$lib/components/FeaturesHero.svelte';
  import Hardware from '$lib/components/Hardware.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import Partners from '$lib/components/Partners.svelte';
  import WebUiHero from '$lib/components/WebUiHero.svelte';
</script>

<main class="space-y-20 mb-40">
  <HeroSection />
  <WebUiHero />
  <FeaturesHero />
  <Features />
  <Hardware />
  <Partners />
</main>
