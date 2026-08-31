# Basic Queue

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4905804/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4905804/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

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
# @return {Integer[]}
def result_array(nums)
    result = []
    arr2 = []
    result << nums.shift
    arr2 << nums.shift
    
    while nums.size > 0
        if result[-1] > arr2[-1]
            result << nums.shift
        else
            arr2 << nums.shift
        end
    end

    result.concat arr2
end
```