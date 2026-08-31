# sliding window ruby, easy to read

**Author:** gen1321
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4270073/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4270073/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {String} s
# @return {Integer}
def count_homogenous(s)
  return 1 if s.length == 1

  left, right = [0,1]
  largest_homogens_string = [1]
  current_string = s[left]
  while right < s.length
    if s[left] == s[right]
      current_string << s[right]
      largest_homogens_string  << current_string.size
      right += 1
    else
      current_string = s[right]
      largest_homogens_string  << current_string.size
      left = right
      right += 1
    end
  end
  mod = 10**9 + 7

  largest_homogens_string.inject(&:+) % mod
end
```