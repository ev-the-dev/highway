import { fullConfig } from "./configs";

/**
 * TODO: expose function that accepts path to tsconfig to apply to the parser
 * AND get rid of more dependencies
 * MAKE sure CI/CD is using NODE_ENV=production
 */
const configs = {
  full: fullConfig,
};

export { configs };
