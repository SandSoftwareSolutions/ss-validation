# @sandsoftwaresolutions/validation

Tiny, composable validation helpers without dependencies.

```js
import { email, minLength, required, validate } from "@sandsoftwaresolutions/validation";

validate(form.email, [required, email]);
validate(form.password, [required, minLength(12)]);
```
