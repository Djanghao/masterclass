# [Java/Python 3] O(n) code w/ brief explanation and analysis.

**Author:** rock
**Votes:** 24
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4742321/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4742321/)

---

**Key Observation:** Most common characters will be the solution.
1. Count the occurrences of the characters in `s`;
2. Find the frequency of the most common ones;
3. Reverse traverse `s`, find the most common characters;
4. Reverse the order of the characters found in 3.

```java
    public String lastNonEmptyString(String s) {
        int[] cnt = new int[26];
        int mx = 0;
        for (int i = 0; i < s.length(); ++i) {
            mx = Math.max(mx, ++cnt[s.charAt(i) - 'a']);
        }
        StringBuilder last = new StringBuilder();
        for (int i = s.length() - 1; i >= 0; --i) {
            char c = s.charAt(i);
            if (mx == cnt[c - 'a']--) {
                last.append(c);
            }
        }
        return last.reverse().toString();
    }
```

```python
    def lastNonEmptyString(self, s: str) -> str:
        cnt, last = Counter(s), [] 
        mx = max(cnt.values())
        for c in reversed(s):
            if mx == cnt[c]:
                last.append(c)
                cnt[c] -= 1
        return ''.join(last[:: -1])
```

**Analysis:**

Time: `O(n)`, space: `O(1)`.