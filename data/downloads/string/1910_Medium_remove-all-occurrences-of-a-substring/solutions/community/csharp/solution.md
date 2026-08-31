# С# | Simplest solution | 3 string

**Author:** sidney31
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/3516484/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/3516484/)

---


# Code
```
public class Solution {
    public string RemoveOccurrences(string s, string part) 
    {
        while(s.Contains(part))
            s = s.Remove(s.IndexOf(part), part.Length);
        return s;
    }
}
```