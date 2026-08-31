# PHP Solution

**Author:** garimarajput748
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/6054194/](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/6054194/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function shortestSubarray($nums, $k) {
        $res = PHP_INT_MAX; // Equivalent to Integer.MAX_VALUE
    $curSum = 0;
    $deque = []; // Monotonic deque to store pairs (prefix_sum, end_idx)

    for ($r = 0; $r < count($nums); $r++) {
        $curSum += $nums[$r];

        // If the current sum is greater than or equal to k
        if ($curSum >= $k) {
            $res = min($res, $r + 1);
        }

        // Find the minimum valid window ending at r
        while (!empty($deque) && $curSum - $deque[0]['key'] >= $k) {
            $front = array_shift($deque);
            $res = min($res, $r - $front['value']);
        }

        // Validate the monotonic deque
        while (!empty($deque) && end($deque)['key'] > $curSum) {
            array_pop($deque);
        }

        // Add the current prefix sum and index to the deque
        $deque[] = ['key' => $curSum, 'value' => $r];
    }

    return $res === PHP_INT_MAX ? -1 : $res;
    }
}
```