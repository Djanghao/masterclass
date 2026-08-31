# c# Dictionary

**Author:** gunners
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6077708/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6077708/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
map the substring from s to  dictionary of len k, 
try finding the substring  of that length of T in the dictionary, if not return false
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public bool IsPossibleToRearrange(string s, string t, int k) {
        var n = s.Length; 
        var div = n/k;
        var map = new Dictionary<string, int>();

        for (int i = 0; i < n; i += div)
        {
            var subString = s.Substring(i, div);
            map[subString] = map.GetValueOrDefault(subString, 0) + 1;
        }

        for (int i = 0; i < n; i += div)
        {
            var subString  = t.Substring(i, div);
            
            if (map.GetValueOrDefault(subString, 0) > 0)
            {
                map[subString]--;
            }
            else

            return false;
        }
        return true;

    }
}
```