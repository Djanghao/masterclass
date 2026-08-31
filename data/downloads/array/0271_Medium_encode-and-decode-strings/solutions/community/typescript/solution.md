# 2-Line Readable Solution (a bit cheeky 😝)

**Author:** furmandev
**Votes:** 4
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/2417290/](https://leetcode.com/problems/encode-and-decode-strings/solutions/2417290/)

---

In a real interview, I would provide a better solution using character escaping etc. after this solution.
```javascript
const encode = (strs) => strs.join('\uD83D\uDE1D');
const decode = (s) => s.split('\uD83D\uDE1D');
```