# [Java/C++/Python] Two Pointers, O(n)

**Author:** lee215
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4469863/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4469863/)

---

# **Explanation**
Find the longest increasing prefix subarray.
If the `A` is strict increasing,
return `n * (n + 1) / 2`.

The check the all increasing suffix array one elment by one element,
and find out the longest smaller increasing prefix by moving the pointer `i`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long incremovableSubarrayCount(int[] A) {
        int n = A.length, i = 0;
        while (i + 1 < n && A[i] < A[i + 1]) {
            i++;
        }
        if (i == n - 1) {
            return n * (n + 1) / 2;
        }
        long res = i + 2;
        for (int j = n - 1; j >= 0; j--) {
            if (j < n - 1 && A[j] >= A[j + 1]) {
                break;
            }
            while (i >= 0 && A[i] >= A[j]) {
                i--;
            }
            res += i + 2;
        }
        return res;
    }
```

**C++**
```cpp
    long long incremovableSubarrayCount(vector<int>& A) {
        int n = A.size(), i = 0;
        while (i + 1 < n && A[i] < A[i + 1])
            i++;
        if (i == n - 1)
            return n * (n + 1) / 2;
        long long res = i + 2;
        for (int j = n - 1; j >= 0; j--) {
            if (j < n - 1 && A[j] >= A[j + 1]) break;
            while (i >= 0 && A[i] >= A[j])
                i--;
            res += i + 2;
        }
        return res;
    }
```

**Python**
```py
    def incremovableSubarrayCount(self, A: List[int]) -> int:
        n = len(A)
        i = 0
        while i + 1 < n and A[i] < A[i + 1]:
            i += 1
        if i == n - 1:
            return n * (n + 1) // 2
        res = i + 2
        for j in range(n - 1, -1, -1):
            if j < n - 1 and A[j] >= A[j + 1]:
                break
            while i >= 0 and A[i] >= A[j]:
                i -= 1
            res += i + 2
        return res

```
