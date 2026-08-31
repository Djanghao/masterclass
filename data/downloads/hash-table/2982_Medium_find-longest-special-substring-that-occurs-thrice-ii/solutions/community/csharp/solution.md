# Simple and Elegent Solution

**Author:** Renasci2022
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4482109/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4482109/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- Stores the number of occurrences of a character in counts. For example, counts[0, 3] represents the number of occurrences of third consecutive occurrence of 'a'.
- Accumulate suffix sum for each character. Now counts[i, j] represents the number of consecutive letter occurrences.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaximumLength(string s)
        {
        int[,] counts = new int[26, s.Length + 1];

        // For each character, count the number of times it appears consecutively
        char last = '0';
        int repeatCount = 0;
        foreach (char c in s)
        {
            int index = c - 'a';
            if (c == last)
            {
                repeatCount++;
            }
            else
            {
                last = c;
                repeatCount = 1;
            }
            counts[index, repeatCount]++;
        }

        // Acuumulate suffix sum
        for (int i = 0; i < 26; i++)
        {
            for (int j = s.Length - 1; j >= 0; j--)
            {
                counts[i, j] += counts[i, j + 1];
            }
        }

        // Find the maximum length of special substring
        int result = -1;
        for (int i = 0; i < 26; i++)
        {
            int j = 0;
            while (counts[i, j] >= 3) j++;
            result = Math.Max(result, j - 1);
        }
        return result;
    }
}
```