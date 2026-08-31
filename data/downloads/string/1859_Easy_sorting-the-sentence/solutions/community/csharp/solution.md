# C# 99%

**Author:** eduard92
**Votes:** 2
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/3081806/](https://leetcode.com/problems/sorting-the-sentence/solutions/3081806/)

---

Probably bs on that 99 as is not accurate
Also this solution heavily relies on non-duplicates. I checked the Acceptance Rate before going with the idea.

# Code
```
public class Solution {
    public string SortSentence(string s) {
        var array = s.Split(' ');
        var res = new string[array.Length];

        for (int i = 0; i < array.Length; i++)
        {
            res[(array[i][array[i].Length - 1] + '0' - 96) - 1] = array[i].Substring(0, array[i].Length - 1);
        }

        return string.Join(' ', res); 
    }
}
```