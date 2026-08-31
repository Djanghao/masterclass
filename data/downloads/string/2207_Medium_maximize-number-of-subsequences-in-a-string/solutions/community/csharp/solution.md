# C# solution beats 100%

**Author:** Obose
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/5157650/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/5157650/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When I first thought about solving this problem, I realized that the key was to understand how the pattern could be inserted into the text to maximize the number of subsequences. The pattern consists of two characters, and the goal is to find the best way to insert these characters into the text to achieve the maximum number of subsequences. My initial thought was to count the occurrences of each character in the pattern within the text, as this would directly influence how many subsequences could be formed.

# Approach
<!-- Describe your approach to solving the problem. -->
I decided to iterate through the text and count the occurrences of each character in the pattern. This would give me two counts: countPattern0 for the first character of the pattern and countPattern1 for the second character. The idea was that for each occurrence of the second character in the text, I could potentially form a new subsequence by inserting the first character of the pattern before it. Similarly, for each occurrence of the first character, I could potentially form a new subsequence by inserting the second character after it.

After counting the occurrences, I calculated two potential maximums:

- The number of subsequences that could be formed by inserting the second character of the pattern at the beginning of each occurrence of the first character in the text.
- The number of subsequences that could be formed by inserting the first character of the pattern at the end of each occurrence of the second character in the text.

Finally, I returned the sum of the total number of subsequences that could be formed by inserting characters at their original positions plus the maximum of the two potential maximums calculated above.
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
    public long MaximumSubsequenceCount(string text, string pattern) {
        long countPattern0 = 0;
        long countPattern1 = 0;
        long totalSubsequences = 0;

        // Count occurrences of pattern[0] and pattern[1]
        foreach (char c in text) {
            if (c == pattern[1]) {
                totalSubsequences += countPattern0;
                countPattern1++;
            }
            if (c == pattern[0]) {
                countPattern0++;
            }
        }

        // Option 1: Add pattern[1] in the front
        long addPattern1Front = countPattern0;

        // Option 2: Add pattern[0] at the end
        long addPattern0End = countPattern1;

        // Maximum of either adding pattern[0] or pattern[1]
        long maxAdd = Math.Max(addPattern1Front, addPattern0End);

        return totalSubsequences + maxAdd;
    }
}

```