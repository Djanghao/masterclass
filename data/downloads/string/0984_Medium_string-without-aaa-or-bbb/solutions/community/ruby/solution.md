# the fastest if solution

**Author:** n0damny
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/5327744/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/5327744/)

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
# @param {Integer} a
# @param {Integer} b
# @return {String}
def str_without3a3b(a, b)
  str, prev = '', ''
  while a > 0 && b > 0
    if a > b && a > 1
      if prev == 'a'
        str += 'baa'
        prev = 'a'
      else
        str += 'aab'
        prev = 'b'
      end
      a -= 1
    elsif b > a && b > 1
      if prev == 'b'
        str += 'abb'
        prev = 'b'
      else
        str += 'bba'
        prev = 'a'
      end
      b -= 1
    else
      str += prev == 'a' ? 'ba' : 'ab'
    end
    a -= 1
    b -= 1
  end
  str += prev == 'b' ? 'a' * a + 'b' * b : 'b' * b + 'a' * a
end
```