# Concise and easy solutions with trivial LINQ

**Author:** anikit
**Votes:** 30
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/2981733/](https://leetcode.com/problems/longest-common-prefix/solutions/2981733/)

---

1. Get the shortest word
2. Make sure that each of its characters can be found in every other word in the same place.
  a. If not, return what you have checked so far.
  b. If yes, go on.

Short solution:
```csharp
public class Solution
{
    public string LongestCommonPrefix(string[] ss)
    {
        string shortest = ss.OrderBy(s => s.Length).First();

        for (int i = 0; i < shortest.Length; i++)
        {
            if (ss.Select(s => s[i]).Distinct().Count() > 1) return shortest[..i];
        }

        return shortest;
    }
}
```

Another one, with `StringBuilder`:
```csharp
public class Solution
{
    public string LongestCommonPrefix(string[] ss)
    {
        int i = 0;
        StringBuilder sb = new();
        string shortest = ss.OrderBy(s => s.Length).First();

        foreach (char c in shortest)
        {
            if (ss.Any(s => s[i] != c)) break;
            sb.Append(c);
            i++;
        }

        return sb.ToString();
    }
}
```

We can get rid of the explicit declaration of `i` by using LINQ/tuples:
```csharp
public class Solution
{
    public string LongestCommonPrefix(string[] ss)
    {
        StringBuilder sb = new();
        string shortest = ss.OrderBy(s => s.Length).First();

        foreach (var (c, i) in shortest.Select((c, i) => (c, i)))
        {
            if (ss.Any(s => s[i] != c)) break;
            sb.Append(c);
        }

        return sb.ToString();
    }
}
```