# Basic  problem

**Author:** irjyJIqhCm
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/5452671/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/5452671/)

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
# @param {String} s1
# @param {String} s2
# @return {Boolean}
def check_strings(s1, s2)
  hash_even = Hash.new(0)
  hash_odd = Hash.new(0)
  s1.chars.each_with_index do |value, index|
    if index % 2 == 0
      hash_even[value] += 1
    else
      hash_odd[value] += 1
    end
  end
  s2.chars.each_with_index do |value, index|
    if index % 2 == 0
      hash_even[value] -= 1
    else
      hash_odd[value] -= 1
    end
  end
  hash_even.each do |key, value|
    if value != 0
      return false
    end
  end
  hash_odd.each do |key, value|
    if value != 0
      return false
    end
  end
  true

end
```