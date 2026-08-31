# Two Pointers

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/4413589/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/4413589/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to find way to make the left and right pointer the same so that it can form a palindrome. 
If left is smaller then add next element to it. 
If right is smaller then add previous element to it. 
Once i becomes greater than j that means we have achieved our palindrome. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def minimum_operations(nums)
    n = nums.length 
    i = 0 
    j = n-1
    left = nums[i]
    right = nums[j]
    count = 0

    while(i < j) do         
        if left == right
            i += 1
            j -= 1
            left = nums[i]
            right = nums[j]
        elsif left < right
            i += 1
            left += nums[i]
            count += 1              
        else
           j -= 1
           right += nums[j]
           count += 1
        end 
    end 

    count 
end

```