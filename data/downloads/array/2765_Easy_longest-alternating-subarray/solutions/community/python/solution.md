# [Java/C++/Python] Two Pointers and DP Solutions

**Author:** lee215
**Votes:** 29
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/3737191/](https://leetcode.com/problems/longest-alternating-subarray/solutions/3737191/)

---

# **Solution 0: Brute Force Check**

Sum up the equations
`s1 - s0 = 1`
`s2 - s1 = -1,`
`s3 - s2 = 1`
we can have
`si - s0 = i % 2`

So for each `A[i]`,
find the longest alternating subarray where `A[j] == A[i] + (j - i) % 2`

The length of alternating subarray is `j - i + 1`

Time `O(n^2)`
Space `O(1)`

**Java**
```java
    public int alternatingSubarray(int[] A) {
        int n = A.length, res = 0, j = 0;
        for (int i = 0; i < n; ++i)
            for (j = i + 1; j < n && A[j] == A[i] + (j - i) % 2; ++j)
                res = Math.max(res, j - i + 1);
        return res > 1 ? res : -1;
    }
```

**C++**
```cpp
    int alternatingSubarray(vector<int>& A) {
        int n = A.size(), res = 0, j = 0;
        for (int i = 0; i < n; ++i)
            for (j = i + 1; j < n && A[j] == A[i] + (j - i) % 2; ++j)
                res = max(res, j - i + 1);
        return res > 1 ? res : -1;
    }
```
<br>

# **Solution 1, Two Pointers**

In solution above,
`A[i], A[i + 1], ... , A[j - 1]` is alternating subarray
we check subarray startting at `A[i + 1]` after `A[i]`.

Noticed that two alternating arrays won't overlap with more than 2 element:
For example in `[1,2,1,2,3,2,3]`, 
`[1,2,1,2]` and `[2,3,2,3]` overlap 2 elements.

So we don't need to check subarray starting at `A[i + 1], A[i + 2]... A[j - 2]`
we can start to check subarray from the last element in the alternating subarray.

For example,
`1,2,1,2,1,2,3`
we can directly check the last `2` in the array.
So we can solve this problem with 2 pointers.


Time `O(n)`
Space `O(1)`

**Java**
```java
    public int alternatingSubarray(int[] A) {
        int n = A.length, res = 0, j = 0;
        for (int i = 0; i < n; i = Math.max(i + 1, j - 1))
            for (j = i + 1; j < n && A[j] == A[i] + (j - i) % 2; ++j)
                res = Math.max(res, j - i + 1);
        return res > 1 ? res : -1;
    }
```

**C++**
```cpp
    int alternatingSubarray(vector<int>& A) {
        int n = A.size(), res = 0, j = 0;
        for (int i = 0; i < n; i = max(i + 1, j - 1))
            for (j = i + 1; j < n && A[j] == A[i] + (j - i) % 2; ++j)
                res = max(res, j - i + 1);
        return res > 1 ? res : -1;
    }
```
<br>

# Solution 3, DP-like Solution

If `A[i] == A[i - 2]` and `dp[i - 1] > 0`
extends the alternatice subarray
then `dp[i] = dp[i - 1] + 1`

else if `A[i] == A[i - 1] + 1`,
starts the alternatice subarray
`dp[i] = 2`

else
not in the alternatice subarray
`dp[i] = -1`

Time `O(n)`
Space `O(1)`


**Java**
```java
    public int alternatingSubarray(int[] A) {
        int n = A.length, res = -1, dp = -1;
        for (int i = 1; i < n; ++i, res = Math.max(res, dp))
            if (dp > 0 && A[i] == A[i - 2])
                dp++;
            else
                dp = A[i] == A[i - 1] + 1 ? 2 : -1;
        return res;
    }
```

**C++**
```cpp
    int alternatingSubarray(vector<int>& A) {
        int n = A.size(), res = -1, dp = -1;
        for (int i = 1; i < n; ++i, res = max(res, dp))
            if (dp > 0 && A[i] == A[i - 2])
                dp++;
            else
                dp = A[i] == A[i - 1] + 1 ? 2 : -1;
        return res;
    }
```

**Python**
```py
    def alternatingSubarray(self, A: List[int]) -> int:
        n = len(A)
        res = dp = -1
        for i in range(1, n):
            if dp > 0 and A[i] == A[i - 2]:
                dp += 1
            else:
                dp = 2 if A[i] == A[i - 1] + 1 else -1
            res = max(res, dp)
        return res
```


