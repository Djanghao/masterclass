# Faster than 100% | 1 line of code | Ruby

**Author:** ahacop
**Votes:** 3
**Link:** [https://leetcode.com/problems/fibonacci-number/solutions/2206637/](https://leetcode.com/problems/fibonacci-number/solutions/2206637/)

---

```
def fib(n, memo = {0 => 0, 1 => 1, 2 => 1})
  memo[n] ||= fib(n-1, memo) + fib(n-2, memo)
end
```