#!/usr/bin/env node
const fs = require('fs');

const [componentNameArg] = process.argv.slice(2);

const addEOL = (file) => file.concat('\n');

const generateComponent = (componentNameArg) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const lowerize = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
  };

  const templateReact = [
    `import styles from './%{componentName}.module.css';\n`,
    `interface %{componentNameCapitalized}Props {`,
    `  children?: React.ReactNode;`,
    `};\n`,
    `export default function %{componentNameCapitalized}({ children, ...props }: %{componentNameCapitalized}Props) {`,
    `  return (`,
    `    <div className={styles.%{componentName}} {...props}>`,
    `      {children}`,
    `    </div>`,
    `  );`,
    `}`,
  ].join('\n');

  const templateCSS = [
    `.%{componentName} {`,
    `  /* Make your magic! */`,
    `  display: flex;`,
    `}`,
  ].join('\n');

  const templateTest = [
    `import { render, screen } from '@testing-library/react';\n`,
    `import %{componentNameCapitalized} from './index';\n`,
    `describe('%{componentNameCapitalized} component', () => {`,
    `  it('should display a "start testing" into component', () => {`,
    `    render(<%{componentNameCapitalized} />);`,
    `    const element = screen.getByText(/start testing/i);`,
    `    expect(element).toBeInTheDocument();`,
    `  });`,
    `});`,
  ].join('\n');

  const templatesDictionary = {
    css: templateCSS,
    react: templateReact,
    test: templateTest,
  };

  const getTemplate = (
    template,
    { componentName, componentNameCapitalized }
  ) => {
    const templateFile = addEOL(templatesDictionary[template]);

    return templateFile
      .replaceAll('%{componentName}', componentName)
      .replaceAll('%{componentNameCapitalized}', componentNameCapitalized);
  };

  const componentName = lowerize(componentNameArg);
  const componentNameCapitalized = capitalize(componentName);

  const componentPath = `src/${componentName}/src`;

  const pathReact = `${componentPath}/index.tsx`;
  const pathCSS = `${componentPath}/${componentName}.module.css`;
  const pathTest = `${componentPath}/index.test.tsx`;

  const templates = {
    react: getTemplate('react', { componentName, componentNameCapitalized }),
    css: getTemplate('css', { componentName, componentNameCapitalized }),
    test: getTemplate('test', { componentName, componentNameCapitalized }),
  };

  fs.promises
    .mkdir(componentPath, { recursive: false })
    .then(() => {
      Promise.all([
        fs.promises.writeFile(pathReact, templates.react),
        fs.promises.writeFile(pathCSS, templates.css),
        fs.promises.writeFile(pathTest, templates.test),
      ])
        .then(() => {
          console.log(
            '\x1b[32m%s\x1b[0m',
            'info ',
            `- Component ${componentName} files generated!\n`
          );
        })
        .catch((error) => {
          if (error) throw new Error(`\x1b[31m\n\n${error}\n\n`);
        });
    })
    .catch((error) => {
      console.log('\n\x1b[31m%s\x1b[0m', 'error', `- ${error}\n`);
    });
};

if (!componentNameArg) {
  console.log(
    '\n\x1b[31m%s\x1b[0m',
    'error',
    '- Component name is required!\n'
  );
  process.exit(-1);
} else {
  generateComponent(componentNameArg);
}
