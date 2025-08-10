<script>
import HeroSection from './components/HeroSection.svelte';
import WebUiHero from './components/WebUiHero.svelte';
import FeaturesHero from './components/FeaturesHero.svelte';
import Features from './components/Features.svelte';
import Hardware from './components/Hardware.svelte';
import AppHeader from './components/AppHeader.svelte';
import AppFooter from './components/AppFooter.svelte';
</script>

<AppHeader />
<main class="space-y-40 mb-40">
    <HeroSection />
    <WebUiHero />
    <FeaturesHero />
    <Features />
    <Hardware />
</main>
<AppFooter />
