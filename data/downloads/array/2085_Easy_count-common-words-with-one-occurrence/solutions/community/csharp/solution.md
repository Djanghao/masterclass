# C# Fun with Linq

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/5024047/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/5024047/)

---

```csharp
public class Solution
{
    public int CountWords(string[] words1, string[] words2) =>
    (
        from word1 in words1
        group word1 by word1 into gr1
        where gr1.Count() == 1
        let word1 = gr1.Key
        join word2 in words2 on word1 equals word2 into gr2
        where gr2.Count() == 1
        select word1
    ).Count();
}
```
```csharp
public class Solution
{
    public int CountWords(string[] words1, string[] words2) => words1
        .GroupBy(word1 => word1)
        .GroupJoin(words2, gr1 => gr1.Key, word2 => word2, (gr1, gr2) => (gr1, gr2))
        .Count(gr => gr.Item1.Count() == 1 && gr.Item2.Count() == 1);
}
```
