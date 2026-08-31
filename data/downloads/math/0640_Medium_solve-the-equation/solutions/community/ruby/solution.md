# Ruby short clear solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/5916804/](https://leetcode.com/problems/solve-the-equation/solutions/5916804/)

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
# @param {String} equation
# @return {String}
def solve_equation(equation)
  left, right = equation.split(?=).tap { _1.map!{|x| x.scan(/-?\\d*x|-?\\d+/) } }
  sum = -> s, x = false, sn = 1 { s.sum { |e| e =~ /x$/ ? ( x ? sn * (e == ?x ? 1 : e == '-x' ? -1 : e.sub(?x, '').to_i) : 0 ) : (x and 0 or sn * e.to_i) } }
  l = sum[left, true, 1] + sum[right, true, -1]
  return "x=#{(sum[left, false, -1] + sum[right, false, 1]) / l}" if l != 0
  sum[left, false, -1] + sum[right, false, 1] == 0 ? 'Infinite solutions' : 'No solution'
end
```