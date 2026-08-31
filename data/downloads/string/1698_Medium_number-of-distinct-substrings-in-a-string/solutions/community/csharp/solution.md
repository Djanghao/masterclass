# C# using DFS and HashSet to keep track of visited

**Author:** banji180
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/3978545/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/3978545/)

---

# Intuition
Dynamic programming by removing leftmost and rightmost until all characters processed

# Approach
DFS and use hash set to keep track of visited values

# Complexity
- Time complexity:
    $$O(n^2)$$

- Space complexity:
    $$O(n)$$ 

# Code
```
public class Solution {
    public int CountDistinct(string s) {
        var set = new HashSet<string>();
        Process(s,set);
        return set.Count;
    }
    private void Process(string s, HashSet<string> set){
        if(string.IsNullOrEmpty(s) || set.Contains(s))
            return;
        set.Add(s);
        Process(s.Substring(1), set);
        Process(s.Remove(s.Length-1), set);
    }
}
```