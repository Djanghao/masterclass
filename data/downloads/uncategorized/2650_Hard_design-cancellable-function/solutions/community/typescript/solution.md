# 🟨JavaScript || ✨☑TypeScript ||✔✔ Simple solution|| 👌with explain

**Author:** amrcool
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-cancellable-function/solutions/3443563/](https://leetcode.com/problems/design-cancellable-function/solutions/3443563/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Based on the given code snippet, the `cancellable` function seems to wrap a generator function in a way that allows it to be cancelled using a returned function. The generator function is executed asynchronously using promises and `await`, and the cancellation is implemented by rejecting a cancellation promise that is created inside the `cancellable` function.

To solve this problem, one could start by understanding how generators work in JavaScript/TypeScript and how to use the `Generator` type. Then, one could analyze the given code snippet and try to understand how it works, and what are the roles of the `cancel` function and the `cancelPromise`. Finally, one could try to replicate the same functionality in a different way or extend the existing code to fit a specific use case.
# Approach
<!-- Describe your approach to solving the problem. -->
general approach that one use to solve a problem:

1. Understand the problem: Read and analyze the problem statement, requirements, and constraints. Ensure that you understand the problem's scope, expected output, and any input constraints.

2. Research: Look for relevant information, algorithms, libraries, and tools that could help solve the problem. Check for any existing solutions, and learn from their approaches.

3. Plan and design: Based on your understanding of the problem and the available resources, plan your approach and design your solution. Break down the problem into smaller sub-problems and identify the key components and functions that you need.

4. Implement: Start implementing your solution in code. Follow best practices, write clean, modular, and maintainable code. Test your code frequently and make adjustments as needed.

5. Test and validate: Test your code thoroughly, both manually and using automated tests. Validate your code's output against the problem requirements and ensure that it meets the expected results.

6. Optimize and improve: Once you have a working solution, look for ways to optimize and improve it. Consider factors such as performance, scalability, security, and usability.

7. Document and share: Document your code, including its purpose, usage, and any dependencies. Share your code with others, and contribute to the community by sharing your insights, solutions, and experiences.
# Complexity
The time and space complexity of the `cancellable` function depend on the implementation details and the behavior of the generator function passed as a parameter. However, we can analyze the time and space complexity of the `cancellable` function itself:
- Time complexity: The `cancellable` function creates a new promise and uses the `Promise.race` method to race between the generator's next value and the cancellation promise. The `Promise.race` method has a time complexity of O(n), where n is the number of promises passed as arguments. The generator function is executed synchronously until it reaches the first `yield` statement, so its time complexity depends on its implementation. Therefore, the time complexity of the `cancellable` function is at least O(1) and at most O(n), where n is the number of promises involved in the race.

- Space complexity: The `cancellable` function creates two promises: the cancellation promise and the promise returned by the async function. It also creates a `cancel` function and a `next` variable used to iterate over the generator function. The space complexity of the `cancellable` function is therefore O(1), as the amount of memory used by the function does not depend on the input size. However, the space complexity of the generator function may be higher, depending on its implementation and the amount of data it processes.

```javascript []
const cancellable = (generator) => {
  let cancel;
  const cancelPromise = new Promise((_, reject) => {
    cancel = () => reject("Cancelled");
  });
  // Every Promise rejection has to be caught.
  cancelPromise.catch(() => {});

  const promise = (async () => {
    let next = generator.next();
    while (!next.done) {
      try {
        next = generator.next(await Promise.race([next.value, cancelPromise]));
      } catch (e) {
        next = generator.throw(e);
      }
    }
    return next.value;
  })();

  return [cancel, promise];
};
```
```TypeScript []
const cancellable = <T>(generator: Generator): [() => void, Promise<T>] => {
  let cancel: () => void;
  const cancelPromise = new Promise<never>((_, reject) => {
    cancel = () => reject("Cancelled");
  });
  // Every Promise rejection has to be caught.
  cancelPromise.catch(() => {});

  const promise = (async (): Promise<T> => {
    let next = generator.next();
    while (!next.done) {
      try {
        next = generator.next(await Promise.race([next.value, cancelPromise]));
      } catch (e) {
        next = generator.throw(e);
      }
    }
    return next.value;
  })();

  return [cancel, promise];
};
