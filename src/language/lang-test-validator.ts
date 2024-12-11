import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { LangTestAstType, Model } from './generated/ast.js';
import type { LangTestServices } from './lang-test-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: LangTestServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.LangTestValidator;
    const checks: ValidationChecks<LangTestAstType> = {
        Model: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class LangTestValidator {

    checkPersonStartsWithCapital(model: Model, accept: ValidationAcceptor): void {
        console.log("validator")
        // if (person.name) {
        //     const firstChar = person.name.substring(0, 1);
        //     if (firstChar.toUpperCase() !== firstChar) {
        //         accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
        //     }
        // }
    }

}
