# 2 pointers

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/3606388/](https://leetcode.com/problems/3sum-smaller/solutions/3606388/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_smaller(nums, target)
    nums.sort! 
    count = 0 

    for i in (0...nums.length-2) do 
        left = i + 1 
        right = nums.length-1

        while(left < right) do 
            sum = nums[i]+nums[left]+nums[right]

            if target-sum == 0
                right -= 1
            elsif target-sum > 0 
                count += (right-left)
                left += 1               
            else
                right -= 1
            end 

        end 
    end 

    count
end
```