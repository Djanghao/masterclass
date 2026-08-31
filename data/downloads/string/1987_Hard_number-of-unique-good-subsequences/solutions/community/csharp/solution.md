# C# Dynamic Programming Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/5801422/](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/5801422/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->Recognize the Need for Dynamic Counting: The first thought is that this problem involves counting subsequences, but with specific restrictions (e.g., no leading zeros except for the subsequence "0"). The natural approach is to break the problem down into subsequences that end in '0' and those that end in '1', because each binary character can either extend existing subsequences or form new ones.

- Handle Leading Zeros Specially: The condition that subsequences cannot have leading zeros (except for "0" itself) suggests that we need to treat subsequences formed by '1's differently from those formed by '0's. This leads to the idea of separating subsequences ending in '0' from those ending in '1'.

- Accumulate Results with Dynamic Programming: Every time we encounter a '1', it can extend all previously formed subsequences and also start new subsequences. Similarly, a '0' extends subsequences but only those that already exist, and we handle the special case of the "0" subsequence separately.
___

# Approach
<!-- Describe your approach to solving the problem. -->
//  subseqEndingIn1 keeps track of subsequences ending in '1'. Every time a '1' is encountered, we can 
//  create new subsequences by appending it to all existing subsequences and also count '1' as a subsequence 
//  by itself.
//  subseqEndingIn0 keeps track of subsequences ending in '0'. Every time a '0' is encountered, it extends
//  subsequences that end with '1' or '0'.
//  hasZero is a flag used to check if there is at least one '0'. If there is, we need to account for the 
//  valid subsequence "0".
//  Modulo operations ensure that the results do not exceed 1069 + 7.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where 'n' is the length of the binary string..
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1), since we are only using a few variables.
___

# Code
```csharp []
public class Solution {
    public int NumberOfUniqueGoodSubsequences(string binary) {
        const int MOD = 1000000007;
        long subseqEndingIn0 = 0;  // Count of subsequences ending with '0'
        long subseqEndingIn1 = 0;  // Count of subsequences ending with '1'
        bool hasZero = false;      // To check if the subsequence "0" should be added

        foreach (char c in binary) {
            if (c == '1') {
                subseqEndingIn1 = (subseqEndingIn1 + subseqEndingIn0 + 1) % MOD;  // New '1' can form new subsequences
            } else {
                subseqEndingIn0 = (subseqEndingIn0 + subseqEndingIn1) % MOD;  // New '0' can extend subsequences
                hasZero = true;  // There is at least one '0'
            }
        }

        long result = (subseqEndingIn0 + subseqEndingIn1) % MOD;
        if (hasZero) {
            result = (result + 1) % MOD;  // Add the subsequence "0" if there was at least one '0'
        }

        return (int)result;
    }
}

```