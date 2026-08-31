# BEATS 100% : Efficiently Maximize Score Through Incremental Selection in PHP

**Author:** webdevanjali
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5944236/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5944236/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To maximize the score from the given operations, we should always start with the maximum element in the array. By repeatedly selecting this maximum and incrementing it for k operations, we ensure that we add the highest possible values to our score.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Find the Maximum Value:** Use the `max` function to find the maximum element in the `nums` array. This value will be the starting point for our score calculations.
2. **Calculate the Score**: Instead of modifying the array, we can calculate the total score directly:

    - Use a loop that runs `k` times.
    - In each iteration, add the value of `max + i` (where `i` is the current iteration index) to a cumulative sum.

3. **Return the Total Sum**: After completing `k` iterations, return the total sum.

# Complexity
- Time complexity: **$$ O(n+k)$$**
    - Finding the maximum: $$O(n)$$, where nn is the length of the nums array.
    - The loop runs `k` times: $$O(k)$$.
    - **Total**:$$ O(n+k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$, as we are using a constant amount of extra space regardless of the input size.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function maximizeSum($nums, $k) {
        $max = max($nums);
        $sum =0;
        for ($i = 0; $i < $k; $i++) {
            $sum += ($max + $i);
        }
        return $sum;
    }
}
```