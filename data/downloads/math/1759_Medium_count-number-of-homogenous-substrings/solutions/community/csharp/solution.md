# C# Solution for Count Number of Homogenous Substrings Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266804/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266804/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires counting the number of homogeneous substrings in a given string. A substring is considered homogeneous if it contains the same character repeated consecutively.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	The solution involves iterating through the string.
2.	It maintains a count of consecutive characters encountered.
3.	When a different character is encountered or the end of the string is reached, it calculates the number of homogeneous substrings by summing the counts using the formula ((consecutive) * consecutive + 1) / 2.
4.	The count is updated and returned modulo  to prevent overflow for large inputs.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The algorithm scans the entire input string of length  once, resulting in an  time complexity O(N).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The solution utilizes a constant amount of extra space for variables like count, consecutive, and the final result. Therefore, the space complexity is O(1).

# Code
```
public class Solution {
    public int CountHomogenous(string s) {
        int count = 0;
        int mod = 1000000007;
        int consecutive = 1;

        for (int i = 1; i <= s.Length; i++) {
            if (i < s.Length && s[i] == s[i - 1]) {
                consecutive++;
            } else {
                count = (int)((count + (long)consecutive * (consecutive + 1) / 2) % mod);
                consecutive = 1;
            }
        }

        return count;
    }
}
```