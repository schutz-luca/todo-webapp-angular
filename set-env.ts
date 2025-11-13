const { writeFileSync } = require('fs');

const targetPath = './src/environments/environment.prod.ts';
const envConfigFile = `
export const environment = {
  production: true,
  apiUrl: '${process.env["apiUrl"]}'
};
`;

writeFileSync(targetPath, envConfigFile);
console.log(`✅ Environment file generated at ${targetPath}`);