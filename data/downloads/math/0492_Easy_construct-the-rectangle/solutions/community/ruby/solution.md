# Simple but slow iterative

**Author:** 490R1x9LSo
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/5870582/](https://leetcode.com/problems/construct-the-rectangle/solutions/5870582/)

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
# @param {Integer} area
# @return {Integer[]}
def construct_rectangle(area)
  limit = Math.sqrt(area).to_i
  puts limit
  candidates = []
  limit.downto(2) do |i|
    puts i
    if area % i == 0
      return [area / i, i]
    end
  end
  return [area, 1]
end
```