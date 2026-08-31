# Ruby simple solution one line of code

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/5164495/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/5164495/)

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
# @param {String[]} words
# @return {Integer}
def max_product(words)
  words.map { |w| [w.size, w.chars.to_set] }.combination(2).inject(0){ |r, ((l, s), (m, t))| s.intersect?(t) ? r : [r, l * m].max }
end
```