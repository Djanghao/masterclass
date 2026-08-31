# Simple Racket solution with explanation

**Author:** toddmcintire
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/3372777/](https://leetcode.com/problems/convert-the-temperature/solutions/3372777/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can easily solve this problem simply by returning a list containing the two math equations.
# Approach
<!-- Describe your approach to solving the problem. -->
The question wants us to return two seprate math equations, the first we can simply get by adding the input variable to 273.15, the second we only need to add the result of the variable times 1.80 to 32.00. Once the two results are computed they are surrounded in a list and returned.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
(define/contract (convert-temperature celsius)
  (-> flonum? (listof flonum?))
  (list (+ celsius 273.15) (+ (* celsius 1.80) 32.00))
  )
```