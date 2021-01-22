# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.
This project is using Angular Material and Tailwind CSS framework with Angular Universal to use server side rendering. [Demo](http://raj-spacex.herokuapp.com/)

Key Features:
  1. The initial launch programs landing page is server side rendered.
  2. Applied filters changes the URL and update the Page with latest records without refreshing the page.
  3. If the page is refreshed with the applied filters in the URL – the resulting page is server side rendered & subsequent filters are again client side rendered.
  4. Responsive Behavior. Breakpoints - Mobile: <700px, Tablet:700px - 1024px, Desktop:1024px - 1440px
  5. Beyond 1440px viewport,  the content is centered align with a max width of 1440.

Using Angular Material helps in keeping styling consistent for entire application. 
The Tailwind CSS framework uses a default mobile-first approach. Tailwind is Highly Customizable. One can use override default configurations with a tailwind.config.js file. Tailwind also performs PurgeCSS, which in turns help in reducing the file size considerably by scanning the HTML and removing unused classes.
Using server side rendering you can take following advantages:

1. Facilitate web crawlers through search engine optimization (SEO)
2. Improve performance on mobile and low-powered devices
3. Show the first page quickly with a first-contentful paint (FCP)

## Development server

Run `npm run dev:ssr` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build:ssr` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

This project is using Angular Material and Tailwind CSS framework with Angular Universal to use server side rendering. Using server side rendering you can take following advantages:

1. Facilitate web crawlers through search engine optimization (SEO)
2. Improve performance on mobile and low-powered devices
3. Show the first page quickly with a first-contentful paint (FCP)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
