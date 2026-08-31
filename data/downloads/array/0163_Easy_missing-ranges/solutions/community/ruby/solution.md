# Ruby simple solution for trash question tag

**Author:** Benggi
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/4380096/](https://leetcode.com/problems/missing-ranges/solutions/4380096/)

---

# Intuition
what is wrong with this "EASY" tag question 

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
# @param {Integer} lower
# @param {Integer} upper
# @return {Integer[][]}
def find_missing_ranges(nums, lower, upper)
    return [[lower, upper]] if nums.empty?
    res = []

    res << [lower, nums.first-1] if nums.first && lower < nums.first
    nums.each_with_index do |num, idx|
        break if idx == nums.size-1
        if num +1 != nums[idx+1]
            res << [num+1, nums[idx+1]-1]
        end
    end
    res << [nums.last+1, upper] if nums.last && upper > nums.last

    res

end
```