# [Python] 15-line Simple DP using Yield, with Explanation

**Author:** yanrucheng
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/503558/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/503558/)

---

**Idea**
Starting from row 0, we enumerate all the possible combination of seats arrangements.
Given a seats arrangement of row `n`, we can enumerate all the possible seats arrangement of row `n+1`.

**Function `combination_row` Explanation**
- Inputs:
	- `i`: the index of row
	- `end`: the index of seat at row i under consideration
	- `prev`: the arrangement before the current seat, represented with string. E.g. '.#.'
	- `count`: the number of students seated to the left of the current position
	- `front`: the seat arrangement of the previous row
- Yield: 
	- a seat arrangements at row i
	- the corresponding number of students seated at row i

**Complexity**
Worst Case Time Complexity: `O(2^m * n)` (performances are much better on average cases)
Worst Case Space Complexity: `O(2^m)` (performances are much better on average cases)

**Python3**
```
class Solution:
    def maxStudents(self, seats):
        m, n = len(seats), len(seats[0])
        
        def combination_row(i, end=0, prev='', count=0, front=None):
            if end >= n:
                yield prev, count; return
            elif seats[i][end] == '.' and \\
                    (not prev or prev[-1] == '#') and \\
                    (end == 0 or front[end-1] == '#') and \\
                    (end == n-1 or front[end+1] == '#'):
                yield from combination_row(i, end+1, prev+'.', count+1, front)
            yield from combination_row(i, end+1, prev+'#', count, front)
                            
        new_dp = {'#'*n:0} # base case: a dummy row at the very front, with all seats broken
        for i in range(m):
            dp, new_dp = new_dp, {}
            for p,sm in dp.items():
                for k,v in combination_row(i, front=p):
                    new_dp[k] = max(v+sm, new_dp.get(k, 0))
        return max(new_dp.values())
```

**Python3 using reduce (without comment and line break)**
```
from functools import reduce
class Solution:
    def maxStudents(self, seats):
        m, n = len(seats), len(seats[0])
        def combination_row(i, end=0, prev='', count=0, front=None):
            if end >= n:
                yield prev, count; return
            elif seats[i][end] == '.' and (not prev or prev[-1] == '#') and (end == 0 or front[end-1] == '#') and (end == n-1 or front[end+1] == '#'):
                yield from combination_row(i, end+1, prev+'.', count+1, front)
            yield from combination_row(i, end+1, prev+'#', count, front)
                            
        dp = {'#'*n:0}
        for i in range(m):
            def update(d, k, v): 
                d[k] = max(d.get(k, 0), v)
                return d
            dp = reduce(lambda x,pair:update(x,*pair), (k,v+sm) for p,sm in dp.items() for k,v in combination_row(i, front=p)), {})
        return max(dp.values()) 
```