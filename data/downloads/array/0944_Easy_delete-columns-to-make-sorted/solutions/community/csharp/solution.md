# Another LINQ solution, super simple

**Author:** anikit
**Votes:** 7
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2991429/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2991429/)

---

1. For each column `i`, construct the column:
  `col = strs.Select(s => s[i])`
2. Then check whether the column matches its sorted form:
  `col.OrderBy(c => c).SequenceEqual(col)`
```csharp
public class Solution
{
    public int MinDeletionSize(string[] strs)
    {
        int res = 0;

        for (int i = 0; i < strs[0].Length; i++)
        {
            var col = strs.Select(s => s[i]);
            if (!col.OrderBy(c => c).SequenceEqual(col)) res++;
        }

        return res;
    }
}
```

In the latest version of C#, this part
`col.OrderBy(c => c).SequenceEqual(col)`
can be shortened to:
`col.Order().SequenceEqual(col)`

I don't like the negated `if` condition. Here is how to get rid of it:
```csharp
public class Solution
{
    public int MinDeletionSize(string[] strs)
    {
        int res = strs[0].Length;

        for (int i = 0; i < strs[0].Length; i++)
        {
            var col = strs.Select(s => s[i]);
            if (col.OrderBy(c => c).SequenceEqual(col)) res--;
        }

        return res;
    }
}
```