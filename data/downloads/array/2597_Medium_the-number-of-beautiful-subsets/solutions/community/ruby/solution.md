# Ruby solution beats 100% both run time and memory.

**Author:** neelarunabh
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5199255/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5199255/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(2 ^ n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def helper(nums, i, n, disabled, graph, selected)
    if i == n
        # base case
        return selected > 0 ? 1 : 0
    end

    case1 = helper(nums, i+1, n, disabled, graph, selected)
    if disabled & (1 << i) != 0
        return case1  # can't select this
    end

    disabled |= graph[i]
    case2 = helper(nums, i+1, n, disabled, graph, selected | (1 << i))

    return case1 + case2
end

def beautiful_subsets(nums, k)
    n = nums.length
    graph = [0] * n

    (0...n).each do |i|
        curr = nums[i]
        (0...n).each do |j|
            if nums[j] == curr + k || nums[j] == curr - k
                graph[i] |= 1 << j
            end
        end
    end

    disabled = 0
    return helper(nums, 0, n, disabled, graph, 0)
end
```