# C# Prefix Sum or Difference Array Solution

**Author:** GetRid
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/5707769/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/5707769/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Pair Sums: For each pair of numbers (nums[i], nums[n-1-i]), calculate the possible sums.
Frequency and Adjustments: Instead of trying to directly manipulate sums, let's focus on the frequency of each sum and how many moves it takes to reach a common sum.
We can create a delta array where:

Exact matches: We decrease the number of required changes for sums that can be reached exactly by the pair without any modifications.
One change needed: We handle scenarios where only one element needs to be changed.
Two changes needed: Finally, we handle cases where both elements need to be changed.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Delta Array:
//  *We start by assuming 2 changes for each possible sum.
//  *For sums that can be reached with fewer changes, we adjust the delta array accordingly.
//  *delta[low] -= 1: Indicates that sums greater than or equal to low need one less move.
//  *delta[sum] -= 1: Subtracts one more move for the exact sum.
//  *delta[sum + 1] += 1: Indicates that sums greater than the exact sum need one more move.
//  *delta[high + 1] += 1: Marks that sums beyond high go back to needing 2 changes.
//  Final Calculation:
//  *Iterate through all possible sums and calculate the minimum number of moves required.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n + limit).
*The loop that processes pairs runs in O(n/2), which is O(n) overall.
*The final loop that computes the minimum moves from the 'delta' array runs in O(2 x limit), creating the overall time complexity of O(n + limit).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(limit). The 'delta' array has a size proportional to 2 X limit, which is the main space usage.
Therefore, the space complexity is O(limit).
___

# Code
```csharp []
public class Solution {
    public int MinMoves(int[] nums, int limit) {
        int n = nums.Length;
        int[] delta = new int[2 * limit + 2];

        for (int i = 0; i < n / 2; i++) {
            int a = nums[i];
            int b = nums[n - 1 - i];
            
            int low = Math.Min(a, b) + 1;
            int high = Math.Max(a, b) + limit;
            int sum = a + b;

            delta[2] += 2; // Default: 2 changes required for every sum
            delta[low] -= 1; // Decrease to 1 change if within this range
            delta[sum] -= 1; // If we hit the exact sum, subtract 1 more (total 0 changes needed)
            delta[sum + 1] += 1; // After the exact sum, increment (1 more change required)
            delta[high + 1] += 1; // After the range, go back to 2 changes
        }

        int minMoves = int.MaxValue;
        int currentMoves = 0;
        for (int i = 2; i <= 2 * limit; i++) {
            currentMoves += delta[i];
            minMoves = Math.Min(minMoves, currentMoves);
        }

        return minMoves;
    }
}
```