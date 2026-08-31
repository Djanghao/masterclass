# Beats 🔥 100.00% 🔥 of users with PHP - 🚀 Memory 29.03 MB 🚀

**Author:** ImAbuSayed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/4871036/](https://leetcode.com/problems/find-right-interval/solutions/4871036/)

---

# Intuition
The problem asks us to find the right interval for each interval in the given list of intervals. The right interval for an interval `i` is defined as the interval `j` such that the start of interval `j` is greater than or equal to the end of interval `i`, and the start of interval `j` is the smallest possible value. If there is no such interval `j`, the right interval for interval `i` is -1.

# Approach
To solve the problem, we can first add the original index of each interval to the interval itself. This will help us keep track of the original order of the intervals.

Next, we can sort the intervals based on their start values. This will allow us to perform a binary search to find the right interval for each interval efficiently.

Then, we can initialize an answer array with -1s of length equal to the number of intervals.

For each interval, we can perform a binary search to find the index `j` such that the start value of interval `j` is greater than or equal to the end value of the current interval. If such an index `j` exists, we can update the answer array at the original index of the current interval with the original index of interval `j`.

Finally, we can return the answer array.

# Complexity
- Time complexity: O(n log n), where n is the number of intervals. This is because of the sorting operation that takes O(n log n) time.
- Space complexity: O(n), where n is the number of intervals. This is due to the additional space required to store the sorted intervals and the answer array.

# Code
```
class Solution {
    function findRightInterval($intervals) {
        $n = count($intervals);
        for ($i = 0; $i < $n; $i++) {
            $intervals[$i][] = $i; // Add original index
        }
        sort($intervals);

        $ans = array_fill(0, $n, -1);
        for ($i = 0; $i < $n; $i++) {
            $target = $intervals[$i][1];
            $j = $this->binarySearch($intervals, $target);
            if ($j < $n) {
                $ans[$intervals[$i][2]] = $intervals[$j][2];
            }
        }

        return $ans;
    }

    private function binarySearch($intervals, $target) {
        $low = 0;
        $high = count($intervals) - 1;

        while ($low <= $high) {
            $mid = floor(($low + $high) / 2);
            if ($intervals[$mid][0] >= $target) {
                $high = $mid - 1;
            } else {
                $low = $mid + 1;
            }
        }

        return $low;
    }
}
```