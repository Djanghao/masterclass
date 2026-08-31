# 🐌 C# - LINQ

**Author:** user7166Uf
**Votes:** 3
**Link:** [https://leetcode.com/problems/reorder-data-in-log-files/solutions/2107131/](https://leetcode.com/problems/reorder-data-in-log-files/solutions/2107131/)

---

```
public class Solution
{
    public string[] ReorderLogFiles(string[] logs)
    {
        return logs.Where(IsLetterLog).OrderBy(GetContent).ThenBy(GetIdentifer).Concat(logs.Where(IsDigitLog)).ToArray();

        bool IsLetterLog(string log)
        {
            int indexOfSpace = log.IndexOf(' ');
            char characterAfterSpace = log[indexOfSpace + 1];
            return char.IsLetter(characterAfterSpace);
        }

        bool IsDigitLog(string log)
        {
            int indexOfSpace = log.IndexOf(' ');
            char characterAfterSpace = log[indexOfSpace + 1];
            return char.IsDigit(characterAfterSpace);
        }

        string GetContent(string log)
        {
            int indexOfSpace = log.IndexOf(' ');
            return log[(indexOfSpace + 1)..];
        }

        string GetIdentifer(string log)
        {
            int indexOfSpace = log.IndexOf(' ');
            return log[..indexOfSpace];
        }
    }
}
```

Shorter version
```
public class Solution
{
    public string[] ReorderLogFiles(string[] logs)
        => logs.Where(IsLetterLog).OrderBy(Content).ThenBy(Identifer).Concat(logs.Where(IsDigitLog)).ToArray();

    private static bool IsLetterLog(string log) => char.IsLetter(log[log.IndexOf(' ') + 1]);
    private static bool IsDigitLog(string log) => char.IsDigit(log[log.IndexOf(' ') + 1]);
    private static string Content(string log) => log[(log.IndexOf(' ') + 1)..];
    private static string Identifer(string log) => log[..log.IndexOf(' ')];
}
```

tl;dr
```
public class Solution
{
    public string[] ReorderLogFiles(string[] logs)
        => logs
            .Where(log => char.IsLetter(log[log.IndexOf(' ') + 1]))
            .OrderBy(log => log[(log.IndexOf(' ') + 1)..])
            .ThenBy(log => log[..log.IndexOf(' ')])
            .Concat(logs.Where(log => char.IsDigit(log[log.IndexOf(' ') + 1])))
            .ToArray();
}
```