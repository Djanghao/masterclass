# [Java/C++/Python] Two Passes

**Author:** lee215
**Votes:** 55
**Link:** [https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4384415/](https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4384415/)

---

# **Intuition**
1. All same integers should be in the same subarray

2. We can concat two subarray in good partition,
and it's still good.

3. If we can split into atmost `k` subarray,
then we have `k - 1` spaces we can concat two subarrays.
<br>

# **Explanation**
One pass array `A`,
and record the last index of `A[i]` in hashmap `last`.

Initily we have at least one array,
so we initialize `res = 1`.
Then we iterate `A[i]`,
where `j` is the index of last occurrence of `A[i]`.

Each time we compare `i` and `j`:
If `i <= j`, it means the current subarray not finish yet.
If `i > j`, it means we can start a new subarray here.
We have two options here,
so we double our result `res`.

Finally, we return `res`
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int numberOfGoodPartitions(int[] A) {
        int res = 1, n = A.length, mod = 1000000007;
        Map<Integer, Integer> last = new HashMap<>();
        for (int i = 0; i < n; ++i) {
            last.put(A[i], i);
        }
        for (int i = 0, j = 0; i < n; ++i) {
            res = i > j ? (res * 2) % mod : res;
            j = Math.max(j, last.get(A[i]));
        }
        return res;
    }
```

**C++**
```cpp
    int numberOfGoodPartitions(vector<int>& A) {
        int res = 1, n = A.size(), mod = 1e9 + 7;
        unordered_map<int, int> last;
        for (int i = 0; i < n; ++i) {
            last[A[i]] = i;
        }
        for (int i = 0, j = 0; i < n; ++i) {
            res = i > j ? (res * 2) % mod : res;
            j = max(j, last[A[i]]);
        }
        return res;
    }
```

**Python**
```py
    def numberOfGoodPartitions(self, A: List[int]) -> int:
        last = {a: i for i,a in enumerate(A)}
        res = 1
        mod = 10 ** 9 + 7
        j = 0
        for i,a in enumerate(A):
            if i > j:
                res = res * 2 % mod
            j = max(j, last[a])
        return res
```
