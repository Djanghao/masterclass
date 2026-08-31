# [Java/C++/Python] HashMap

**Author:** lee215
**Votes:** 15
**Link:** [https://leetcode.com/problems/number-of-black-blocks/solutions/3746090/](https://leetcode.com/problems/number-of-black-blocks/solutions/3746090/)

---

# **Intuition**
We can notice `m * n` brute force is too much and will get TLE,
so we focus on coordinates and their neighbors.

Initially we have `(n - 1) * (m - 1)` empty block-0,
and we can iterate coordinates and update the count of block-1, block-2, block-3, block-4.
<br>

# **Explanation**
`cnt[i, j]` means the number of black cell in `[i-1,j-1], [i-1,j], [i,j-1], [i,j]`.
`res[k]` means the number of block-k, the block with `k` black cells.

Now we iterate `(i, j)` in `coordinates`
When `(i, j)` is colored to black,
it will affect 4 blocks.

Assume there are `k` black cell in 1 of 4 blocks,
we decrease `res[k] -= 1` then increase `res[k] += 1`,
also update the `k` to `k + 1` for the black cell count.

Finally return the `res`.
<br>

# **Complexity**
Time `O(coordinates)`
Space `O(coordinates)`
<br>

**Java**
```java
    public long[] countBlackBlocks(int m, int n, int[][] coordinates) {
        HashMap<Long, Integer> cnt = new HashMap<>();
        long[] res = {(n - 1L) * (m - 1), 0, 0, 0, 0};
        for (int[] c : coordinates)
            for (int i = c[0]; i < c[0] + 2; i++)
                for (int j = c[1]; j < c[1] + 2; j++)
                    if (0 < i && i < m && 0 < j && j < n) {
                        long idx = i * 100000L + j;
                        res[cnt.getOrDefault(idx, 0)]--;
                        cnt.put(idx, cnt.getOrDefault(idx, 0) + 1);
                        res[cnt.getOrDefault(idx, 0)]++;
                    }
        return res;
    }
```

**C++**
```cpp
    vector<long long> countBlackBlocks(int m, int n, vector<vector<int>>& coordinates) {
        unordered_map<long long, int> cnt;
        vector<long long> res = {(n - 1L) * (m - 1), 0, 0, 0, 0};
        for (auto& c: coordinates)
            for (int i = c[0]; i < c[0] + 2; ++i)
                for (int j = c[1]; j < c[1] + 2; ++j)
                    if (0 < i && i < m && 0 < j && j < n) {
                        res[cnt[i * 100000L + j]]--;
                        cnt[i * 100000L + j]++;
                        res[cnt[i * 100000L + j]]++;
                    }
        return res;
    }
```

**Python**
```py
    def countBlackBlocks(self, m: int, n: int, coordinates: List[List[int]]) -> List[int]:
        cnt = Counter()
        res = [(n - 1) * (m - 1), 0, 0, 0, 0]
        for i, j in coordinates:
            for i, j in product([i, i + 1], [j, j + 1]):
                res[cnt[i, j]] -= 1
                cnt[i, j] += 0 < i < m and 0 < j < n
                res[cnt[i, j]] += 1
        return res
```
