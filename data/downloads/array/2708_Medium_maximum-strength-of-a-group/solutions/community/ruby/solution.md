# Ruby solution O(n)

**Author:** RajalakshmiMadavan
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/5351136/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/5351136/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Do a product of all the elements in an array. While looping the nums divide the product by current element which will give us maximum product. But before doing this, implement a separate logic when the array has element 0 because if we have one element as 0 in nums it will result the product to 0
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def max_strength(nums)
   flag = 0
   total = 1
   max = -99999
   if nums.include?(0)
     flag = 1 
     nums = nums - [0]
     return 0 if nums.empty?
   end
   if nums.count == 1 
     if flag == 1
       return nums[0] if nums[0] > 0 
       return 0
     else
       return nums[0]
     end
    end
   nums.each do |a|
     total = total*a
   end
   nums.each do |a|
      ans = (total/a)
      max = ans if ans > max
   end
   max > total ? max : total
end
```