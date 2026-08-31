# Easy 100%/100% Solution | Recursive |Concise | 8 Lines

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/4876530/](https://leetcode.com/problems/longest-nice-substring/solutions/4876530/)

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
# @param {String} s
# @return {String}
def longest_nice_substring(s)
    chars = s.chars.to_set
    s.each_char.with_index do |c, i|
        if !chars.include?(c.swapcase)
            return [longest_nice_substring(s[0...i]), longest_nice_substring(s[i+1..-1])].max_by(&:length)
        end
    end
    s
end
```