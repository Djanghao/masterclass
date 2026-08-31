# [TS] Boolean Flag, 75ms, 43.2MB

**Author:** Ajna2
**Votes:** 10
**Link:** [https://leetcode.com/problems/timeout-cancellation/solutions/3590547/](https://leetcode.com/problems/timeout-cancellation/solutions/3590547/)

---

This problem requires little more than following the instructions, so we will:
* create a boolean flag `willFnCall` initially set to `true`;
* set a timeout in `t` milliseconds to call `fn` with `args`, but only if `willFnCall` is still `true`;
* `return` a function that sets the flag to `false` when called.

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
```ts
const cancellable = (fn: Function, args: any[], t: number): Function => {
    let willFnCall = true;
    setTimeout(() => willFnCall && fn(...args), t);
    return () => willFnCall = false;
};
```