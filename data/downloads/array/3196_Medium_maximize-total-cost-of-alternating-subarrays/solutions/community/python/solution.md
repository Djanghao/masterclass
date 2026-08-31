# [Java/C++/Python] Easy and Concise, O(1) Space

**Author:** lee215
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355259/](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355259/)

---

# **Explanation**
`pos` is last element is positive sign.
`neg` is last element is negative sign.

After the `neg`, we need to append a positive `A[i]`
After the `pos`, we can append a positive/negative `A[i]`
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public long maximumTotalCost(int[] A) {
        long pos = (long)-1e15, neg = 0, tmp;
        for (int a : A) {
            tmp = neg;
            neg = pos - a;
            pos = Math.max(pos, tmp) + a;
        }
        return Math.max(pos, neg);
    }
```

**C++**
```cpp
    long long maximumTotalCost(vector<int>& A) {
        long long pos = -1e15, neg = 0, tmp;
        for (int a : A) {
            tmp = neg;
            neg = pos - a;
            pos = max(pos, tmp) + a;
        }
        return max(pos, neg);
    }
```

**Python**
```py
    def maximumTotalCost(self, A: List[int]) -> int:
        pos, neg = -inf, 0
        for a in A:
            pos, neg = max(pos, neg) + a, pos - a
        return max(pos, neg)
```
