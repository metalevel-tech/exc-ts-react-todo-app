# Create TODO App with ReactJs and Typescript Exercise

This exercise is based on the FreeCodeCamp's tutorial [How to Code Your React App with TypeScript](https://www.freecodecamp.org/news/how-to-code-your-react-app-with-typescript/) - YouTube video: [React & TypeScript - Course for Beginners](https://youtu.be/FJDVKeh7RJI). At all this is my first touch with TypeScript.

## References

- TypeScript: [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) | [Basic Types (deprecated version)](https://www.typescriptlang.org/docs/handbook/basic-types.html).

- [`UseHooks-TS`](https://usehooks-ts.com/) a React hooks library, ready to use, written in typescript.

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks)

- Drag and drop: [React Beautiful DnD](https://react-beautiful-dnd.netlify.app/?path=/story/single-vertical-list--basic).
  - Note, this library will not be maintained in the feature, so probably [React DnD](https://react-dnd.github.io/react-dnd/about) will be better choice for the future projects.
  - Or just use [Hello Pangea DnD](https://github.com/hello-pangea/dnd) which is a maintained fork of React Beautiful DnD. [SO Ref.](https://stackoverflow.com/a/74260444/6543935)

## TODO Notes :)

- [ ] Move the todos from left to right when mark them as done.
- [ ] Move the todos from right to left when edit them them.
- [ ] Implement useReducer Hook with Typescript:
- [React & TypeScript - Course for Beginners [1:03:23]](https://youtu.be/FJDVKeh7RJI?t=3803)
- [React Shopping Cart Tutorial | Context API with useReducer Hook in React JS](https://youtu.be/HptuMAUaNGk)
- [React Context & Hooks Tutorial #19 - Reducers, Actions & State](https://youtu.be/uXWycyeTeCs)

## Setup the Project

<details>

### Install ReactJs and Typescript by Vite

```bash
npm create vite@latest
# ✔ Project name: … exc-ts-react-todo-app
# ✔ Select a framework: › React
# ✔ Select a variant: › TypeScript
cd exc-ts-react-todo-app/
npm install
```

- Create start command in [`package.json`](package.json) file as follows:

  ```json
  "scripts": {
      "start": "vite --host 0.0.0.0 --port 3000",
  }
  ```

- Clean the `src/` and `public/` directories and start working on the project.

### Install helpers: TailwindCSS and so on

```bash
npm i --save-dev tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```bash
npm i @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
npm i @headlessui/react
npm i react-icons
npm i @heroicons/react
```

<s>

```bash
npm i react-beautiful-dnd
npm i @types/react-beautiful-dnd
```

</s>

```bash
npm i @hello-pangea/dnd
```

**References:**

- <https://tailwindui.com/>
- <https://react-icons.github.io/react-icons/>
- <https://headlessui.com/>
- <https://heroicons.com/>

### Setup the Git Repository and Push to GitHub

```bash
git config --global init.defaultBranch master
git init
git add -A
git commit -m "Initial commit"
git branch -M master
git remote add origin git@github.com:metalevel-tech/exc-ts-react-todo-app.git
git push -u origin master
```

### Automation with GitHub Actions

- [Deploy to GitHub Pages and Automate with GitHub Actions](https://github.com/metalevel-tech/exc-js-react-tic-tac-toe#deploy-to-github-pages-with-github-actions)

</details>
