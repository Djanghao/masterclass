# C# || One-line solution

**Author:** vdmhunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2756465/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2756465/)

---

# Code
```
public class Solution
{
    public IList<string> TwoEditWords(string[] queries, string[] dictionary)
    {
        return queries.Where(query => dictionary.Any(word => query.Where((c, i) => c != word[i]).Count() <= 2)).ToList();
    }
}
```