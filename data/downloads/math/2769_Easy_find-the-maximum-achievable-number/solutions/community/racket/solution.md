# The only solution in Racket || Beats 100%

**Author:** 8braincells
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4871532/](https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4871532/)

---

Now the 'Racket' tag has 1 next to it
# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
(define/contract (the-maximum-achievable-x num t)
  (-> exact-integer? exact-integer? exact-integer?)
  (+ num (+ t t))
  )
```