# O(n) and O(1) clean solution beats 100%

**Author:** belka64
**Votes:** 1
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/4569112/](https://leetcode.com/problems/print-words-vertically/solutions/4569112/)

---


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1) 

![image.png](./images/0.png)

# Code
```
public class Solution
{
    public IList<string> PrintVertically(string s)
    {
        var spl = s.Split(' ');
        var max = spl.Max(x => x.Length);
        StringBuilder[] sb = new StringBuilder[max];
        for (int i = 0; i < spl.Length; i++)
        {
            var curr = spl[i];
            for (int j = 0; j < max; j++)
            {
                if (sb[j] is null) sb[j] = new StringBuilder();
                if (j < curr.Length) sb[j].Append(curr[j]);
                else sb[j].Append(' ');
            }
        }
        return sb.Select(x => x.ToString().TrimEnd()).ToList();
    }
}
```