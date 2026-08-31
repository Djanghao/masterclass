# C# Knuth-Morris-Pratt Algorithm Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/5607882/](https://leetcode.com/problems/longest-happy-prefix/solutions/5607882/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem, you can use the concept of the KMP (Knuth-Morris-Pratt) algorithm, which is efficient for finding the longest prefix which is also a suffix. The idea is to build the "longest prefix which is also a suffix" (LPS) array. This LPS array helps to keep track of the lengths of the longest prefix suffixes.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initialization:
//  *int[] lps = new int[n]; initializes the LPS array.
//  *int length = 0; keeps track of the length of the previous longest prefix suffix.
//  *int i = 1; starts from the second character since the first character is always a prefix and suffix 
//  of itself.
//  Building the LPS array:
//  *Loop through the string starting from the second character.
//  *If the current character matches the character at the current length of the longest prefix suffix, 
//  increment the length and update the LPS array.
//  *If there is no match, update the length to the value of the previous longest prefix suffix if it 
//  exists; otherwise, set it to 0.
//  Result:
//  *The value at lps[n-1] gives the length of the longest prefix which is also a suffix.
//  *Use this length to get the corresponding substring from the original string.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___

# Code
```
public class Solution {
    public string LongestPrefix(string s) {
        int n = s.Length;
        int[] lps = new int[n];
        int length = 0;
        int i = 1;

        // Build the LPS array
        while (i < n) {
            if (s[i] == s[length]) {
                length++;
                lps[i] = length;
                i++;
            } else {
                if (length != 0) {
                    length = lps[length - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }

        // The value of lps[n-1] will give us the length of the longest prefix which is also a suffix
        return s.Substring(0, lps[n - 1]);
    }
}
```