# Python solution, Easy to understand (Binary search) with detailed explanation

**Author:** Yi_Z
**Votes:** 70
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/1591935/](https://leetcode.com/problems/first-bad-version/solutions/1591935/)

---

### Solution
```
def firstBadVersion(self, n):
        i = 1
        j = n
        while (i < j):
            pivot = (i+j) // 2
            if (isBadVersion(pivot)):
                j = pivot       # keep track of the leftmost bad version
            else:
                i = pivot + 1   # the one after the rightmost good version
        return i
```

### Remarks
* We use` i = 1` instead of `0` as base case because there's no index operation involved and the product version starts from 1.
* We use `j` to keep track of the leftmost bad version we have checked, so that any version after` j `would not be the first bad version we want.
* We use `i `to keep track of the leftmost unknown version which has a good version before it, so that any version before` i` would be a good version.
* Therefore, `i` would move towards `j` step by step and stop when it becomes the first bad version.

****Please upvote if you find this post useful, and welcome to any further discussion!***