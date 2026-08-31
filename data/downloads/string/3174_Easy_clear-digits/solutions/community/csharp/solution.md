# Easy

**Author:** evveg
**Votes:** 0
**Link:** [https://leetcode.com/problems/clear-digits/solutions/6073953/](https://leetcode.com/problems/clear-digits/solutions/6073953/)

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
```csharp []
public class Solution {
    public string ClearDigits(string s)
    {
        StringBuilder sb = new StringBuilder();

        foreach (var c in s)
        {
            if (char.IsLetter(c))
            {
                sb.Append(c);
            }

            if (char.IsDigit(c))
            {
                sb.Length--;
            }
        }
        return sb.ToString();
    }
}
```