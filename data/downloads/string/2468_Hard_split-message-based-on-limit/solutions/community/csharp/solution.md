# C# || Solution

**Author:** vdmhunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/2808488/](https://leetcode.com/problems/split-message-based-on-limit/solutions/2808488/)

---

# Code
```
public class Solution
{
    public string[] SplitMessage(string message, int limit)
    {
        var cur = 0;
        var k = 0;
        var i = 0;

        while (3 + k.ToString().Length * 2 < limit && cur + message.Length + (3 + k.ToString().Length) * k > limit * k)
        {
            k += 1;
            cur += k.ToString().Length;
        }

        var result = new List<string>();

        if (3 + k.ToString().Length * 2 < limit)
            foreach (var j in Enumerable.Range(1, k))
            {
                var l = limit - (j.ToString().Length + 3 + k.ToString().Length);
                var r = i + l > message.Length ? message.Length : i + l;
                result.Add($"{message[i..r]}<{j}/{k}>");
                i += l;
            }

        return result.ToArray();
    }
}
```