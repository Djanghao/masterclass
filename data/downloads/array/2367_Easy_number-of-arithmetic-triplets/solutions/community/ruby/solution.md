# Super Simple Hash Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/4754041/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/4754041/)

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
# @param {Integer} diff
# @return {Integer}
def arithmetic_triplets(nums, diff)
    hash = {}
    nums.each do |n|
        hash[n] = true
    end

    ans = 0
    i = 0
    while i < nums.size
        j_val = (nums[i] + diff)
        if hash[j_val] and hash[j_val + diff]
            ans += 1
        end
        i += 1
    end
    
    ans
end
```