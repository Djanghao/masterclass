# add digits alt solution in scheme

**Author:** buseokcu
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-digits/solutions/5072180/](https://leetcode.com/problems/add-digits/solutions/5072180/)

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
(define/contract (add-digits num)
  (-> exact-integer? exact-integer?)
  (define (sum n)
  (if (<= n 9) n
      (+ (remainder n 10) (sum (quotient n 10)))))

(define (digit n)
  (if (< n 10)
      (sum n)
      (digit (sum n))))

      (digit num)
  )
```