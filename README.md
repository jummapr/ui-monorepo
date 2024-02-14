## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/jummapr/ui-monorepo.git
   ```

2. Install dependencies:

   ```
   cd ui-monorepo
   npm install
   ```

3. Start the project:

   ```
   npx lerna run start
   ```

4. Open your browser and go to [http://localhost:1234/](http://localhost:1234/) to see the example web page.

## Project Structure

The project follows a monorepo structure using Lerna:

- `packages/my-ui-library`: Contains the main UI library implementation.
- `packages/example`: An example web page using the UI library.

### Technologies Used

- [Snabbdom: ](https://github.com/snabbdom/snabbdom) A virtual DOM library for creating efficient UI components.
- [Lerna: ](https://lerna.js.org/) A tool for managing JavaScript projects with multiple packages.

- [Parcel](https://parceljs.org/): A fast, zero-configuration web application bundler.

### Best Practices

The project adheres to best coding practices:

- Descriptive Naming: Functions and variables have descriptive names following camelCase conventions.
- Consistent Formatting: Code maintains consistent indentation and spacing.
- Comments: Code includes comments for complex logic or explanations where necessary.

### Bundling with Parcel

The project uses Parcel as a web application bundler to bundle and serve the UI library and example web page.
