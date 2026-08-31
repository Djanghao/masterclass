# [Java/C++/Python] Bit Solution with Explanation 🔥

**Author:** lee215
**Votes:** 210
**Link:** [https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2588015/](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2588015/)

---

# **Intuition**
Assume the array has only 0 and 1.
Then the question changes:
If `A[i] = 1`, shortest array is `[A[i]]`, length is 1.
If `A[i] = 0`, we need to find the index `j` of next `1`,
then `j - i + 1` is the length of shortest subarray.
If no next 1, 1 is the length

To solve this problem,
we can iterate the array reversely
and keep the index `j` of last time we saw 1.
`res[i] = max(1, last - i + 1)`
<br>

# **Explanation**
For `0 <= A[i] <= 10^9`,
we simply do the above process for each bit.
`res[i] = max(1, max(last) - i + 1)`
<br>

# **Complexity**
Time `O(30n)`
Space `O(30)`
<br>

**Java**
```java
    public int[] smallestSubarrays(int[] A) {
        int n = A.length, last[] = new int[30], res[] = new int[n];
        for (int i = n - 1; i >= 0; --i) {
            res[i] = 1;
            for (int j = 0; j < 30; ++j) {
                if ((A[i] & (1 << j)) > 0)
                    last[j] = i;
                res[i] = Math.max(res[i], last[j] - i + 1);
            }
        }
        return res;
    }
```

**C++**
```cpp
    vector<int> smallestSubarrays(vector<int>& A) {
        int last[30] = {}, n = A.size();
        vector<int> res(n, 1);
        for (int i = n - 1; i >= 0; --i) {
            for (int j = 0; j < 30; ++j) {
                if (A[i] & (1 << j))
                    last[j] = i;
                res[i] = max(res[i], last[j] - i + 1);
            }
        }
        return res;
    }
```

**Python**
```py
    def smallestSubarrays(self, A):
        last = [0] * 32
        n = len(A)
        res = [0] * n
        for i in range(n - 1, -1, -1):
            for j in range(32):
                if A[i] & (1 << j):
                    last[j] = i
            res[i] = max(1, max(last) - i + 1)
        return res
```
