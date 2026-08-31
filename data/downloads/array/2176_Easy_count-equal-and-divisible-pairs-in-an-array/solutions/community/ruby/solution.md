# O(n) O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/4335607/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/4335607/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def count_pairs(nums, k)

    count = 0
    i = 0
    while i < nums.size
        
        j = i + 1
        while j < nums.size  
            if (nums[i] == nums[j]) and ((i * j) % k == 0)
                count += 1
            end
            j+= 1
        end

        i+= 1
    end

    count
end
```