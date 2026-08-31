# Set

**Author:** Chris1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/4337106/](https://leetcode.com/problems/number-of-distinct-averages/solutions/4337106/)

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
# @return {Integer}
def distinct_averages(nums)
    nums.sort!
    set = Set.new
    while nums.size > 0
        set << (nums.shift.to_f + nums.pop)/2
    end

    set.size
end
```