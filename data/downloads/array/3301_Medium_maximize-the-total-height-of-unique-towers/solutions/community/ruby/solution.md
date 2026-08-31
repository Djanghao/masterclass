# beats 100% easy euby solution

**Author:** rimshach2
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5845631/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5845631/)

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
```ruby []
# @param {Integer[]} maximum_height
# @return {Integer}
def maximum_total_sum(maximum_height)

  sorted_heights = maximum_height.sort.reverse

  current_maximum_height = sorted_heights[0];
  sum = 0
  sorted_heights.each do |max_height|
    
    current_maximum_height = [current_maximum_height, max_height].min
    sum= sum + current_maximum_height

    return -1 if current_maximum_height <= 0
    current_maximum_height = current_maximum_height - 1
    
  end
  return sum
end

```