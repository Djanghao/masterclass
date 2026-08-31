# C# Modular Exponentiation with Mathematical Counting Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/5771561/](https://leetcode.com/problems/count-good-numbers/solutions/5771561/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Count the possible choices for even and odd indices.
Recognize the exponential nature of the problem: The number of valid strings is based on powers of 5 and 4.
Apply modular exponentiation to efficiently handle large numbers and avoid overflow, ensuring that the result is within the given modulo constraint.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Modular Exponentation (ModExp function):
//  *This function calculates base^exp mod mod efficiently using the "exponentiation by squaring" method,
//  which has a time complexity of O(log exp).
//  CountGoodNumbers:
//  *We first calculate how many even-indexed and odd-indexed positions are in the string.
//  *We then use modular exponentiation to calculate the number of valid strings for even and odd indexed 
//  positions.
//  *Finally, we multiply the results and return the product modulo 10^9 + 7. 
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(log n), for each call to ModExp.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1) because we only use a few extra variables.
___

# Code
```csharp []
using System;

public class Solution {
    private const int MOD = 1000000007;

    // Helper function to calculate (base^exp) % mod using modular exponentiation
    private long ModExp(long baseValue, long exp, int mod) {
        long result = 1;
        baseValue = baseValue % mod;

        while (exp > 0) {
            // If exp is odd, multiply the current base value to result
            if ((exp & 1) == 1) {
                result = (result * baseValue) % mod;
            }

            // Square the base value
            baseValue = (baseValue * baseValue) % mod;

            // Halve the exponent
            exp >>= 1;
        }

        return result;
    }

    public int CountGoodNumbers(long n) {
        // Number of even indexed positions (n_even) is (n + 1) / 2
        long n_even = (n + 1) / 2;

        // Number of odd indexed positions (n_odd) is n / 2
        long n_odd = n / 2;

        // Calculate 5^n_even % MOD and 4^n_odd % MOD
        long even_result = ModExp(5, n_even, MOD);
        long odd_result = ModExp(4, n_odd, MOD);

        // Return the product modulo MOD
        return (int)((even_result * odd_result) % MOD);
    }
}

//  Modular Exponentation (ModExp function):
//  *This function calculates base^exp mod mod efficiently using the "exponentiation by squaring" method,
//  which has a time complexity of O(log exp).
//  CountGoodNumbers:
//  *We first calculate how many even-indexed and odd-indexed positions are in the string.
//  *We then use modular exponentiation to calculate the number of valid strings for even and odd indexed 
//  positions.
//  *Finally, we multiply the results and return the product modulo 10^9 + 7. 
```