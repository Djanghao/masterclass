# C#, time: O(n), space: O(n)

**Author:** mike_yip706
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/3872129/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/3872129/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- count each string appearances and store in the dictionary
- split target into two strings and see if we can find both in the dictionary
- if both strings are in the dictionary, number of pairs are simply all possible combinations with i = j

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n)

# Code
```
public class Solution {
    public int NumOfPairs(string[] nums, string target) {
        Dictionary<string, int> dict = nums.GroupBy(s => s).ToDictionary(group => group.Key, group => group.Count());
        int pairs = 0;

        for(int i = 1; i < target.Length; i++)
        {
            string s1 = target.Substring(0, i);
            string s2 = target.Substring(i);

            if (dict.ContainsKey(s1) && dict.ContainsKey(s2))
            {
                // cannot use string with same index
                pairs += dict[s1] * (s1 == s2? (dict[s2] - 1) : dict[s2]);
            }
        }

        return pairs;
    }
}
```