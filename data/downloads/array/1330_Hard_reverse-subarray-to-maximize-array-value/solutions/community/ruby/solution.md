# Ruby Solution (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/3443890/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/3443890/)

---

# Approach
This is neal99's solution translated into Ruby:
https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/489882/o-n-solution-with-explanation/

Check out his explanation -- it's better than mine would be.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
def max_value_after_reverse(nums)
    maximin, minimax = -Float::INFINITY, Float::INFINITY

    total = 0

    (1...nums.length).each do |i|
        min, max = [nums[i],nums[i-1]].min, [nums[i],nums[i-1]].max
        maximin = min if min > maximin
        minimax = max if max < minimax
        total += max - min
    end

    change = 2 * (maximin - minimax)

    (1...nums.length).each do |i| # edge cases
        left_option = (nums[0] - nums[i]).abs - (nums[i] - nums[i-1]).abs
        right_option = (nums[-1] - nums[i-1]).abs - (nums[i] - nums[i-1]).abs
        change = [left_option, right_option, change].max
    end

    total + change
end

```