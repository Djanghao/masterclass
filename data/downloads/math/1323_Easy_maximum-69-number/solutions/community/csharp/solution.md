# Clean naive solution with strings

**Author:** anikit
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/2788280/](https://leetcode.com/problems/maximum-69-number/solutions/2788280/)

---

```csharp
public class Solution
{
    public int Maximum69Number (int num)
    {
        var s = num.ToString().ToCharArray();

        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] == '6')
            {
                s[i] = '9';
                return int.Parse(s);
            }
        }

        return num;
    }
}
```