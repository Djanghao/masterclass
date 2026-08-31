# Easy Ruby Solution with reversing

**Author:** abir162
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/4280495/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/4280495/)

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
# @param {Integer} num
# @return {Boolean}
def sum_of_number_and_reverse(num)
  (0..num).to_a.each do |value|
    return true if value + value.to_s.reverse.to_i == num
  end
  false
end
```