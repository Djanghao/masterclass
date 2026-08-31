# Sliding Window (Expand and shrink) solution

**Author:** archana33
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/5683622/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/5683622/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(2n)

- Space complexity:O(n)

# Code
```csharp []
public class Solution {
    public int NumberOfSubstrings(string s) {
        int l = 0, r = 0, n = s.Length;
        int countSubstring = 0;
        var map = new Dictionary<char, int>();

        while (r < n)
        {
            if (!map.TryAdd(s[r], 1))
                map[s[r]]++;

            while (map.Count == 3)
            {
                countSubstring += n - r;
                if (map.ContainsKey(s[l]))
                {
                    map[s[l]]--;
                    if (map[s[l]] == 0)
                        map.Remove(s[l]);
                }
                l++;
            }
            r++;
        }
        return countSubstring;
    }
}
```