<script>
  import Features from '$lib/components/Features.svelte';
  import FeaturesHero from '$lib/components/FeaturesHero.svelte';
  import Hardware from '$lib/components/Hardware.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import OpenShockDesktop from '$lib/components/OpenShockDesktop.svelte';
  import WebUiHero from '$lib/components/WebUiHero.svelte';
</script>

<main class="space-y-20 mb-40">
  <HeroSection />
  <WebUiHero />
  <FeaturesHero />
  <OpenShockDesktop />
  <Features />
  <Hardware />
</main>
