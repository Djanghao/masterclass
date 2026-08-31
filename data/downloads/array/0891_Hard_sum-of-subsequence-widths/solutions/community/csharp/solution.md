# 💥💥 C# | Runtime and Memory beats 100%! [EXPLAINED]

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/sum-of-subsequence-widths/solutions/5762831/](https://leetcode.com/problems/sum-of-subsequence-widths/solutions/5762831/)

---

# Intuition
To solve the problem of finding the sum of widths of all subsequences, I need to understand that each element's contribution is determined by how often it is the maximum or minimum in various subsequences. Sorting the array helps simplify this process, making it easier to compute these contributions.

# Approach
Sort the Array;

Compute Powers of 2;

Calculate Contributions;

Sum and Modulo.

# Complexity
- Time complexity:
O(n log n) due to sorting.

- Space complexity:
O(n) for sorting powers of 2.

# Code
```csharp []
public class Solution {
    public int SumSubseqWidths(int[] nums) {
        // Define the modulus value for large numbers
        const int MOD = 1000000007;
        
        // Get the number of elements in the array
        int n = nums.Length;

        // Sort the array in ascending order
        Array.Sort(nums);

        // Create an array to store powers of 2
        long[] powerOfTwo = new long[n];
        powerOfTwo[0] = 1; // 2^0 is 1

        // Fill the powerOfTwo array with values of 2^i % MOD
        for (int i = 1; i < n; ++i) {
            powerOfTwo[i] = (powerOfTwo[i - 1] * 2) % MOD;
        }

        // Initialize the result to 0
        long result = 0;

        // Compute the sum of widths of all subsequences
        for (int i = 0; i < n; ++i) {
            // Calculate the contribution of nums[i] to the result
            result = (result + (powerOfTwo[i] - powerOfTwo[n - 1 - i]) * nums[i]) % MOD;
        }

        // Return the result as an integer
        return (int)result;
    }
}

```