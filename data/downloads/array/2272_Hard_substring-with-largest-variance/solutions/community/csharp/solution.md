# C# Solution for Substring with Largest Variance Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/3739408/](https://leetcode.com/problems/substring-with-largest-variance/solutions/3739408/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to consider all possible pairs of distinct characters in the given string and calculate the variance between the counts of those characters in different substrings.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize an array counter of size 26 to keep track of the counts of each lowercase English letter in the given string s.
1. Traverse the characters of the string s and update the corresponding count in the counter array.
1. Initialize a variable globalMax to keep track of the maximum variance encountered so far.
1. Iterate over all pairs of distinct characters (major and minor) from 'a' to 'z'.
1. For each pair of characters, calculate the variance between their counts in different substrings.
1. Traverse the string s again and maintain two counts: majorCount for the major character and minorCount for the minor character in the pair. Also, keep track of the remaining occurrences of the minor character (restMinor).
1. Update the majorCount and minorCount while traversing the string. If the minor character count is non-zero, calculate the variance (majorCount - minorCount) and update globalMax if necessary.
1. If the major count becomes smaller than the minor count and there are remaining occurrences of the minor character, reset the counts to zero. This allows us to discard the previous substring and start calculating counts for the next substring.
1. Repeat steps 6-8 for all characters in the string.
1. Finally, return the value of globalMax, which represents the largest variance among all substrings.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(n^2) because there are two nested loops iterating over all possible pairs of characters. The outer loop runs for 26 iterations (representing the 26 lowercase English letters), and the inner loop also runs for 26 iterations. Within the loops, we traverse the string of length n, resulting in a total time complexity of O(n^2).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the solution is O(1) because we are using a fixed-size array counter of size 26 to store the counts of characters. The space required for the variables used in the calculations is also constant, regardless of the input size.

# Code
```
public class Solution {
    public int LargestVariance(string s) {
        int[] counter = new int[26];
        foreach (char ch in s)
        {
            counter[ch - 'a']++;
        }

        int globalMax = 0;

        for (int i = 0; i < 26; i++)
        {
            for (int j = 0; j < 26; j++)
            {
                if (i == j || counter[i] == 0 || counter[j] == 0)
                {
                    continue;
                }

                char major = (char)('a' + i);
                char minor = (char)('a' + j);
                int majorCount = 0;
                int minorCount = 0;
                int restMinor = counter[j];

                foreach (char ch in s)
                {
                    if (ch == major)
                    {
                        majorCount++;
                    }
                    if (ch == minor)
                    {
                        minorCount++;
                        restMinor--;
                    }

                    if (minorCount > 0)
                    {
                        globalMax = Math.Max(globalMax, majorCount - minorCount);
                    }

                    if (majorCount < minorCount && restMinor > 0)
                    {
                        majorCount = 0;
                        minorCount = 0;
                    }
                }
            }
        }

        return globalMax;
    
    }
}
```