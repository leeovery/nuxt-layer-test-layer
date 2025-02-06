// type ThemeSlotKeys<T> = T extends { slots: infer S }
//                                ? { [K in keyof S]: string | undefined }
//                                : never;

// export interface ThemeProps<T> {
//   theme?: string;
//   themeClasses?: ThemeSlotKeys<T>;
//   themeOverride?: T;
// }

export interface Theme {
  theme?: string;
}
