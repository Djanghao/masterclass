# [Java/C++/Python] Iterative BFS Solution

**Author:** lee215
**Votes:** 314
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/211183/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/211183/)

---

# Explanation
We initial the current result with all 1-digit numbers,
like `cur = [1, 2, 3, 4, 5, 6, 7, 8, 9]`.

Each turn, for each `x` in `cur`,
we get its last digit `y = x % 10`.
If `y + K < 10`, we add `x * 10 + y + K` to the new list.
If `y - K >= 0`, we add `x * 10 + y - K` to the new list.

We repeat this step `N - 1` times and return the final result.
<br>

# Complexity
If `K >= 5`, time and Space `O(N)`
If `K <= 4`, time and space `O(2^N)`
<br>

**Java:**
```java
    public int[] numsSameConsecDiff(int N, int K) {
        List<Integer> cur = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
        for (int i = 2; i <= N; ++i) {
            List<Integer> cur2 = new ArrayList<>();
            for (int x : cur) {
                int y = x % 10;
                if (y + K < 10)
                    cur2.add(x * 10 + y + K);
                if (K > 0 && y - K >= 0)
                    cur2.add(x * 10 + y - K);
            }
            cur = cur2;
        }
        return cur.stream().mapToInt(j->j).toArray();
    }
```

**C++:**
```cpp
    vector<int> numsSameConsecDiff(int N, int K) {
        vector<int> cur = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        for (int i = 2; i <= N; ++i) {
            vector<int> cur2;
            for (int x : cur) {
                int y = x % 10;
                if (y + K < 10)
                    cur2.push_back(x * 10 + y + K);
                if (K > 0 && y - K >= 0)
                    cur2.push_back(x * 10 + y - K);
            }
            cur = cur2;
        }
        return cur;
    }
```

**Python:**
```py
    def numsSameConsecDiff(self, N, K):
        cur = range(1, 10)
        for i in range(N - 1):
            cur = {x * 10 + y for x in cur for y in [x % 10 + K, x % 10 - K] if 0 <= y <= 9}
        return list(cur)
```
