# C# Greedy Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/5529621/](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/5529621/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem, we need to count the mismatches between the two strings s1 and s2. Specifically, we are looking for mismatched pairs where s1[i] is 'x' and s2[i] is 'y', and vice versa. Once we have these counts, we can determine the minimum number of swaps required to make the strings equal.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Iterate through the strings and count the 'xy' and 'yx' mismatches.
//  Check if teh sum of the count is odd. If it is, return '-1' because it is impossible to make the 
//  strings equal.
//  Calculate the number of swaps needed:
//  *xyCount / 2 swaps resolve all pairs of xy mismatches.
//  *yxCount / 2 swaps resolve all pairs of yx mismatches.
//  * If there is one mismatch left in both xy and yx (i.e., both counts are odd), we need two additional 
//  swaps to resolve these two mismatches.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where n is the length of the strings 's1' and 's2'. This is because we iterate through the strings once to count the mismatches.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1). We use a constant amount of extra space for the variables 'xyCount' and 'yxCount' regardless of the input size.
___

# Code
```
public class Solution {
    public int MinimumSwap(string s1, string s2) {
        int xyCount = 0;
        int yxCount = 0;

        for (int i = 0; i < s1.Length; i++) {
            if (s1[i] == 'x' && s2[i] == 'y') {
                xyCount++;
            } else if (s1[i] == 'y' && s2[i] == 'x') {
                yxCount++;
            }
        }

        // If the total count of mismatches is odd, we can't make the strings equal
        if ((xyCount + yxCount) % 2 != 0) {
            return -1;
        }

        // Pairs of xy and yx can be swapped directly
        // If both counts are odd, we need 2 additional swaps to resolve the remaining mismatches
        return xyCount / 2 + yxCount / 2 + (xyCount % 2) * 2;
    }
}
```