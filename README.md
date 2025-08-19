## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Install [Allow CORS](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) Extension

This Extension to Allow CORS: Access-Control-Allow-Origin

https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf

Open Allow CORS Extension
![Open Extension](https://lh3.googleusercontent.com/nfF6PyeLmx7O9cJ0r5pJ9J5Rk0KPlKzZN0FAS2sPso3ClSiTsRWseUXGQAGNa1D-Jk4Z039YPPb6Kz1LCZTBQMSvV2o=s1280-w1280-h800)

Enable Allow CORS Extension
![Enable Allow CORS](https://lh3.googleusercontent.com/1wCZM8Py3IzeamnPWn1E1vW9BvECRS0tTnDbQGBUjFzsJTqxjax7pu7pUZugPd8vfaOtInhldnRQbuCIvCD_ifWR=s800-w800-h500)

## Project Architecture

### Tech Stack

- Vue 3 (Composition API)
- Pinia
- TypeScript
- Tailwind CSS
- Axios
- [Wilayah.id](https://wilayah.id/) (API for Administrative Area in Indonesia)
- [BMKG Open Weather Forecast Data](https://data.bmkg.go.id/prakiraan-cuaca/)
- [Weather Icons](https://erikflowers.github.io/weather-icons/)

### Architecture

Feature-Based Architecture

    src
    ├── features/
    │   ├── weather/
    │   │   ├── components/              # Feature components
    │   │   │   ├── WeatherCard.vue
    │   │   │   └── WeatherForm.vue
    │   │   ├── constants/               # Constant module
    │   │   │   └── index.ts
    │   │   ├── models/                  # Interface and type definitions
    │   │   │   ├── form.ts
    │   │   │   ├── location.ts
    │   │   │   └── weather.ts
    │   │   ├── pages/                   # Feature page
    │   │   │   └── WeatherMain.vue
    │   │   ├── stores/                  # State management
    │   │   │   ├── district.ts
    │   │   │   ├── form.ts
    │   │   │   ├── province.ts
    │   │   │   ├── regency.ts
    │   │   │   ├── village.ts
    │   │   │   └── weather.ts
    │   │   ├── styles/                  # Style module
    │   │   │   └── index.css
    │   │   ├── utils/                   # Small and reusable helper functions
    │   │   │   └── helper.ts
    ├── shared/
    │   ├── styles/                      # Global style
    │   │   ├── base.css
    │   │   └── globals.css
    ├── App.vue
    └── main.ts
