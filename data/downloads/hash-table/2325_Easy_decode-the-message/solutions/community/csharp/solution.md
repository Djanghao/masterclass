# C++ and C# very easy solution.

**Author:** aloneguy
**Votes:** 6
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/3389036/](https://leetcode.com/problems/decode-the-message/solutions/3389036/)

---



# Approach:Use Dictionary
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:Beats 74.64% of other solutions.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:Beats 86.9% of other solutions.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```C# []
public class Solution
{
    public string DecodeMessage(string key, string message)
    {
        int y = 97;
        StringBuilder s=new StringBuilder();
        Dictionary<char,char> d = new Dictionary<char,char>();
        foreach (char x in key)
        {
            if (x!=' ' && !d.ContainsKey(x))
            {
                d.Add(x, (char)y);
                y++;
            }
        }
        foreach (char x in message)
        {
            if (x != ' ')
            {
                s.Append(d[x]);
            }
            else
                s.Append(' ');
        }
        return s.ToString();
    }
}
```
```C++ []

```

