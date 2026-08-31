# Stack Solution, O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/5435209/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/5435209/)

---


# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def most_competitive(nums, k)
    stack = []
    i = 0
    while i < nums.size
        while stack[-1] and nums[i] < stack[-1] 
            elements_remaining = nums.size - (i + 1) 
            k_elements_needed = k - stack.size
            # If our stack size is too small when compared
            # to elements left to traverse and k, do not pop.
            if elements_remaining >= k_elements_needed
                stack.pop
            else
                break
            end
        end

        stack << nums[i]
        i += 1
    end
    
    stack[0..k-1]
end
```