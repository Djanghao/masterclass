# 💥Runtime beats 100.00%, Memory beats 90.32% [EXPLAINED]

**Author:** r9n
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5792128/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5792128/)

---

# Intuition
I realized I only need to track whether each vowel appears an even or odd number of times in a substring. If all vowels have even counts, the substring is valid. Instead of counting vowels, I can just toggle whether their counts are even or odd.

# Approach
I use a bitmask where each vowel has a bit. As I go through the string, I toggle the bits for vowels. If I see the same bitmask again, the vowels between those points have even counts. A dictionary helps me track the first occurrence of each bitmask.

# Complexity
- Time complexity:
O(n) \u2013 I go through the string once.


- Space complexity:
O(n) \u2013 For storing bitmask occurrences.

# Code
```csharp []
public class Solution {
    public int FindTheLongestSubstring(string s) {
        // Bitmask to track the parity of vowels
        int mask = 0;
        int maxLength = 0;
        var maskToIndex = new Dictionary<int, int>();
        maskToIndex[0] = -1;  // Base case: even parity for all vowels at the beginning

        for (int i = 0; i < s.Length; i++) {
            // Update the mask for vowels
            if (s[i] == 'a') mask ^= 1 << 0;
            else if (s[i] == 'e') mask ^= 1 << 1;
            else if (s[i] == 'i') mask ^= 1 << 2;
            else if (s[i] == 'o') mask ^= 1 << 3;
            else if (s[i] == 'u') mask ^= 1 << 4;

            // Check if we've seen this mask before
            if (maskToIndex.ContainsKey(mask)) {
                // Calculate the length of the substring between the two indices
                maxLength = Math.Max(maxLength, i - maskToIndex[mask]);
            } else {
                // Store the first occurrence of this mask
                maskToIndex[mask] = i;
            }
        }

        return maxLength;
    }
}

```