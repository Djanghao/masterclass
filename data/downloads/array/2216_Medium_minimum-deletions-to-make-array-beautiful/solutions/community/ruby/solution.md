# Stack solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/4116364/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/4116364/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def min_deletion(nums)
    # How many deletes to fulfill conditions:
    # 1. nums.size.even? == true
    # 2. nums[i] != nums[i + 1] for all i % 2 == 0.
    
    stack = []
    index = 0
    answer = 0
    while index < nums.size
        while stack.size > 0 and nums[index] != nums[stack[-1]]
            answer = answer + 1
            stack = []
        end
        
        if answer.even? 
            stack << index
        else
           answer = answer + 1
        end

        

        index = index + 1
    end

    nums.size - answer
end

```