# Python 3 | BFS | Explanation

**Author:** idontknoooo
**Votes:** 4
**Link:** [https://leetcode.com/problems/stepping-numbers/solutions/1323844/](https://leetcode.com/problems/stepping-numbers/solutions/1323844/)

---

### Explanation
- See below example & pattern
	- `21 = 2 * 10 + (2 % 10 - 1)`
	- `23 = 2 * 10 + (2 % 10 + 1)`
	- `n_plus_1_digits_stepping_number = n_digits_stepping_number * 10 + (n_digits_stepping_number % 10 - 1)`, for any `n_digits_stepping_number % 10 != 0`
	- `n_plus_1_digits_stepping_number = n_digits_stepping_number * 10 + (n_digits_stepping_number % 10 + 1)`, for any `n_digits_stepping_number % 10 != 9`
- Based on pattern above we can get any stepping number of `n+1` digits from `n` digits stepping number. Since each time we are adding 1 more digit, `BFS` is a good method to use.
- Starting from base case (1 digit numbers, i.e. `[1,2,3,4,5,6,7,8,9]`), doing BFS with the help of deque.
- `0` is a edge case, handle it separately at the end.
### Implementation
```
class Solution:
    def countSteppingNumbers(self, low: int, high: int) -> List[int]:
        q = collections.deque([i+1 for i in range(9)])
        ans = []
        while q and q[0] <= high:
            cur = q.popleft()
            if low <= cur <= high: ans.append(cur)
            m = cur % 10     
            a, b = cur * 10 + (m-1), cur * 10 + (m+1)
            if m != 0: q.append(a)
            if m != 9: q.append(b)
        return [0] + ans if low <= 0 <= high else ans        
```