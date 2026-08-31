# C# one-liner, beats 100%

**Author:** Msey
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3084881/](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3084881/)

---

![dfa3bbb407676ac62e58d6fccf8f7743.jpg (1).png](./images/0.png)


# Code
```
public class Solution {
    public bool MakeStringsEqual(string s, string target) 
    {
        return s.Contains("1") == target.Contains("1");
    }
}
```