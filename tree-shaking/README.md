## Findings

It looks like `@meemoo/react-components` is already being tree-shaken to some extent;

Clean -> after install -> using Badge -> adding ColorPicker -> adding Box
5.56 kB -> 5.56 kB -> 61.9 kB -> 63.5 kB -> 63.6 kB

### Before anything

Page                                       Size     First Load JS
┌ ○ /                                      **5.56 kB**        76.5 kB
├   └ css/149b18973e5508c7.css             655 B
├   /_app                                  0 B            70.9 kB
├ ○ /404                                   194 B          71.1 kB
└ λ /api/hello                             0 B            70.9 kB
+ First Load JS shared by all              70.9 kB
  ├ chunks/framework-e70c6273bfe3f237.js   42 kB
  ├ chunks/main-a054bbf31fb90f6a.js        27.6 kB
  ├ chunks/pages/_app-a9a85d9fc0642005.js  496 B
  ├ chunks/webpack-69bfa6990bb9e155.js     769 B
  └ css/27d177a30947857b.css               194 B

### After install

Page                                       Size     First Load JS
┌ ○ /                                      **5.56 kB**        76.5 kB
├   └ css/149b18973e5508c7.css             655 B
├   /_app                                  0 B            70.9 kB
├ ○ /404                                   194 B          71.1 kB
└ λ /api/hello                             0 B            70.9 kB
+ First Load JS shared by all              70.9 kB
  ├ chunks/framework-e70c6273bfe3f237.js   42 kB
  ├ chunks/main-a054bbf31fb90f6a.js        27.6 kB
  ├ chunks/pages/_app-a9a85d9fc0642005.js  496 B
  ├ chunks/webpack-69bfa6990bb9e155.js     769 B
  └ css/27d177a30947857b.css               194 B

### After using Badge from 1.20

Page                                       Size     First Load JS
┌ ○ /                                      **61.9 kB**         134 kB
├   └ css/149b18973e5508c7.css             655 B
├   /_app                                  0 B              72 kB
├ ○ /404                                   194 B          72.2 kB
└ λ /api/hello                             0 B              72 kB
+ First Load JS shared by all              72 kB
  ├ chunks/framework-e70c6273bfe3f237.js   42 kB
  ├ chunks/main-a054bbf31fb90f6a.js        27.6 kB
  ├ chunks/pages/_app-a9a85d9fc0642005.js  496 B
  ├ chunks/webpack-70ea6eba2c435b0d.js     1.81 kB
  └ css/27d177a30947857b.css               194 B

### After adding ColorPicker from 1.20

Page                                       Size     First Load JS
┌ ○ /                                      **63.5 kB**         135 kB
├   └ css/149b18973e5508c7.css             655 B
├   /_app                                  0 B              72 kB
├ ○ /404                                   194 B          72.2 kB
└ λ /api/hello                             0 B              72 kB
+ First Load JS shared by all              72 kB
  ├ chunks/framework-e70c6273bfe3f237.js   42 kB
  ├ chunks/main-a054bbf31fb90f6a.js        27.6 kB
  ├ chunks/pages/_app-a9a85d9fc0642005.js  496 B
  ├ chunks/webpack-70ea6eba2c435b0d.js     1.81 kB
  └ css/27d177a30947857b.css               194 B
  
### After adding Box from 1.20

Page                                       Size     First Load JS
┌ ○ /                                      **63.6 kB**         136 kB
├   └ css/149b18973e5508c7.css             655 B
├   /_app                                  0 B              72 kB
├ ○ /404                                   194 B          72.2 kB
└ λ /api/hello                             0 B              72 kB
+ First Load JS shared by all              72 kB
  ├ chunks/framework-e70c6273bfe3f237.js   42 kB
  ├ chunks/main-a054bbf31fb90f6a.js        27.6 kB
  ├ chunks/pages/_app-a9a85d9fc0642005.js  496 B
  ├ chunks/webpack-70ea6eba2c435b0d.js     1.81 kB
  └ css/27d177a30947857b.css               194 B

### After switching to 1.21.1

Page                                       Size     First Load JS
┌ ○ /                                      **63.6 kB**         136 kB
├   └ css/149b18973e5508c7.css             655 B
├   /_app                                  0 B              72 kB
├ ○ /404                                   194 B          72.2 kB
└ λ /api/hello                             0 B              72 kB
+ First Load JS shared by all              72 kB
  ├ chunks/framework-e70c6273bfe3f237.js   42 kB
  ├ chunks/main-a054bbf31fb90f6a.js        27.6 kB
  ├ chunks/pages/_app-a9a85d9fc0642005.js  496 B
  ├ chunks/webpack-51441228d2eb5434.js     1.82 kB
  └ css/27d177a30947857b.css               194 B

### After creating an additional page

Page                                       Size     First Load JS
┌ ○ /                                      5.63 kB         136 kB
├   /_app                                  0 B              72 kB
├ ○ /404                                   194 B          72.2 kB
├ λ /api/hello                             0 B              72 kB
└ ○ /badge                                 454 B           131 kB
+ First Load JS shared by all              72 kB
  ├ chunks/framework-e70c6273bfe3f237.js   42 kB
  ├ chunks/main-a054bbf31fb90f6a.js        27.6 kB
  ├ chunks/pages/_app-a9a85d9fc0642005.js  496 B
  ├ chunks/webpack-b83043109c29f5a8.js     1.82 kB
  └ css/27d177a30947857b.css               194 B