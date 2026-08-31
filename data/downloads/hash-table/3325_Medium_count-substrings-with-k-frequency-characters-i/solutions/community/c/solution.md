# [Java/C++/Python] Sliding Window, O(n)

**Author:** lee215
**Votes:** 48
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5939947/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5939947/)

---

# **Intuition**
`(n + 1) * n // 2` substrings in total.
Find the number of substrings,
each char appears at most  `k - 1` times.
<br>

# **Intuition2**
No problem **II** in the contest?
Upvote this solution,
and submit it directly in next contest!
<br>

# **Explanation**
Solve with sliding window:

Each iteration,
append `s[j]` on the right,
while `count[s[j]] >= k`,
move the left pointer until it's not.
count the substring ending with `s[j]` in the window.
remove them from result.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

```Java [Java]
    public int numberOfSubstrings(String s, int k) {
        int n = s.length(), res = (n + 1) * n / 2;
        int[] count = new int[26];
        for (int i = 0, j = 0; j < n; j++) {
            char c = s.charAt(j);
            count[c - 'a']++;
            while (count[c - 'a'] >= k) {
                char leftChar = s.charAt(i);
                count[leftChar - 'a']--;
                i++;
            }
            res -= j - i + 1;
        }
        return res;
    }
```

```C++ [C++]
    int numberOfSubstrings(string s, int k) {
        int n = s.length(), res = (n + 1) * n / 2;
        unordered_map<char, int> count;
        for (int i = 0, j = 0; j < n; j++) {
            count[s[j]]++;
            while (count[s[j]] >= k)
                --count[s[i++]];
            res -= j - i + 1;
        }
        return res;
    }
```

```py [Python3]
    def numberOfSubstrings(self, s: str, k: int) -> int:
        n = len(s)
        res = (n + 1) * n // 2
        count = Counter()
        i = 0
        for j in range(n):
            count[s[j]] += 1
            while count[s[j]] >= k:
                count[s[i]] -= 1
                i += 1
            res -= j - i + 1
        return res
```
