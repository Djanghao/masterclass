# Simple  O(n) solution  || Beat 100% in space and time

**Author:** rakrisi
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/5387629/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/5387629/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the approach is to identify the minimum and maximum values in the array. you may need to delete elements either to the left of the smallest element, to the right of the largest element, or on both sides
# Approach
<!-- Describe your approach to solving the problem. -->

Identify Minimum and Maximum Positions: First, iterate through the array to find the positions of the smallest ($minPosition) and largest ($maxPosition) elements.

# Calculate Deletions:

**Left Deletions:** This is calculated as the maximum of the positions of $minPosition and $maxPosition plus one.
**Right Deletions:** This is calculated as the total length of the array minus the minimum of $minPosition and $maxPosition.
**Both Sides Deletions:** This considers deleting from the start to $minPosition and from $maxPosition to the end, plus one for the contiguous block of duplicates in between.
**Return** the Minimum Deletions: Finally, return the minimum value among the three calculated deletion scenarios. 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minimumDeletions($nums) {
       $n = count($nums);
        $minPosition = 0;
        $maxPosition = 0;

        // Find positions of minimum and maximum elements
        for ($i = 0; $i < $n; $i++) {
            if ($nums[$i] < $nums[$minPosition]) {
                $minPosition = $i;
            }
            if ($nums[$i] > $nums[$maxPosition]) {
                $maxPosition = $i;
            }
        }

        // Calculate deletions from left, right, and both sides
        $leftDeletions = max($minPosition, $maxPosition) + 1;
        $rightDeletions = $n - min($minPosition, $maxPosition);
        $bothSidesDeletions = min($minPosition, $maxPosition) + ($n - max($minPosition, $maxPosition) + 1);

        // Return the minimum deletions required
        return min($leftDeletions, $rightDeletions, $bothSidesDeletions);
        
    }
}
```