# Type 'string[]' is not assignable to type 'string'
This example demonstrates a common TypeScript error that occurs when passing an array of strings to a function that expects a single string. The error message 'Type 'string[]' is not assignable to type 'string'' indicates that the function's parameter is expecting a string, but an array of strings is provided.

## Bug
The `greeter` function takes a string as a parameter and returns a greeting. However, when the array `user` is passed to this function, a compilation error occurs because `user` is a string array (`string[]`), not a string.

## Solution
The solution involves either modifying the `greeter` function to accept an array of strings, or changing how the array is handled to use only one string element.  The first approach changes the function's type signature, and the second handles the array appropriately.