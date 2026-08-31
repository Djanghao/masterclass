# [Java/C++/Python] One Pass, O(n)

**Author:** lee215
**Votes:** 117
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4111962/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4111962/)

---

# **Explanation**
For each `a` in `A`,
we update several values
`res` is the maximum value of a triplet `(A[i] - A[j]) * A[k]`.
`maxab` is the maximum value of pair `A[i] - A[j]`
`maxa` is the maximum value of element `A[i]`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long maximumTripletValue(int[] A) {
        long res = 0, maxa = 0, maxab = 0;
        for (int a : A) {
            res = Math.max(res, 1L * maxab * a);
            maxab = Math.max(maxab, maxa - a);
            maxa = Math.max(maxa, a);
        }
        return res;
    }
```

**C++**
```cpp
    long long maximumTripletValue(vector<int>& A) {
        long long res = 0;
        int maxa = 0, maxab = 0;
        for (int&a : A) {   
            res = max(res, 1LL * maxab * a);
            maxab = max(maxab, maxa - a);
            maxa = max(maxa, a);
        }
        return res;
    }
```

**Python**
```py
    def maximumTripletValue(self, A: List[int]) -> int:
        res = maxa = maxab = 0
        for a in A:
            res = max(res, maxab * a)
            maxab = max(maxab, maxa - a)
            maxa = max(maxa, a)
        return res
```
