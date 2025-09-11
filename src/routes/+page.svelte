<script>
  import Features from '$lib/components/Features.svelte';
  import FeaturesHero from '$lib/components/FeaturesHero.svelte';
  import Hardware from '$lib/components/Hardware.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import WebUiHero from '$lib/components/WebUiHero.svelte';
</script>

<main class="space-y-40 mb-40">
  <HeroSection />
  <WebUiHero />
  <FeaturesHero />
  <Features />
  <Hardware />
</main>
