import { Crosshair, Eye, Gamepad2, Medal, Radio, Wand2 } from '@lucide/svelte';
import { asset } from '$app/paths';
import type { Component } from 'svelte';

export interface DesktopModule {
  name: string;
  /** Lucide icon component, used when no `img` is provided. */
  icon?: Component;
  /** Path to an image icon (takes precedence over `icon`). */
  img?: string;
  /** Short, marketing-facing description. NOTE: refine these with real copy. */
  description: string;
}

export const desktopModules: DesktopModule[] = [
  {
    name: 'Sentry',
    icon: Eye,
    description: 'Keep watch and react automatically to triggers and events.',
  },
  {
    name: 'Interception',
    icon: Crosshair,
    description: 'Low-level input interception and custom mapping.',
  },
  {
    name: 'Example Module',
    icon: Wand2,
    description: 'A starter template to build and test your own modules.',
  },
  {
    name: 'ShockOSC',
    img: asset('/icons/ShockOSC.svg'),
    description: 'VRChat / OSC integration for avatar-driven control.',
  },
  {
    name: 'Medal',
    icon: Medal,
    description: 'Medal.tv integration to react to clips and moments.',
  },
  {
    name: 'ForzaShock',
    icon: Gamepad2,
    description: 'Forza Horizon telemetry — react to crashes and impacts.',
  },
  {
    name: 'Local Relay',
    icon: Radio,
    description: 'Connect to a local OpenShock hub or relay.',
  },
];
