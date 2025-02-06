<script lang="ts">
  import type { ButtonHTMLAttributes } from 'vue';

  // NOTE: relative import works...
  import type { Theme } from '../ui/createTheme';

  // BUT: using alias causes issues with the type inference (somehow).
  // import type { Theme } from '@base/ui/createTheme';

  export interface ButtonProps extends Theme {
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
