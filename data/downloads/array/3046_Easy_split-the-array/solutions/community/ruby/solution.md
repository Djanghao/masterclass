# Easy to understand || 100% Faster ||  Ruby

**Author:** yashwardhan24_sharma
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-the-array/solutions/4896361/](https://leetcode.com/problems/split-the-array/solutions/4896361/)

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
# @return {Boolean}
def is_possible_to_split(nums)
    hash = {}
    nums.each do |i|
        if(hash[i])
            hash[i]+=1
        else
            hash[i]=1
        end
    end
    
    hash.each do |key,val|
        if(val>2)
            return false
        end
    end

    return true
end
```