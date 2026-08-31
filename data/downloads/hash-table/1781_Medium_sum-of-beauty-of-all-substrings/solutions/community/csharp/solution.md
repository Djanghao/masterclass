# C# Brute Force with Sliding-Window Technique

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/5742017/](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/5742017/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->We need a solution that systematically evaluates every possible substring of the given string, calculating the beauty for each substring using frequency counting of characters within that substring.
___

# Approach
<!-- Describe your approach to solving the problem. -->// Iterate over all possible starting points for substrings
// Frequency array for characters a-z (26 characters)
// Iterate over all possible ending points for substrings starting from i
// Update frequency for current character
// Find max and min frequency from freq array
// Set minFreq to the maximum possible value
// Only consider characters that appear in the substring
// Add the beauty of this substring to the total and then return it.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n^2), where 'n' is the length of the input string
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1) because the extra space usage does not scale with the size of the input string.
____

# Code
```csharp []
public class Solution {
    public int BeautySum(string s) {
        int totalBeauty = 0;
        int n = s.Length;

        // Iterate over all possible starting points for substrings
        for (int i = 0; i < n; i++) {
            // Frequency array for characters a-z (26 characters)
            int[] freq = new int[26];
            
            // Iterate over all possible ending points for substrings starting from i
            for (int j = i; j < n; j++) {
                // Update frequency for current character
                freq[s[j] - 'a']++;
                
                // Find max and min frequency from freq array
                int maxFreq = 0;
                int minFreq = int.MaxValue; // Set minFreq to the maximum possible value
                
                for (int k = 0; k < 26; k++) {
                    if (freq[k] > 0) {  // Only consider characters that appear in the substring
                        maxFreq = Math.Max(maxFreq, freq[k]);
                        minFreq = Math.Min(minFreq, freq[k]);
                    }
                }
                
                // Add the beauty of this substring to the total
                totalBeauty += (maxFreq - minFreq);
            }
        }

        return totalBeauty;
    }
}
```