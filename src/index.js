export function required(value, message = "This field is required") {
  const valid = !(value == null || (typeof value === "string" && !value.trim()));
  return valid ? { valid: true } : { valid: false, message };
}

export function email(value, message = "Enter a valid email address") {
  const valid = typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return valid ? { valid: true } : { valid: false, message };
}

export function minLength(minimum, message = `Must be at least ${minimum} characters`) {
  if (!Number.isSafeInteger(minimum) || minimum < 0) throw new TypeError("minimum must be a non-negative integer");
  return (value) => typeof value === "string" && value.length >= minimum ? { valid: true } : { valid: false, message };
}

export function validate(value, validators) {
  if (!Array.isArray(validators)) throw new TypeError("validators must be an array");
  for (const validator of validators) {
    const result = validator(value);
    if (!result.valid) return result;
  }
  return { valid: true };
}
