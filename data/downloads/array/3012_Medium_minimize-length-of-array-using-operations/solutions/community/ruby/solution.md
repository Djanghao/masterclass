# Greedy

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4657779/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4657779/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

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
def minimum_array_length(nums)
    min = nums.min 
    count = 0 

    # greedy 
    # if we find the minimum number then answer is count of the minimum number by 2 
    # special case:   [5,2,2,2,9,10] => in this case the answer should be 2 but it is actually 1 
    # In this case : when number is not divided by minimum we can do modulo to make it more smaller and we
    # will have unique minimum which will make the count 1. 
    for num in nums do 
        if num%min != 0 
            return 1
        elsif num == min 
            count += 1
        end 
    end 
    
    (count+1)/2 
end
```