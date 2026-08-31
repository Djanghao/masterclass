# [Javascript/Typescript] Stack solution

**Author:** caephler
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/2146423/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/2146423/)

---

After each operation of putting `abc` into the string, these two invariants is preserved:

1. There must be a contiguous subsequence `abc` within `s` if `s` is valid.
2. The first `c` that we find (going left to right) will always be part of a contiguous subsequence `abc` if `s` is valid.

---
Why is invariant 2 correct? 

Proof by Induction

Base case: "abc" - trivially true
Recursive case: Assume that we have some t such that t is valid and fulfils invariant 2. When we create a new valid string by adding `abc` within t to get `t_left + "abc" + t_right`, either there is a first `c` such that it is part of a contiguous subsequence `abc` in `t_left`, or there isn't. If there is such a `c` in `t_left`, then this statement is trivially true. If there isn't, then our added "abc" will fulfil that criteria and thus the statement is true. Either way, invariant 2 is true.

---

Furthermore, each time a contiguous `abc` is removed from `s`, the invariants should still hold if `s` is valid. This gives rise to the stack approach, where we iterate through `s`:

1. If we observe an `a` or `b`, we push it to a stack.
2. If we observe a `c`, we will pop the top two elements off the stack and check that they are `b` and `a`. If they aren't, then invariant 2 doesn't hold and `s` is invalid.
3. After we finish iterating through `s`, we check that our stack is empty. If it isn't empty, that means that there aren't an equal number of `a`s, `b`s, and `c`s, which means `s` is invalid.

Time Complexity: `O(n)`
Space Complexity: `O(n)`

```
function isValid(s: string): boolean {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'c') {
            const second = stack.pop();
            const first = stack.pop();
            if (second !== 'b' || first !== 'a') {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.length === 0;
}; 
```