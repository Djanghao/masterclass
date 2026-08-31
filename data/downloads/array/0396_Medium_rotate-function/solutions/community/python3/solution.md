# Python 3 (Py3.8) | Math, O(n) | Explanation

**Author:** idontknoooo
**Votes:** 6
**Link:** [https://leetcode.com/problems/rotate-function/solutions/857056/](https://leetcode.com/problems/rotate-function/solutions/857056/)

---

### Explanation
- start with an initial value without any rotation, store it in `cur_sum`
- In each iteration
	- Every number except the last one will be added again (`+s-A[n-1-i]`)
	- `The current last number * (n-1)` will be reduced from `cur_sum`
		- `A[n-1-i] * (n-1)`
	- thus, `cur_sum = cur_sum + s - A[n-1-i] - A[n-1-i] * (n-1) = cur_sum + s - A[n-1-i] * n`
- Iterate `n` times and return the maximum
- Time complexity:
	- `O(n)` to initialize
	- `O(n)` to try all rotations
	- Total: `O(2n) -> O(n)`
- Note that Walrus Operator (`:=`) is used during iteration, need Python 3.8 if you try it in your local machine
### Implementation
```
class Solution:
    def maxRotateFunction(self, A: List[int]) -> int:
        s, n = sum(A), len(A)
        cur_sum = sum([i*j for i, j in enumerate(A)])
        ans = cur_sum
        for i in range(n): ans = max(ans, cur_sum := cur_sum + s-A[n-1-i]*n)
        return ans
```