# [C#] Bitmask

**Author:** Sh0wM3Th3C0d3
**Votes:** 1
**Link:** [https://leetcode.com/problems/parallel-courses-ii/solutions/3223973/](https://leetcode.com/problems/parallel-courses-ii/solutions/3223973/)

---

# Intuition
Ported from C++ from: https://leetcode.com/problems/parallel-courses-ii/solutions/2411686/leetcode-the-hard-way-dp-bit-manipulation/

# Approach
I know... looking at this solution length, it looks like magic. Credits to the original C++ author (link above).

Here's what's happening:
### 1
We'll use an array of integers called $$dp$$ of of size (1 << n). $$dp[i]$$ will hold the minimum number of semesters needed to take the courses with the bit set in $$i$$. Since $$1 <= n <= 15$$, we only need at most 2^15 elements.
The worst case is when, in each semester, we can only take one course, hence initialize with $$n$$. We're decreasing all input integers by one so we can use a zero-indexed array.
$$pre$$ will hold the pre-requisites for each course in the form of a bitmask. That's why it has $$n$$ elements.

```
List<int> dp = new List<int>(new int[1 << n]);
for (int i = 0; i<(1 << n); i++)
{
    dp[i] = n;
}
List<int> pre = new List<int>(new int[n]);
foreach (var x in relations) {
    --x[0];
    --x[1];
    pre[x[1]] |= 1 << x[0];
}
```
### 2
Base case: 0 semester. 0 course. $$i$$ is a set of courses that we've already studied. Initialize $$can$$ as 0 to record how many $$can$$ courses we can study. Iterate over all courses. Check if we've studied their prerequisite courses. If so, we can study course $$j$$.
```
 dp[0] = 0;
for (int i = 0; i < (1 << n); i++) {
    int can = 0;
    for (int j = 0; j < n; j++) {
        if ((pre[j] & i) == pre[j]) {
            can |= (1 << j);
        }
    }
    
```
### 3
Remove those courses that we've already studied. Enumerate all the bit 1 combinations of $$can$$, i.e. all subsets of a bit representation. Check if we can take $$BitOperations.PopCount(s)$$ courses. If so, we combine the previous results (what've studied already) or we take a new semester.
```
can &= ~i;
    for (int s = can; Convert.ToBoolean(s) ; s = ((s - 1) & can)) {
        if (System.Numerics.BitOperations.PopCount((uint)s) <= k) {
            dp[i | s] = Math.Min(dp[i | s], dp[i] + 1);
        }
    }
}
return dp[(1 << n) - 1];
```
# Code
```
public class Solution {
    public int MinNumberOfSemesters(int n, int[][] relations, int k) {
        List<int> dp = new List<int>(new int[1 << n]);
        for (int i = 0; i<(1 << n); i++)
        {
            dp[i] = n;
        }
        List<int> pre = new List<int>(new int[n]);
        foreach (var x in relations) {
            --x[0];
            --x[1];
            pre[x[1]] |= 1 << x[0];
        }
        dp[0] = 0;
        for (int i = 0; i < (1 << n); i++) {
            int can = 0;
            for (int j = 0; j < n; j++) {
                if ((pre[j] & i) == pre[j]) {
                    can |= (1 << j);
                }
            }
            can &= ~i;
            for (int s = can; Convert.ToBoolean(s) ; s = ((s - 1) & can)) {
                if (System.Numerics.BitOperations.PopCount((uint)s) <= k) {
                    dp[i | s] = Math.Min(dp[i | s], dp[i] + 1);
                }
            }
        }
        return dp[(1 << n) - 1];
    }
}
```