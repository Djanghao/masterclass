# Beats 100.00%🔥of users with PHP - Memory 28.65 MB 🚀

**Author:** ImAbuSayed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4873457/](https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4873457/)

---

# Intuition
The problem is to find the maximum length of a subarray in the given array `nums` such that the sum of the subarray is equal to twice the sum of the subarray preceding it. 

# Approach
We can solve this problem using dynamic programming and binary search. 

First, we calculate an array `s` where `s[i]` represents the sum of the elements from `nums[0]` to `nums[i-1]`. This can be done by iterating over the array and calculating the cumulative sum.

Next, we initialize two arrays: `f` to store the maximum length of subarrays ending at index `i`, and `pre` to store the index of the last subarray ending before index `i` with a sum that is half of the current subarray's sum.

We iterate over the array `nums` and for each element at index `i`, we update the maximum length of subarrays ending at index `i` based on the maximum length of the subarray ending at index `pre[i]` plus 1. We also calculate the target sum for the next subarray by multiplying the sum of the current subarray by 2 and subtracting the sum of the subarray ending at index `pre[i]`.

To find the index `j` where the target sum is located, we perform a binary search on the `s` array from index `i+1` to `n+1`, where `n` is the length of the array `nums`.

Finally, we return the maximum length of subarrays stored in the `f` array.

# Complexity
- Time complexity: The time complexity of this approach is O(n log n), where n is the length of the array `nums`. This is because we perform a binary search for each element in the array, resulting in a logarithmic time complexity. The overall time complexity is dominated by the binary search operation.

- Space complexity: The space complexity is O(n) because we use additional arrays `s`, `f`, and `pre` of size n+1 to store the cumulative sum, maximum subarray lengths, and previous subarray indices, respectively.

# Code
```
class Solution {
    function findMaximumLength($nums) {
        $n = count($nums);
        $s = array_fill(0, $n + 1, 0);
        for ($i = 1; $i <= $n; $i++) {
            $s[$i] = $s[$i - 1] + $nums[$i - 1];
        }
        $f = array_fill(0, $n + 1, 0);
        $pre = array_fill(0, $n + 2, 0);
        for ($i = 1; $i <= $n; $i++) {
            $pre[$i] = max($pre[$i], $pre[$i - 1]);
            $f[$i] = $f[$pre[$i]] + 1;
            $target = $s[$i] * 2 - $s[$pre[$i]];
            $j = $this->binarySearch($s, $target, $i + 1, $n + 1);
            $pre[$j] = $i;
        }
        return $f[$n];
    }

    private function binarySearch($nums, $target, $left, $right) {
        while ($left < $right) {
            $mid = $left + intdiv($right - $left, 2);
            if ($nums[$mid] == $target) {
                return $mid;
            } elseif ($nums[$mid] < $target) {
                $left = $mid + 1;
            } else {
                $right = $mid;
            }
        }
        return $left;
    }
}
```