# Dependency patches

- `@uni-helper__uni-use.patch`: replace removed VueUse `resolveRef` and
  `resolveUnref` exports with Vue's `toRef` and `toValue`.
- `@dcloudio__uni-mp-vite@3.0.0-alpha-5030120260930001.patch`: bind the
  plugin context when passing `resolve` to the mini-program component parser.
  Rolldown in Vite 8 requires this context.
- `wot-design-uni@1.14.0.patch`: preserve the upload file discriminator with
  an explicit return type and describe normalized action-sheet panels as a
  two-dimensional array. Both changes affect types only.

Review the version-specific patches when upgrading these dependencies and
remove them once the corresponding fixes are included upstream.
