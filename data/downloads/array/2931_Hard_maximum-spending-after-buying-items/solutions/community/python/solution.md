# [C++/Python] Heap Sort

**Author:** lee215
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4276685/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4276685/)

---

# **Explanation**
Everyday, buy the current cheapest item.
<br>

# **Prove**
If we didn't follow the above way,
we can always swap two items to get higher spending.
<br>

# **Solution 1**
Time `O(mnlogmn)`
Space `O(mn)`

**C++**
```cpp
    long long maxSpending(vector<vector<int>>& A) {
        int m = A.size(), n = A[0].size();
        vector<int> B(m * n);
        for (int i = 0; i < m; ++i)
            for (int j = 0; j < n; ++j)
                B[i * n + j] = A[i][j];
        sort(B.begin(), B.end());
        long long res = 0, d = 1;
        for (int v: B)
            res += d++ * v;
        return res;
    }
```
**Python**
```py
    def maxSpending(self, A: List[List[int]]) -> int:
        return sum(d * a for d,a in enumerate(sorted(a for r in A for a in r), 1))
```
<br>

# **Solution 2**
Time `O(mnlogm)`
Space `O(m)`

**Python**
```py
    def maxSpending(self, A: List[List[int]]) -> int:
        m, n = len(A), len(A[0])
        h = [[A[i].pop(), i] for i in range(m)]
        heapify(h)
        res = 0
        for d in range(1, m * n + 1):
            v, i = heappop(h)
            res += v * d
            if A[i]:
                heappush(h, [A[i].pop(), i])
        return res
```
