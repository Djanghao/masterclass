# [Python] Back tracking, O(m) Solution

**Author:** lee215
**Votes:** 25
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/1647654/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/1647654/)

---


# **Solution 1: Brute force**
Helper fucntion `test(i)` to check the the number of instructions the robot can execute,
if the robot begins executing from the `i`th instruction in s.

Time `O(m^2)`
Space `O(1)`

**Python**
```py
    def executeInstructions(self, n, start, s):
        na = len(s)
        def test(i):
            res = 0
            x,y = start
            for j in xrange(i, na):
                o = s[j]
                if o == 'L': y -= 1
                if o == 'R': y += 1
                if o == 'U': x -= 1
                if o == 'D': x += 1
                if not (0 <= x < n and 0 <= y < n):
                    return j - i
            return na - i
        return map(test, range(na))
```
<br>

# **Solution 2: Multiplication**
Shared by @OOTTF:
For every start point `i`,
record the position after 2^k steps,
and extrene position in the 4 directions.

Time `O(mlogm)`
Space `O(mlogm)`
<br>

# **Solution 3: O(m) solution**
Starting from the first order,
find the difference on x-axis and y-axis

`count` reocrd the postion with start index.
For example,
`count[x0, None].add(0)`, means that at index `0`, we are at x-axis `x0`.
`count[None, y0].add(0)`, means that at index `0`, we are at x-axis `y0`.

The tricky and the difficult point for this solution is that,
starting at `(x0,y0)` and excute from `s[i]`,
is same as
starting at `(x0 - x, y0 - y)` and excute from `s[0]`.
This process has a sense of backtracking.

Now at step `s[i]` we have delta `(x, y)`,
if `x > 0`, we have moved down, and making points starting as x-axis `n-x` off the grid.
if `y > 0`, we have moved down, and making points starting as x-axis `n-y` off the grid.
if `x < 0`, we have moved down, and making points starting as x-axis `-x-1` off the grid.
if `y < 0`, we have moved down, and making points starting as x-axis `-y-1` off the grid.

At the end of each step, we clean all starting point already off the grid.
The ensures the whole solution is `O(m)`, where we add only once and clean only once.

Time `O(m)`
Space `O(m)`
<br>


**Python**
```py
    def executeInstructions(self, n, start, s):
        ns = len(s)
        (x0, y0), (x, y) = start, (0, 0)
        res = range(ns, 0, -1)
        count = collections.defaultdict(set)
        count[x0, None].add(0)
        count[None, y0].add(0)
        for i in xrange(ns):
            if s[i] == 'L': y -= 1
            if s[i] == 'R': y += 1
            if s[i] == 'U': x -= 1
            if s[i] == 'D': x += 1
            count[x0 - x, None].add(i + 1)
            count[None, y0 - y].add(i + 1)
            for key in [(n-x, None), (None, n-y), (-x-1, None), (None, -y-1)]:
                for j in count[key]:
                    if res[j] > i - j:
                        res[j] = i - j
                count[key] = set()
        return res
```
