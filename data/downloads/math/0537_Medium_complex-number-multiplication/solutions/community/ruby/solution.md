# Ruby simple 3-lines solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/5807730/](https://leetcode.com/problems/complex-number-multiplication/solutions/5807730/)

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
# @param {String} num1
# @param {String} num2
# @return {String}
def complex_number_multiply(num1, num2)
  n1 = num1.scan(/^(.*)\\+(.*)i/)[0].map(&:to_i)
  n2 = num2.scan(/^(.*)\\+(.*)i/)[0].map(&:to_i)
  "#{(n1[0] * n2[0] - n1[1] * n2[1])}+#{(n1[0] * n2[1] + n2[0] * n1[1])}i"    
end
```