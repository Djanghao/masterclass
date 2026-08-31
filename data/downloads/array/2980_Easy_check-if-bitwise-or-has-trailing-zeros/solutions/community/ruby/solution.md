# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5295547/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5295547/)

---


# Code
```
# @param {Integer[]} nums
# @return {Boolean}
def has_trailing_zeros(nums)
    i = 0
    while i < nums.size
        j = i + 1
        while j < nums.size
            if (nums[i] | nums[j]).to_s(2)[-1] == "0"
                return true
            end
            j += 1
        end
        i += 1
    end
    
    false
end
```