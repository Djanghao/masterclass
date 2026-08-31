# Easy to understand || 100% faster

**Author:** yashwardhan24_sharma
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/4892886/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/4892886/)

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
```
# @param {Integer[]} nums
# @param {Integer} m
# @return {Boolean}
def can_split_array(nums, m)
        if(nums.size<=2)
         return true
          end
        i=1
        while(i<nums.size)
            if(nums[i]+nums[i-1]>=m)
                return true
            end
            i+=1
        end
        return false


end
```