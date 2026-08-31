# One-liner

**Author:** lee215
**Votes:** 40
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/1953923/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/1953923/)

---

# **Explanation**
Fine the max pair of `(-abs(a), a)`,
where `a` is the elements in input array.

It compare firstly `-abs(a)`, where it finds the minimum absolute value.
If multiple result, then it compares secondely `a`, where it finds the maximum value.

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Python**
```py
    def findClosestNumber(self, A):
        return max([-abs(a), a] for a in A)[1] 
```
