# @sandsoftwaresolutions/validation

[![CI](https://github.com/SandSoftwareSolutions/ss-validation/actions/workflows/ci.yml/badge.svg)](https://github.com/SandSoftwareSolutions/ss-validation/actions/workflows/ci.yml)

Tiny, composable form and API-input validators with no runtime dependencies.

## Install

```bash
npm install @sandsoftwaresolutions/validation
```

## Usage

```js
import { email, minLength, required, validate } from "@sandsoftwaresolutions/validation";

const result = validate(form.password, [required, minLength(12)]);
if (!result.valid) showError(result.message);

validate(form.email, [required, email]);
```

## API

- `required(value, message?)` rejects `null`, `undefined`, and empty/whitespace-only strings.
- `email(value, message?)` performs a lightweight email-address check.
- `minLength(minimum, message?)` creates a string validator.
- `validate(value, validators)` runs validators in order and returns the first failure.

Every result is either `{ valid: true }` or `{ valid: false, message }`, which makes it easy to use in forms and HTTP handlers. Validate and normalize security-sensitive input on the server as well.
