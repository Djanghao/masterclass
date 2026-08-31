# [Java/C++/Python] One Pass

**Author:** lee215
**Votes:** 30
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/3466962/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/3466962/)

---

# **Explanation**
Iterate A[i] and B[i],
and record if we have ever seen A[i] and B[i].

The second time we have seen the same value,
we will increment the number `cur` of current common elements.

Finall return the result.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)` for output
<br>

**Java**
```java
    public int[] findThePrefixCommonArray(int[] A, int[] B) {
        int cur = 0, n = A.length, res[] = new int[n], seen[] = new int[n + 1];
        for (int i = 0; i < n; ++i) {
            if (++seen[A[i]] == 2) cur++;
            if (++seen[B[i]] == 2) cur++;
            res[i] = cur;
        }
        return res;
    }
```

**C++**
```cpp
    vector<int> findThePrefixCommonArray(vector<int>& A, vector<int>& B) {
        int cur = 0, n = A.size();
        vector<int> res(n), seen(n + 1);
        for (int i = 0; i < n; ++i) {
            if (++seen[A[i]] == 2) cur++;
            if (++seen[B[i]] == 2) cur++;
            res[i] = cur;
        }
        return res;
    }
```

**Python**
```py
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        res = []
        seen = cur = 0
        for ab in zip(A, B):
            for a in ab:
                if (1 << a) & seen:
                    cur += 1
                seen |= 1 << a
            res.append(cur)
        return res
```
