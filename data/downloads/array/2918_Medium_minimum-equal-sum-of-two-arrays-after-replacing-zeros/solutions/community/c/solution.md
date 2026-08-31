# [Java/C++/Python] Easy and Concise

**Author:** lee215
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4220828/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4220828/)

---

# **Explanation**
`sa` is the minimum total of array `A`
`sb` is the minimum total of array `A`

`a0` is the number of `0` in `A`.
`b0` is the number of `0` in `B`.

If `sa < sb && a0 == 0`, return -1.
If `sa > sb && b0 == 0`, return -1.

finally we return `max(sa, sb)`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long minSum(int[] A, int[] B) {
        long sa = 0, sb = 0, a0 = 0, b0 = 0;
        for (int a: A) {
            a0 += a > 0 ? 0: 1;
            sa += Math.max(a, 1);
        }
        for (int b: B) {
            b0 += b > 0 ? 0: 1;
            sb += Math.max(b, 1);
        }
        if (sa < sb && a0 == 0) return -1;
        if (sa > sb && b0 == 0) return -1;
        return Math.max(sa, sb);
    }
```

**C++**
```cpp
    long long minSum(vector<int>& A, vector<int>& B) {
        long long sa = 0, sb = 0, a0 = 0, b0 = 0;
        for (int a: A) {
            a0 += a == 0;
            sa += max(a, 1);
        }
        for (int b: B) {
            b0 += b == 0;
            sb += max(b, 1);
        }
        if (sa < sb && a0 == 0) return -1;
        if (sa > sb && b0 == 0) return -1;
        return max(sa, sb);
    }
```

**Python**
```py
    def minSum(self, A: List[int], B: List[int]) -> int:
        sa = sum(max(a, 1) for a in A)
        sb = sum(max(b, 1) for b in B)
        if sa < sb and A.count(0) == 0: return -1
        if sa > sb and B.count(0) == 0: return -1
        return max(sa, sb)
```
