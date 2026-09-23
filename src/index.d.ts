export type ValidationResult = { valid: true } | { valid: false; message: string };
export type Validator<T = unknown> = (value: T) => ValidationResult;
export declare function required(value: unknown, message?: string): ValidationResult;
export declare function email(value: unknown, message?: string): ValidationResult;
export declare function minLength(minimum: number, message?: string): Validator<string>;
export declare function validate<T>(value: T, validators: Validator<T>[]): ValidationResult;
