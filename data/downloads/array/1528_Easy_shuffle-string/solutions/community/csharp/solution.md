# C# Solution

**Author:** eaxusniddinovich
**Votes:** 4
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/3273556/](https://leetcode.com/problems/shuffle-string/solutions/3273556/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public string RestoreString(string s, int[] indices) {
        
        char[] charArr = new char[s.Length];

        for(int i = 0; i < charArr.Length; i++)
        {
            charArr[indices[i]] = s[i];
        }

        return new string(charArr);
    }
}
```