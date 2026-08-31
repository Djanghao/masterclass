# C# one-liner

**Author:** pawel753
**Votes:** 5
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/826154/](https://leetcode.com/problems/thousand-separator/solutions/826154/)

---

Runtime: 72 ms, faster than 98.58% of C# online submissions for Thousand Separator.
Memory Usage: 22.3 MB, less than 71.63% of C# online submissions for Thousand Separator.
```
public string ThousandSeparator(int n) => String.Format("{0:#,##0}", n).Replace(',','.');
```