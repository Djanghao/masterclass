# Ruby solution

**Author:** irjyJIqhCm
**Votes:** 0
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5521568/](https://leetcode.com/problems/clear-digits/solutions/5521568/)

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
def clear_digits(s)
  digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  s = s.chars
  digits.each do |char|
    while s.include?(char)
      index = s.index(char)
      while s[index -1].match?(/\\d/) && index - 1 >= 0
        index -= 1
      end
      if index >= 0 && s[index - 1].match?(/\\d/) == false
        s.delete_at(index)
        s.delete_at(index - 1)
      end
    end
  end
  s.join
end
```