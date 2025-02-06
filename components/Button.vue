<script lang="ts">
  import type { ButtonHTMLAttributes } from 'vue';

  export type ThemeSlotKeys<T> = T extends { slots: infer S }
                                 ? { [K in keyof S]: string | undefined }
                                 : never;

  export interface ThemeProps<T> {
    theme?: string;
    themeClasses?: ThemeSlotKeys<T>;
    themeOverride?: T;
  }

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
