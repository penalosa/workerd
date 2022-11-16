import path from 'path';
import fs from 'fs';

function buildTypesPackage() {
  const pjPath = path.join('npm', 'workers-types', 'package.json');
  const package_json = JSON.parse(fs.readFileSync(pjPath, 'utf8'));
  package_json.version = process.env.WORKERD_VERSION;
  fs.writeFileSync(pjPath, JSON.stringify(package_json, null, 2) + '\n');
}

buildTypesPackage();
