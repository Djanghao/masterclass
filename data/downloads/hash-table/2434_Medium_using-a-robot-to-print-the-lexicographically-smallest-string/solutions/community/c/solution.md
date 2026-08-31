# Counter

**Author:** votrubac
**Votes:** 95
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2678810/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2678810/)

---

**Intuition:** we print a character at the end of `t` if it's smaller or equal any remaining characters in `s`.

We can use a counter to track remaining characters. We reduce the counter as we move a character from `s` to `t`.

Since we only care about the smallest among remaining characters, we track it using `lo`.

Please note that we may need to update `lo` when we move a character from `s` to `t`.

**Python 3**
```python
class Solution:
    def robotWithString(self, s: str) -> str:
        cnt, lo, p, t = Counter(s), 'a', [], []
        for ch in s:
            t += ch
            cnt[ch] -= 1
            while lo < 'z' and cnt[lo] == 0:
                lo = chr(ord(lo) + 1)
            while t and t[-1] <= lo:
                p += t.pop()
        return "".join(p) 
```

**C++**
```cpp
string robotWithString(string s) {
    string p, t;
    int cnt[26] = {}, lo = 0;
    for(auto ch : s)
        ++cnt[ch - 'a'];
    for (auto ch : s) {
        t += ch;
        --cnt[ch - 'a'];
        while(lo < 25 && cnt[lo] == 0)
            ++lo;
        while(!t.empty() && t.back() - 'a' <= lo) {
            p += t.back();
            t.pop_back();
        }
    }
    return p;
}
```