# One liner

**Author:** vinodhec
**Votes:** 0
**Link:** [https://leetcode.com/problems/bind-function-to-context/solutions/4821436/](https://leetcode.com/problems/bind-function-to-context/solutions/4821436/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type Fn = (...args) => any

declare global {
    interface Function {
        bindPolyfill(obj: Record<any, any>): Fn;
    }
}

Function.prototype.bindPolyfill = function(obj): Fn {
    return this.bind(obj)
}
```