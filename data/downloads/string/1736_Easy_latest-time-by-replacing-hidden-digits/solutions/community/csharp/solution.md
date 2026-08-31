# 🐌 C# - clean and straightforward

**Author:** user7166Uf
**Votes:** 1
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/2008770/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/2008770/)

---

```
public class Solution
{
    public string MaximumTime(string time)
    {
        char[] characters = time.ToCharArray();
        if (characters[4] is '?') characters[4] = '9';
        if (characters[3] is '?') characters[3] = '5';
        if (characters[1] is '?') characters[1] = characters[0] is '?' or '2' ? '3' : '9';
        if (characters[0] is '?') characters[0] = characters[1] > '3' ? '1' : '2';
        return new string(characters);
    }
}
```