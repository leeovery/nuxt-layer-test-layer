<script lang="ts">
  import type { ButtonHTMLAttributes } from 'vue';
  // relative import works
  // import type { ThemeProps } from '../ui/createTheme';
  // using alias causes issues with the type inference somehow.
  import type { ThemeProps } from '@base/ui/createTheme';

  export interface ButtonProps extends ThemeProps<{ variants: string }> {
    type?: ButtonHTMLAttributes['type'];
    disabled?: boolean;
  }

  
</script>

<script lang="ts" setup>
  withDefaults(defineProps<ButtonProps>(), {
    type: 'button',
  });
</script>

<template>
  <button :disabled="disabled" :type="type">
    <slot />
    type: {{ type }}
  </button>
</template>

<style scoped>

</style>
