# TypeScript | Runtime 60 ms Beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5778362/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5778362/)

---

# Intuition
I need to find all ways to arrange an array such that every pair of adjacent elements in the arrangement adds up to a perfect square. Since the array size is manageable, I can try all possible arrangements to see which ones work.


# Approach
Generate Permutations: I generate all possible ways to arrange the array.


Check Validity: For each arrangement, I check if every adjacent pair adds up to a perfect square.


# Complexity
- Time complexity:
O(n! * n), due to generating permutations and checking each one.


- Space complexity:
O(n), for tracking the permutation state.


# Code
```csharp []
public class Solution {
    public int MinKBitFlips(int[] nums, int k) {
        int n = nums.Length;
        int flips = 0; // Total number of flips
        int currentFlips = 0; // Number of flips affecting the current index
        int[] diff = new int[n + 1]; // Difference array to track flip operations

        for (int i = 0; i < n; i++) {
            // Update current flips based on the difference array
            currentFlips += diff[i];
            
            // Determine if the current bit is flipped an odd number of times or not
            if ((nums[i] + currentFlips) % 2 == 0) {
                // If it's 0 and should be 1, flip starting at index i
                if (i + k > n) {
                    return -1; // Not possible to flip a subarray of length k
                }
                flips++;
                currentFlips++;
                // Apply the flip operation
                diff[i + k]--;
            }
        }
        return flips;
    }
}

```