# Racket 100/100 (by default, too few submissions)

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3266276/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3266276/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I used if statements.
# Approach
<!-- Describe your approach to solving the problem. -->
You can do this with nested if statements, but 'cond' looks cleaner to me. To keep from recalculating, I used 'let'.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
(define/contract (categorize-box length width height mass)
  (-> exact-integer? exact-integer? exact-integer? exact-integer? string?)
    (let ((heavy (>= mass 100))
          (bulky (or (>= length 10000) (>= width 10000) (>= height 10000) (>= (* length width height) 1000000000))))
          (cond ((and heavy bulky) "Both")
                (heavy "Heavy")
                (bulky "Bulky")
                (else "Neither")))
  )
```