# 🐌 C# - simple hashset with explanation

**Author:** user7166Uf
**Votes:** 1
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/2173025/](https://leetcode.com/problems/short-encoding-of-words/solutions/2173025/)

---

Sort words descending by length so we get
`{"time", "me", "bell"}` -> `["time", "bell", "me"]`

Then take word `"time"` and check if it is in `hashSet`. It is not, so we have to update result add length of `"time".Length = 4` and length of `"#".Length = 1`. Then we can add `suffixes` to `hashset`.
```
e
me
ime
time
```

Check if `bell` is in hashset, no? Then add to result length of `bell = 4` and length of `# = 1`. Also add suffixes to hashset
```
e
me
ime
time
l
ll
ell
bell
```
Because `me` is already in hashset, then we skip it.

```
public class Solution
{
    public int MinimumLengthEncoding(string[] words)
    {
        Array.Sort(words, Comparer<string>.Create((left, right) => right.Length - left.Length));

        HashSet<string> suffixes = new();
        int result = 0;
        foreach (string word in words)
        {
            if (suffixes.Contains(word)) continue;
            result += 1 + word.Length;

            for (int length = 1; length <= word.Length; length++)
            {
                suffixes.Add(word[^length..]);
            }
        }

        return result;
    }
}
```

More concise
```

public class Solution
{
    public int MinimumLengthEncoding(string[] words)
    {
        (int result, HashSet<string> suffixes) = (0, new HashSet<string>());
        foreach (string word in words.OrderByDescending(word => word.Length).Where(word => suffixes.Contains(word) is false))
        {
            result += 1 + word.Length;
            suffixes.UnionWith(Enumerable.Range(1, word.Length).Select(length => word[^length..]));
        }

        return result;
    }
}
```