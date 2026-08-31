# Python 3 | Greedy, DP (28 ms) | Explanation

**Author:** idontknoooo
**Votes:** 10
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/844457/](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/844457/)

---

### Explanation
- This idea is simple but there are some thing we need to be careful about
- For each column, if we found any row pairs `(i, i+1)` not in order, then we need to remove this column
	- but we do this only if their previous column is not in order, e.g.
	- There is a tie in column 1, so we can't say they are in order, then we compare column 2 
		- `ak`
		- `ab`
	- There is no tie in column 1, we don't care about column 2
		- `ak`
		- `bb`
	- use `in_order` to store relation between rows
### Implementation
```
class Solution:
    def minDeletionSize(self, A: List[str]) -> int:
        m, n = len(A), len(A[0])
        ans, in_order = 0, [False] * (m-1)
        for j in range(n):
            tmp_in_order = in_order[:]
            for i in range(m-1):
				# previous step, rows are not in order; and current step rows are not in order, remove this column
                if not in_order[i] and A[i][j] > A[i+1][j]: ans += 1; break  
				# previous step, rows are not in order, but they are in order now
                elif A[i][j] < A[i+1][j] and not in_order[i]: tmp_in_order[i] = True
			# if column wasn't removed, update the row order information
            else: in_order = tmp_in_order  
            # not necessary, but speed things up
            if all(in_order): return ans   
        return ans
```