# C# solution using GroupBy and Sorting.

**Author:** oleksandr_andrusenko
**Votes:** 24
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/3267924/](https://leetcode.com/problems/group-anagrams/solutions/3267924/)

---


# Code
```
public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        return strs
            .GroupBy(s => new string(s.OrderBy(c => c).ToArray()))
            .Select(g => g.ToList() as IList<string>)
            .ToList();
    }
}
```