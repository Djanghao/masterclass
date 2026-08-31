# Ruby Easy Solution 100%

**Author:** shivam_mahaajan03
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/4529014/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/4529014/)

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
# @return {Integer}
def unequal_triplets(nums)
    len = nums.length - 1
    count = 0
    (0..len).each do |i|
        (i+1..len).each do |j|
            (j+1..len).each do |k|
                count += 1 if(nums[i] != nums[j] && nums[i] != nums[k] && nums[j] != nums[k])
            end
        end
    end
    count
end
```