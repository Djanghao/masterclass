# 🚀🚀🚀  O(log n) time || Fibonacci sequence

**Author:** xkatianx
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/5777653/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/5777653/)

---

# Complexity
- Time complexity: $O(\\log n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(\\log n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function getMaximumGenerated(n: number): number {
    const inputSize = 32

    const fib = [0, 1]
    for (let i = 0; i < inputSize; i++) fib.push(fib.at(-2)! + fib.at(-1)!)

    let ans = 0
    let [zero, one] = [1, 0]

    for (let shift = inputSize - 1; shift >= 0; shift--) {
        const mask = 1 << shift
        if ((mask & n) === 0) zero += one
        else {
            ans = Math.max(ans, zero * fib[shift + 1] + one * fib[shift + 2])
            one += zero
        }
    }

    return ans
}

```
```python []
@cache
def fib(i):
    return i if i < 2 else fib(i - 2) + fib(i - 1)

class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        ans, zero, one = 0, 1, 0

        for shift in reversed(range(7)):
            if n >> shift & 1 == 0:
                zero += one
            else:
                ans = max(ans, zero * fib(shift + 1) + one * fib(shift + 2))
                one += zero

        return ans
```