# Counter

**Author:** votrubac
**Votes:** 50
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2168442/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2168442/)

---

**Python 3**
```python
class Solution:
    def greatestLetter(self, s: str) -> str:
        cnt = Counter(s)
        return next((u for u in reversed(ascii_uppercase) if cnt[u] and cnt[u.lower()]), "")
```
**C++**
```cpp
string greatestLetter(string s) {
    int cnt[128] = {};
    for (auto ch : s)
        ++cnt[ch];
    for (auto ch = 'Z'; ch >= 'A'; --ch)
        if (cnt[ch] && cnt[ch + 'a' - 'A'])
            return string(1, ch);
    return "";
}
```