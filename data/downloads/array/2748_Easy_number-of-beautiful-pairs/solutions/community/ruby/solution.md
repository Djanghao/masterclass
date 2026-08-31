# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/4748415/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/4748415/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def count_beautiful_pairs(nums)
    i = 0
    ans = 0
    while i < nums.size
        j = i + 1 
        num1_dig = nums[i].to_s[0].to_i
        while j < nums.size
            if num1_dig.gcd(nums[j].to_s[-1].to_i) == 1

                ans += 1
            end
            j += 1
        end
        i += 1
    end
    ans
end
```