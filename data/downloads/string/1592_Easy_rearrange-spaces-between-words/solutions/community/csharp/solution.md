# C# Concise

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/4948816/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/4948816/)

---

```
public class Solution
{
    public string ReorderSpaces(string text)
    {
        var spaces = text.Count(c => c == ' ');
        var words = text.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        var separator = words.Length == 1 ? 0 : spaces / (words.Length - 1);
        var rest = words.Length == 1 ? spaces : spaces % (words.Length - 1);

        return new StringBuilder()
            .AppendJoin(new string(' ', separator), words)
            .Append(new string(' ', rest))
            .ToString();
    }
}
```