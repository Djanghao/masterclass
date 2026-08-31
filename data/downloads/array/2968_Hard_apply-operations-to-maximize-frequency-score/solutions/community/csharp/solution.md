# C#, Sliding Window, O(n)

**Author:** gstieger
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4447881/](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4447881/)

---

# Intuition
The problem is akin to finding the largest contiguous subarray in a sorted array where the total cost of making all elements equal does not exceed a given limit k. The intuition here is to use a sliding window approach, adjusting the window size and the target value (modeIndex) within it to minimize the cost.

# Approach
- Sort the Array: First, sort the array to bring similar values close together, which is crucial for efficient cost calculation.
- Sliding Window: Use a sliding window (defined by tail and head) to explore different subarrays.
- Cost Calculation and Adjustment: Calculate the cost of making all elements in the window equal to the element at modeIndex. Adjust modeIndex within the window to minimize this cost.
- Optimizing Window Size: Expand the window by moving head and adjust modeIndex to keep the cost within k. If the cost exceeds k, shrink the window from tail.
- Finding the Best Window: Track the maximum window size where the total cost is within the limit k.

# Complexity

1. **Sorting Complexity**: The initial sort of the array typically has a time complexity of **O(n log n)**, where **n** is the number of elements in the array. This is based on the average complexity of efficient sorting algorithms like mergesort or quicksort, which are commonly used in standard library sort functions. Using radixsort could reduce overall complexity to approach **O(n)**.

2. **Sliding Window Complexity**: After sorting, the sliding window mechanism, where the `modeIndex` is incremented globally and the window is adjusted, contributes an additional **O(n)** complexity, as each element is considered once in the process.

3. **Overall Time Complexity**: The overall time complexity of the algorithm is dominated by the sorting step, making it **O(n log n)**. While the sliding window adds to the total computation, its linear complexity does not exceed that of the sorting step.

4. **Space Complexity**: The space complexity remains **O(1)** if the sort is done in-place (which is typically the case in many programming environments).

# Code
```
public class Solution {
    private long CalculateDeltaCost(int[] nums, int tail, int head, int curIndex, int newIndex) {
        long diff = nums[newIndex] - nums[curIndex];
        long costAdd = diff * (curIndex - tail + 1);
        long costSub = diff * (head - newIndex + 1);

        return costAdd - costSub;
    }

    public int MaxFrequencyScore(int[] nums, long k) {
        Array.Sort(nums);
        int tail = 0, head = -1, best = 0, modeIndex = 0;
        long currentCost = 0;

        for (head = 0; head < nums.Length; head++) {
            // Update cost for the new head
            currentCost += Math.Abs(nums[head] - nums[modeIndex]);

            // Steering the mode to reduce the cost
            while (modeIndex < head) {
                long deltaCost = CalculateDeltaCost(nums, tail, head, modeIndex, modeIndex + 1);
                if (deltaCost <= 0) {
                    currentCost += deltaCost;
                    modeIndex++;
                } else {
                    break;
                }
            }
 
            // Update the best window size
            if (currentCost <= k) {
                best = Math.Max(best, head - tail + 1);
            }
            // Adjusting tail when the cost exceeds k
            else if (tail < head) {
                currentCost -= Math.Abs(nums[modeIndex] - nums[tail]);
                tail++;
            }
            else
                break;
        }

        return best;
    }
}

```