import path from "path";
import fs from "fs";
import type { PlopTypes } from "@turbo/gen";

interface IAnswers{
  name?: string; 
  camelCase?: string, 
  pascelCase?: string,
  language?: "jsx" | 'tsx' 
}

function camelize(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function toPascalCase(string: string) {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

const formatName: PlopTypes.CustomActionFunction = async (answers: IAnswers) => {
  console.log("answers", answers)
  if (!answers.name) {
    return "no name provided, skipping text type";
  }
  answers.camelCase = camelize(answers.name);
  answers.pascelCase = toPascalCase(answers.name)


  return 'Finished forming name!';
}

function createComponentDirectory(plop: PlopTypes.NodePlopAPI, answers: IAnswers) {
  if (!answers.pascelCase) {
    return "no name provided, skipping fixture directory creation";
  }

  const directory = path.join(
    // resolves to the root of the current workspace
    plop.getDestBasePath(),
    answers.pascelCase
  );
    console.log("basePath", plop.getDestBasePath())

  fs.mkdirSync(directory);

  return `Created ${directory} directory for ${answers.name}`;
}

function updateBarrelFile(plop: PlopTypes.NodePlopAPI, answers: IAnswers){
  const barrelFilePath = path.join(
    // resolves to the root of the current workspace
    plop.getDestBasePath(),
    "index.tsx"
  );
  let data = ''
  try {
    data = fs.readFileSync(barrelFilePath, 'utf8');
    console.log(data);
    data = `${data}export * from "./${answers.pascelCase}/${answers.pascelCase}";`
    fs.writeFileSync(barrelFilePath, data)
  } catch (err) {
    console.error(err);
  }

  return `Updated barrel file`;
}


export function componentGenerator(plop: PlopTypes.NodePlopAPI){
  return {
  description: "Generate a new component and associated files",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is the component name?",
    },
    {
      type: "list",
      name: "language",
      message: "What language should the component use?",
      choices: [
        {
          name: 'Javascript',
          value: 'jsx',
        },
        {
          name: 'Typescript',
          value: 'tsx',
        },
      ]
    },
  ],
  actions: [
    formatName,
    function (answers: IAnswers){
      return createComponentDirectory(plop, answers)
    },
    {
      type: "add",
      path: "{{pascelCase}}/{{pascelCase}}.{{language}}",
      templateFile: "templates/component-{{language}}.hbs",
    },
    {
      type: "add",
      path: "{{pascelCase}}/{{pascelCase}}.stories.{{language}}",
      templateFile: "templates/story-{{language}}.hbs",
    },
    {
      type: "add",
      path: "{{pascelCase}}/{{pascelCase}}.spec.{{language}}",
      templateFile: "templates/test.hbs",
    },
    function (answers: IAnswers){
      return updateBarrelFile(plop, answers)
    },
  ],
}}