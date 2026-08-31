# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/5965236/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/5965236/)

---

# Intuition
Split an array of integers into two equal parts so that the absolute difference of their sums is minimized. Since we have to deal with subsets, we can think of how we can generate combinations of sums from each half of the array. By examining these combinations, we can find the closest possible sums to each other.

# Approach
Split the array into two halves, generate all possible sums of subsets from each half, sort one half's sums, and for each sum from the first half, use binary search on the sorted sums of the second half to find the closest match that minimizes the absolute difference.

# Complexity
- Time complexity:
\uD835\uDC42 ( 2 \uD835\uDC5B / 2 log \u2061 ( 2 \uD835\uDC5B / 2 ) ) O(2 n/2 log(2 n/2 )) because we generate all possible subset sums for half of the array and then sort them while performing binary searches.

- Space complexity:
O(2 n/2 ) since we store all possible sums of subsets from one half of the array.

# Code
```csharp []
public class Solution {
    private List<List<int>> v1; // Stores sums for the first half
    private List<List<int>> v2; // Stores sums for the second half

    // Recursive function to generate sums of subsets
    private void GenerateSums(int[] nums, int i, int end, bool isSecondHalf, int count, int sum) {
        if (i == end) {
            if (!isSecondHalf) {
                v1[count].Add(sum); // Add sum to the first half
            } else {
                v2[count].Add(sum); // Add sum to the second half
            }
            return;
        }
        // Include the current number
        GenerateSums(nums, i + 1, end, isSecondHalf, count + 1, sum + nums[i]);
        // Exclude the current number
        GenerateSums(nums, i + 1, end, isSecondHalf, count, sum);
    }

    public int MinimumDifference(int[] nums) {
        int n = nums.Length;
        v1 = new List<List<int>>(new List<int>[n / 2 + 1]);
        v2 = new List<List<int>>(new List<int>[n / 2 + 1]);

        // Initialize each inner list
        for (int i = 0; i <= n / 2; i++) {
            v1[i] = new List<int>();
            v2[i] = new List<int>();
        }

        // Generate sums for both halves
        GenerateSums(nums, 0, n / 2, false, 0, 0);
        GenerateSums(nums, n / 2, n, true, 0, 0);

        // Calculate total sum
        int totalSum = nums.Sum();
        int halfSum = totalSum / 2;
        int minDiff = int.MaxValue;

        // Sort the second half sums for binary search
        foreach (var list in v2) {
            list.Sort();
        }

        // Iterate through all possible sums from the first half
        for (int i = 0; i <= n / 2; i++) {
            foreach (int currSum in v1[i]) {
                int target = halfSum - currSum;
                // Binary search to find the closest sum in the second half
                int closestSum = FindClosestSum(v2[n / 2 - i], target);
                minDiff = Math.Min(minDiff, Math.Abs(totalSum - 2 * (currSum + closestSum)));
            }
        }

        return minDiff;
    }

    // Helper function to find the closest sum to the target using binary search
    private int FindClosestSum(List<int> sums, int target) {
        int low = 0;
        int high = sums.Count - 1;

        // If the list is empty, return 0
        if (high < 0) return 0;

        // Binary search for the closest sum
        while (low < high) {
            int mid = low + (high - low) / 2;
            if (sums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        // Check candidates: the closest sum found
        int closestSum = sums[low];

        // If there's a previous candidate that might be closer
        if (low > 0) {
            closestSum = Math.Max(closestSum, sums[low - 1]);
        }

        return closestSum;
    }
}

```