# [Java/C++/Python] Bit Mask

**Author:** lee215
**Votes:** 58
**Link:** [https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/3803762/](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/3803762/)

---

# **Intuition**
If the path between nodes `(u, v)` is rearranged to form a palindrome,
then the paths between nodes `(u, root)` + `(v, root)` are is rearranged to form a palindrome,
because the path of ancestres is calculated twice.
<br>

# **Bit mask**
Use a bit mask to calculate the character frequency on a path.
If `1 << 1` is present, `a` has odd frequency.
If `1 << 2` is present, `b` has odd frequency.
..
If `1 << 26` is present, `z` has odd frequency.
<br>

# **Explanation**
`f(i) = mask` calculate the path value from root node to `i`.
Increment result `res` with `count[mask]`,
since we have `count[v]` paths with same value.

Increment result `res` with `count[mask ^ (1 << 1)]`,
since we have `count[mask ^ (1 << 1)]` paths,
can merge with current path with single `a` in middle.

Increment result `res` with `count[mask ^ (1 << 2)]`,
since we have `count[mask ^ (1 << 1)]` paths,
can merge with current path with single `b` in middle.

..
After we calculate the pair for node `i`,
also need to update `count[mask] += 1`.

Continue doing this for all nodes,
and finally return result `res` in the end.
<br>

# **Complexity**
Time `O(26n)`
Space `O(n)`
<br>


**Java**
```java
    public long countPalindromePaths(List<Integer> parent, String s) {
        int n = parent.size(), dp[] = new int[n];
        long res = 0;
        Map<Integer, Integer> count = new HashMap<>();
        for (int i = 0; i < n; i++) {
            int mask = f(dp, parent, s, i), v = count.getOrDefault(mask, 0);
            for (int j = 0; j < 26; j++)
                res += count.getOrDefault(mask ^ (1 << j), 0);
            res += v;
            count.put(mask, v + 1);
        }
        return res;
    }

    private int f(int[] dp, List<Integer> parent, String s, int i) {
        if (i > 0 && dp[i] == 0)
            dp[i] = f(dp, parent, s, parent.get(i)) ^ (1 << (s.charAt(i) - 'a'));
        return dp[i];
    }
```

**C++**
```cpp
    long long countPalindromePaths(vector<int>& parent, string s) {
        int n = parent.size();
        long long res = 0;
        vector<int> dp(n);
        unordered_map<int, int> count;
        for (int i = 0; i < n; i++) {
            int mask = f(dp, parent, s, i);
            for (int j = 0; j < 26; j++)
                res += count.count(mask ^ (1 << j)) ? count[mask ^ (1 << j)] : 0;
            res += count[mask]++;
        }
        return res;
    }

    int f(vector<int>& dp, vector<int>& parent, string& s, int i) {
        if (i > 0 && dp[i] == 0)
            dp[i] = f(dp, parent, s, parent[i]) ^ (1 << (s[i] - 'a'));
        return dp[i];
    }
```
**Python**
```py
    def countPalindromePaths(self, parent: List[int], s: str) -> int:
        @cache
        def f(i):
            return f(parent[i]) ^ (1 << (ord(s[i]) - ord('a'))) if i else 0

        count = Counter()
        res = 0
        for i in range(len(parent)):
            v = f(i)
            res += count[v] + sum(count[v ^ (1 << j)] for j in range(26))
            count[v] += 1
        return res
```
