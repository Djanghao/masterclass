# c#, grouping

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/2981924/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/2981924/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First, we cam *group* the consequent symbols; the for each group we have two options:

- Add a symbol to left or write border od the group
- Add a symbol between two groups

```
BBAAACC..A.. -> BAAAAC..C..

BBAAACAADD..A.. -> BBAAAAAADD..C..
```   

# Approach
<!-- Describe your approach to solving the problem. -->
Grouping and analyzing these groups 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    public int MaxRepOpt1(string text) {
        List<(char key, int count)> groups = new List<(char key, int count)>();
        Dictionary<char, int> total = new Dictionary<char, int>();

        foreach (char c in text) {
            if (groups.Count == 0 || groups[groups.Count - 1].key != c)
                groups.Add((c, 1));
            else 
                groups[groups.Count - 1] = (groups[groups.Count - 1].key, groups[groups.Count - 1].count + 1);
            
            if (total.TryGetValue(c, out int count))
                total[c] = count + 1;
            else
                total.Add(c, 1);
        }    

        if (total.Count <= 1)
            return text.Length;

        int result = 1;

        for (int i = 0; i < groups.Count; ++i) {
            int current = groups[i].count + 1;

            if (i + 2 < groups.Count && groups[i + 1].count == 1 && groups[i + 2].key == groups[i].key) 
                current += groups[i + 2].count;

            result = Math.Max(Math.Min(current, total[groups[i].key]), result);
        }

        return result;
    }
}
```