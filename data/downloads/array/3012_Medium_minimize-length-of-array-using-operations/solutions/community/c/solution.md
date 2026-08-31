# [Java/C++/Python] Remove Bigger

**Author:** lee215
**Votes:** 66
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4598395/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4598395/)

---

# **Intuition**
1. The order of elements doesn't matter.
2. If we have `A[i] < A[j]`, then we can remove `A[j]`
3. We should avoid of picking `A[i] == A[j]`, because it will generate `0`.
<br>

# **Explanation**
First, find the `min(A)`

If any `A[i] % i > 0`,
we can generate `a` that `a < min(A)`
and remove all other elements.

Otherwise, we count `min(A)` in `A`, then return `(cnt + 1) / 2`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int minimumArrayLength(int[] A) {
        int v = A[0], cnt = 0;
        for (int a: A)
            v = Math.min(v, a); 
        for (int x : A)
            if (x % v > 0)
                return 1;
        for (int a : A)
            if (a == v)
                cnt++;
        return (cnt + 1) / 2;
    }
```

**C++**
```cpp
    int minimumArrayLength(vector<int>& A) {
        int v = *min_element(A.begin(), A.end());
        for (int x : A)
            if (x % v > 0)
                return 1;
        int cnt = count(A.begin(), A.end(), v);
        return (cnt + 1) / 2;
    }
```

**Python**
```py
    def minimumArrayLength(self, A: List[int]) -> int:
        v = min(A)
        for x in A:
            if x % v:
                return 1
        return (A.count(v) + 1) // 2
```

**1-liner Python**
```py
    def minimumArrayLength(self, A: List[int]) -> int:
        return max(1, A.count(reduce(gcd, A))) + 1 >> 1
```
