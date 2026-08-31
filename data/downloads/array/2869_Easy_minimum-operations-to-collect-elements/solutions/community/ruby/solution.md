# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/5301947/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/5301947/)

---


# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def min_operations(nums, k)
    hash = {}
    needed_val = 1
    answer = 0
    while hash.size < k
        val = nums.pop
        if val <= k
            hash[val] = true
        end
        answer += 1
    end
    
    answer
end
```