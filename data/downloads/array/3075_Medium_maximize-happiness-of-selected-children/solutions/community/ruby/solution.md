# Ruby solution.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5137401/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5137401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} happiness
# @param {Integer} k
# @return {Integer}
def maximum_happiness_sum(happiness, k)
    n = happiness.length
    happiness.sort!
    count = 0
    answer = 0
    (n - 1).downto(0) do |i|
        if k > 0
            answer += [0, happiness[i] - count].max
            count += 1
            k -= 1
        end
    end
    return answer
end
```