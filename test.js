import assert from "node:assert/strict";
import test from "node:test";
import { email, minLength, required, validate } from "./src/index.js";
test("validates required values", () => assert.equal(required(" ").valid, false));
test("validates email addresses", () => assert.equal(email("hello@sandsoftware.nl").valid, true));
test("stops at the first failed validator", () => assert.equal(validate("no", [required, minLength(3)]).valid, false));
