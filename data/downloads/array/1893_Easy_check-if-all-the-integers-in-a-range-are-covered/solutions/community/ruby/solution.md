# Ruby solution

**Author:** Volodymyr_Ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/6112533/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/6112533/)

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
# @param {Integer[][]} ranges
# @param {Integer} left
# @param {Integer} right
# @return {Boolean}
def is_covered(ranges, left, right)
  arr = []

  (left..right).each do |i|
    ranges.each do |range|
      arr << i if (range[0]..range[1]).include?(i)
    end
  end

  arr.uniq == (left..right).to_a
end
```