# Simple fastest one liner ruby solution

**Author:** rajkamallashkari
**Votes:** 0
**Link:** [https://leetcode.com/problems/gray-code/solutions/2722386/](https://leetcode.com/problems/gray-code/solutions/2722386/)

---

# Complexity
- Time complexity: O(2^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(2^n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @return {Integer[]}
def gray_code(n)
    (0 ... 2 ** n).map { |i| i ^ (i >> 1) }
end
```