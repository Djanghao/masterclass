# C# greedy Solution with Dynamic Counting

**Author:** GetRid
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/5921091/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/5921091/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->The intuition behind solving this problem is to leverage the symmetry in the "010" and "101" patterns and count the necessary elements while iterating through the string. Instead of using complex data structures to maintain the state for every possible substring, I realized that the problem could be tackled by keeping track of prefix and suffix counts dynamically as we traverse the string.
___
# Approach
- <!-- Describe your approach to solving the problem. -->Suffix Counts: Initially, we count all the zeros and ones in the entire string to populate the suffixZeroes and suffixOnes.
- Iteration and Pattern Counting:
*As we iterate through the string, each character is transferred from the suffix to the prefix count.
*If we encounter a '0', we decrement suffixZeroes, add to ways using the current prefix and suffix counts for pattern "101", and increment prefixZeroes.
*If we encounter a '1', we decrement suffixOnes, add to ways using the current prefix and suffix counts for pattern "010", and increment prefixOnes.
- By maintaining these running totals, we efficiently count all valid "010" and "101" subsequences in a single pass through the string.
___
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where 'n' is the length of the string 's'.
___
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1).
___
# Code
```csharp []
public class Solution {
    public long NumberOfWays(string s) {
        int n = s.Length;
        long prefixZeroes = 0, prefixOnes = 0;
        long suffixZeroes = 0, suffixOnes = 0;
        long ways = 0;

        // Count initial suffix counts
        foreach (char c in s) {
            if (c == '0') suffixZeroes++;
            else suffixOnes++;
        }

        // Iterate through the array to calculate valid ways for '010' and '101' patterns
        for (int i = 0; i < n; i++) {
            if (s[i] == '0') {
                suffixZeroes--;
                ways += prefixOnes * suffixOnes; // Pattern '101'
                prefixZeroes++;
            } else if (s[i] == '1') {
                suffixOnes--;
                ways += prefixZeroes * suffixZeroes; // Pattern '010'
                prefixOnes++;
            }
        }

        return ways;
    }
}
```