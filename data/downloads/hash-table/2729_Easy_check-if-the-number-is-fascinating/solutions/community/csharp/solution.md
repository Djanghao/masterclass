# C# Linq OneLiner

**Author:** 7bnx
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3649893/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3649893/)

---


```
public class Solution {
    public bool IsFascinating(int n)
      => $"{n}{n*2}{n*3}".OrderBy(x => x).SequenceEqual("123456789");
}
```