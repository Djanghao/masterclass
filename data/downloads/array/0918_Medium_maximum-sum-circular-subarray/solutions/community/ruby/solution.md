# Ruby O(n) Kadane's algorithm Intuition

**Author:** sinistersup2001
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/3066566/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/3066566/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def max_subarray_sum_circular(nums)
    curr_min = 0
    curr_max = 0
    mini = 1.0/0.0
    maxi = -1.0/0.0
    sum = 0
    nums.each do |num|
        curr_min =  [num, curr_min + num].min
        mini = [mini, curr_min].min
        curr_max = [num, curr_max + num].max
        maxi = [maxi, curr_max].max
        sum += num
    end
    
    if maxi > 0
        [maxi, sum - mini].max
    else
        maxi
    end
end
```