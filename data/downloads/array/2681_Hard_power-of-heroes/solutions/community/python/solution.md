# Sort + Math - Explained

**Author:** tr1nity
**Votes:** 9
**Link:** [https://leetcode.com/problems/power-of-heroes/solutions/3522650/](https://leetcode.com/problems/power-of-heroes/solutions/3522650/)

---

```py
class Solution:
    def sumOfPower(self, nums: List[int]) -> int:
        M = 10 ** 9 + 7
        # sort the input so that we can easily find the min and max
        # besides, sorting won't affect the result since original position doesn't matter
        nums.sort()
        res, s = 0, 0
        for x in nums:
            # if we just include one element [x], 
            # it is easy to see it contributes x * x * x
            # if we include a pair [x, y] where x < y, 
            # it contributes x * y * y 
            # if we include some numbers between x and y, i.e. [x, a, b, c, y] where x < a, b, c < y
            # the power is also x * y * y 
            # the number of subsets will be 2 ^ (j - i + 1)
            # e.g. [x, a, y], [x, a, b, y], [x, a, b, c, y], [x, b, y], [x, b, c] ...
            # hence, for each pair, the power will be x * y * y * 2 ^ (j - i + 1)
            # combining above two cases, for the index j, we got
            # (nums[j] * nums[j] * nums[j]) + (nums[j] * nums[j]) * \\sum_{i = 0} ^ {j - 1} (nums[j] * 2 ^ (j - i + 1))
            # so how to calculate \\sum_{i = 0} ^ {j - 1} (nums[j] * 2 ^ (j - i + 1)) in a linear time?
            # let F(i) = \\sum_{i = 0} ^ {j - 1} (nums[j] * 2 ^ (j - i + 1))
            # rewrite the above formula, then we will see that F(i + 1) would be 2 * F(i) + nums[i]
			# if you have no idea on above mathematic explanation, 
			# try some cases and you will see the pattern
			# nums = [1, 2, 3, 4]
			# 1 * 1 * ((0) + 1)
			# 2 * 2 * ((1) * 2 ^ 0 + 2)
			# 3 * 3 * ((1 * 2 ^ 1 + 2) * 2 ^ 0 + 3)
			# 4 * 4 * ((1 * 2 ^ 2 + 2 * 2 ^ 1 + 3) * 2 ^ 0 + 4)
			# ...
			# x * x * (prev_s * 2 + x)
            res += (x + s) * (x * x) 
            res %= M
            s = (s * 2 + x) % M
        return res
```

**p.s. Join us on the LeetCode The Hard Way Discord Study Group for timely discussion! Link in bio.**