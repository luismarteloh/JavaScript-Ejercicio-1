import chalk from 'chalk';
import { suma, multiplica } from "./controller.js";

const a = suma(1,2);
const b = suma(4,5);

console.log(chalk.green(multiplica(a, b)));