# C# Solution for Grumpy Bookstore Owner Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5344624/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5344624/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
By using prefix sums, we can efficiently compute the sum of any subarray. This will allow us to determine the best window of minutes where we should apply the secret technique to maximize satisfied customers.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Calculate the Initial Number of Satisfied Customers:
	\u2022	Iterate through the customers array and sum the customers where the owner is not grumpy (grumpy[i] == 0).
2.	Compute Prefix Sums:
	\u2022	Create a prefix sum array where each element at index i contains the total number of customers from the start up to index i when the owner is grumpy.
3.	Sliding Window Using Prefix Sums:
	\u2022	Use the prefix sums to compute the number of grumpy customers in any subarray of length minutes efficiently.
	\u2022	Find the maximum number of grumpy customers that can be satisfied by using the secret technique for any minutes consecutive minutes.
4.	Combine Results:
	\u2022	The final result is the sum of the initially satisfied customers and the maximum number of additional satisfied customers found using the prefix sums.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(n), where n is the length of the customers array. This is because:

\u2022	We iterate through the array to calculate initially satisfied customers.
\u2022	We compute the prefix sums in another pass through the array.
\u2022	We use the prefix sums to find the maximum additional satisfied customers in a final pass.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) due to the additional prefix sum array that stores cumulative sums of grumpy customers.

# Code
```
public class Solution {
    public int MaxSatisfied(int[] customers, int[] grumpy, int minutes) {
        int n = customers.Length;
        int satisfiedCustomers = 0;
        
        // Step 1: Calculate initially satisfied customers
        for (int i = 0; i < n; i++) {
            if (grumpy[i] == 0) {
                satisfiedCustomers += customers[i];
            }
        }

        // Step 2: Compute prefix sums for grumpy customers
        int[] grumpyPrefixSum = new int[n + 1];
        for (int i = 0; i < n; i++) {
            grumpyPrefixSum[i + 1] = grumpyPrefixSum[i];
            if (grumpy[i] == 1) {
                grumpyPrefixSum[i + 1] += customers[i];
            }
        }

        // Step 3: Find the maximum number of additional satisfied customers using prefix sums
        int maxAdditionalSatisfied = 0;
        for (int i = 0; i <= n - minutes; i++) {
            int end = i + minutes;
            int additionalSatisfied = grumpyPrefixSum[end] - grumpyPrefixSum[i];
            maxAdditionalSatisfied = Math.Max(maxAdditionalSatisfied, additionalSatisfied);
        }

        // Step 4: Return the total satisfied customers
        return satisfiedCustomers + maxAdditionalSatisfied;
    }
}
```