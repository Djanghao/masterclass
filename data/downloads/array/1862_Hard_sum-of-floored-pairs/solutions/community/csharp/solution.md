# 💥💥 C# | 100% beats runtime AND memory [EXPLAINED]

**Author:** r9n
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/5806126/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/5806126/)

---


# Intuition
The goal is to find the sum of floor divisions for all possible pairs in the array, where one number divides the other. Directly computing this for every pair would be too slow, so we use a more efficient approach. By leveraging frequency counts and prefix sums, we avoid redundant calculations and speed up the process.


# Approach
Count Frequencies: First, count how many times each number appears in the array. This helps us quickly know how many times a number can contribute to the result.


Prefix Sum Array: Build a prefix sum array from these counts to quickly compute how many numbers fall within certain ranges.


Calculate Contributions: For each number, determine how many multiples of it exist and compute their contributions using the frequency and prefix sum arrays.


Sum Up Results: Accumulate these contributions, making sure to handle large numbers with modulo 10(and factor of 9) +7.


# Complexity
- Time complexity:
O(n + maxVal log maxVal): Efficient due to counting and prefix sums.


- Space complexity:
O(maxVal): Space for frequency and prefix sums, manageable given constraints.


# Code
```csharp []
public class Solution {
    private const int MOD = 1000000007;

    public int SumOfFlooredPairs(int[] nums) {
        int maxVal = 100000;
        int[] freq = new int[maxVal + 1];
        
        // Count the frequency of each number in the input array
        foreach (int num in nums) {
            freq[num]++;
        }
        
        // Build the prefix sum of the frequency array
        int[] prefixSum = new int[maxVal + 1];
        for (int i = 1; i <= maxVal; i++) {
            prefixSum[i] = prefixSum[i - 1] + freq[i];
        }
        
        long result = 0;
        
        // For each number i, calculate its contribution to the result
        for (int i = 1; i <= maxVal; i++) {
            if (freq[i] == 0) continue;  // Skip numbers that don't appear in the input

            // For each multiple of i, sum the floor divisions
            for (int multiple = i; multiple <= maxVal; multiple += i) {
                int low = multiple;
                int high = Math.Min(maxVal, multiple + i - 1);
                int countInRange = prefixSum[high] - prefixSum[low - 1];

                result = (result + (long)freq[i] * countInRange * (multiple / i)) % MOD;
            }
        }
        
        return (int)result;
    }
}

```