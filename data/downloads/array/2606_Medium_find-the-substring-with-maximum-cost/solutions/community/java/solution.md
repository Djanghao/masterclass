# [Java/C++/Python] Kadane

**Author:** lee215
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3366705/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3366705/)

---

# **Explanation**
Transform `<chars, vals>` into a hashmap `m`, so we can get each characters value in `O(1)`.
If `m[c]` exist, the value is `m[c]`, otherwise is `c - 'a' + 1`.

Then we can iterate the string `s` as an array,
and apply Kadane\u2019s algorithm to solve the maximum subarray.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int maximumCostSubstring(String s, String chars, int[] vals) {
        Map<Character, Integer> m = new HashMap<>();
        for (int i = 0; i < chars.length(); i++) {
            m.put(chars.charAt(i), vals[i]);
        }
        int res = 0, cur = 0;
        for (int i = 0; i < s.length(); ++i) {
            cur = Math.max(cur + m.getOrDefault(s.charAt(i), s.charAt(i) - 'a' + 1), 0);
            res = Math.max(res, cur);
        }
        return res;
    }
```

**C++**
```cpp
    int maximumCostSubstring(string s, string chars, vector<int>& vals) {
        unordered_map<char, int> m;
        for (int i = 0; i < chars.length(); i++)
            m[chars[i]] = vals[i];
        int res = 0, cur = 0;
        for (char& c : s) {
            cur = max(cur + (m.count(c) ? m[c] : c - 'a' + 1), 0);
            res = max(res, cur);
        }
        return res;
    }
```

**Python**
```py
    def maximumCostSubstring(self, s: str, chars: str, vals: List[int]) -> int:
        m = dict(zip(chars, vals))
        res = cur = 0
        for c in s:
            cur = max(cur + m.get(c, ord(c) - ord('a') + 1), 0)
            res = max(res, cur)
        return res
```
