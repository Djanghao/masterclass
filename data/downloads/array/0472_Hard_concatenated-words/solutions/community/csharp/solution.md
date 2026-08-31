# Short and easy recursive solution

**Author:** anikit
**Votes:** 7
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/3105040/](https://leetcode.com/problems/concatenated-words/solutions/3105040/)

---

Use ranges to split a particular word into two: `w[..i]` and `w[i..]`:
```csharp
public class Solution
{
    public IList<string> FindAllConcatenatedWordsInADict(string[] words)
    {
        HashSet<string> ws = new(words);
        return words.Where(w => IsConcatenated(w)).ToList();

        bool IsConcatenated(string w, int count = 0)
        {
            if (w.Length == 0) return count > 1;

            for (int i = 1; i <= w.Length; i++)
            {
                if (ws.Contains(w[..i]) && IsConcatenated(w[i..], count + 1)) return true;
            }
            
            return false;
        }
    }
}
```

The same logic can be expressed in a more concise way, looks horrible though:
```csharp
public class Solution
{
    public IList<string> FindAllConcatenatedWordsInADict(string[] words)
    {
        HashSet<string> ws = new(words);
        return words.Where(w => IsConcatenated(w)).ToList();

        bool IsConcatenated(string w, int count = 0) =>
            w.Length == 0 && count > 1
            || Enumerable.Range(1, w.Length)
                .Where(i => ws.Contains(w[..i]) && IsConcatenated(w[i..], count + 1))
                .Any();
    }
}
```