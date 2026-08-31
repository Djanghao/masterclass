# Ruby solution leverage built in .sort!() method

**Author:** 2018hsridhar
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5878700/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5878700/)

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
```ruby []
# @param {Integer[]} nums
# @return {Integer[]}
'''
'''
def get_sneaky_numbers(nums)
    nums.sort!()
    n = nums.size
    repeats = [-1,-1]
    repeatPtr = 0
    (0...n-1).each do |ptr|
        curVal = nums[ptr]
        nextVal = nums[ptr+1]
        if(curVal == nextVal && repeatPtr < 2)
            repeats[repeatPtr] = curVal
            repeatPtr += 1
        end
    end
    return repeats
end
```