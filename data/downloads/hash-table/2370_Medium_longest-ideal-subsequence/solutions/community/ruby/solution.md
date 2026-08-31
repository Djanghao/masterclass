# Ruby solution beats 100% both run time and memory.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/5072990/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/5072990/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @param {Integer} k
# @return {Integer}
def longest_ideal_string(s, k)
    # Allocate space for an ASCII table up to 'z' (index = 122)
    # It allows us not to omit subtraction and 
    # checks for negative indices in ranges [i-k, i+k]
    ascii = Array.new(123, 0)
    s.each_char do |ch|
        i = ch.ord
        start_index = [0, i - k].max  # Ensure start index is not negative
        end_index = [122, i + k].min  # Ensure end index does not exceed array bounds
        ascii[i] = (start_index..end_index).map { |j| ascii[j] }.max + 1
    end
    # max for the whole list works a little bit faster than for [97:]
    ascii.max
end
```