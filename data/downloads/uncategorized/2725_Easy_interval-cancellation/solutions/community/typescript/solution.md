# Pass the args without arrow function

**Author:** MinnDev
**Votes:** 5
**Link:** [https://leetcode.com/problems/interval-cancellation/solutions/3805614/](https://leetcode.com/problems/interval-cancellation/solutions/3805614/)

---

# Intuition

The setInterval function can accept the arguments without creating a closure using arrow functions. Simply pass them using the spread operator: `setInterval(fn, t, ...args)`.

# Code
```
function cancellable(fn: Function, args: any[], t: number): Function {
    fn(...args);
    const handle = setInterval(fn, t, ...args);
    return () => clearInterval(handle);
};
```