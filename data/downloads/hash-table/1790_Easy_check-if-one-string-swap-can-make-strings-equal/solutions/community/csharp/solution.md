# Basic Solution

**Author:** kdrtnc35
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/6079890/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/6079890/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At the beginning of the question it seems hard. But later then it can be solve easily.

# Approach
<!-- Describe your approach to solving the problem. -->
I looked at the different chars and if there is two different, swap. If the different position chars is equal, return true.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 39.60 MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public bool AreAlmostEqual(string s1, string s2) {

    if(s1 == s2) return true;

    List<int> indexes = new List<int>();
    for (int i = 0; i < s1.Length; i++)
    {
            if (s1[i] != s2[i])
            {
                indexes.Add(i);
            }
    }

    if (indexes.Count == 2)
    {
        if (s1[indexes[0]] == s2[indexes[1]] && s1[indexes[1]] == s2[indexes[0]])
        {
            return true;
        }
    }
    return false;
    }
}
```