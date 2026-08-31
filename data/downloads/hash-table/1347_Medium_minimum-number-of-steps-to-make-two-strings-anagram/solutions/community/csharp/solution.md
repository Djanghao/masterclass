# C# Solution for Minimum Number of Steps To Make Two Strings Anagram Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4558749/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4558749/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to find the minimum number of steps to make string t an anagram of string s. An optimized approach is used, taking advantage of the fact that the input consists of lowercase English letters.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Create an array charCount of size 26 (assuming lowercase English letters) to store the count of characters in string s.
2.	Iterate through string s and update the array accordingly.
3.	Iterate through string t and compare each character with the array:
	\u2022	If the count for the character is zero, it indicates a difference, so increment the steps.
	\u2022	If the count is nonzero, decrement it.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Let n be the length of strings s and t. The time complexity is O(n) since we iterate through both strings once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1). The array charCount is of constant size (26) as it only deals with lowercase English letters. This makes the solution more memory-efficient compared to using a HashMap.

# Code
```
public class Solution {
    public int MinSteps(string s, string t) {
        if (s.Length != t.Length) {
            return -1; // Invalid input
        }

        int[] charCount = new int[26]; // Assuming lowercase English letters only

        // Count characters in string s
        foreach (char c in s) {
            charCount[c - 'a']++;
        }

        // Count characters in string t and calculate the difference
        int steps = 0;
        foreach (char c in t) {
            if (charCount[c - 'a'] == 0) {
                steps++; // Character in t that is not in s
            } else {
                charCount[c - 'a']--;
            }
        }

        return steps;
    }
}
```