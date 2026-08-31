# C# Solution for Find Missing Observations Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-missing-observations/solutions/5739231/](https://leetcode.com/problems/find-missing-observations/solutions/5739231/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this C# solution is to treat the missing rolls\u2019 sum as a fixed value that needs to be distributed across n dice, with each dice having a value between 1 and 6. Since we know the total required sum for all the rolls (based on the mean), the key idea is to:

\u2022	Calculate how much the missing rolls must sum up to.
\u2022	Evenly distribute this sum among the n missing rolls.
\u2022	Handle any remainder from dividing the sum by n by incrementing some of the missing rolls to ensure the total matches.

This avoids iterative adjustments and focuses on distributing the sum in one pass.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Calculate Total Sum:
Compute the total required sum of all n + m rolls based on the given mean. This is done by multiplying mean * (n + m).
2.	Calculate the Observed Sum:
Compute the sum of the observed rolls from the rolls array using a loop.
3.	Calculate Missing Sum:
Subtract the observed sum from the total required sum to get the sum that the missing n rolls must provide.
4.	Feasibility Check:
Check whether the missing sum can be distributed among n dice, where each dice must be between 1 and 6. The minimum possible sum for n dice is n * 1 and the maximum is n * 6. If the missing sum falls outside this range, return an empty array because it\u2019s impossible to distribute.
5.	Base Value Assignment:
Compute the base value for each missing roll by dividing the missing sum by n. This ensures the sum is approximately evenly distributed among the n rolls.
6.	Distribute Remainder:
The remainder from dividing the sum by n is distributed by incrementing the first few rolls, ensuring that no roll exceeds 6.
7.	Return the Result:
Return the array of missing rolls with values that satisfy the total sum requirement.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	O(m) for calculating the sum of the m observed rolls in the rolls array.
\u2022	O(n) for filling the result array and distributing the remainder across the first n missing rolls.

Thus, the overall time complexity is O(m + n), where m is the size of the rolls array, and n is the number of missing rolls.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	O(m) for storing the input array rolls.
\u2022	O(n) for the result array, which holds the missing rolls.
\u2022	We use a few variables (totalSum, observedSum, etc.) which take constant space, O(1).

Thus, the overall space complexity is O(m + n).

# Code
```csharp []
public class Solution {
    public int[] MissingRolls(int[] rolls, int mean, int n) {
        // Step 1: Calculate the total sum for n + m rolls
        int m = rolls.Length;
        int totalSum = mean * (n + m);
        
        // Step 2: Calculate the sum of the known rolls
        int observedSum = 0;
        foreach (int roll in rolls) {
            observedSum += roll;
        }
        
        // Step 3: Calculate the missing sum for the n missing rolls
        int missingSum = totalSum - observedSum;
        
        // Step 4: Check if it's feasible to distribute the missing sum among n rolls
        if (missingSum < n || missingSum > 6 * n) {
            return new int[0]; // Impossible to distribute
        }
        
        // Step 5: Compute the base value for each missing roll
        int baseValue = missingSum / n;
        int remainder = missingSum % n;
        
        // Step 6: Prepare the result array
        int[] result = new int[n];
        
        // Step 7: Distribute base values and the remainder
        for (int i = 0; i < n; i++) {
            // Give each roll the base value, and distribute the remainder across the first few rolls
            result[i] = baseValue + (i < remainder ? 1 : 0);
        }
        
        return result;
    }
}
```