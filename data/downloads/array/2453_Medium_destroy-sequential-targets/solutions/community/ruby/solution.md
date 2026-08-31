# Ruby solution using Modulo

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/destroy-sequential-targets/solutions/4121490/](https://leetcode.com/problems/destroy-sequential-targets/solutions/4121490/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) -> O(nlogn) because sorting

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {Integer[]} nums
# @param {Integer} space
# @return {Integer}
def destroy_targets(nums, space)
    hash = Hash.new(0)
    nums.each do |i|
        hash[(i % space)] += 1
    end

    max_value = hash.values.max

    nums.sort.each do |i|
        if hash[(i % space)] == max_value
            return i
        end
    end
end
```