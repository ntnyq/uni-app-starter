# Dependency patches

- `@dcloudio__uni-mp-vite@3.0.0-alpha-5030820261124002.patch` binds the
  plugin context when passing `resolve` to the mini-program component parser.
  Rolldown in Vite 8 requires this context.
- `@wot-ui__ui@2.4.0.patch` declares and assigns the rich-text error's `code`
  property explicitly for compatibility with TypeScript's `erasableSyntaxOnly`.

Review these patches when upgrading the corresponding dependencies and remove
them once the fixes are included upstream.
