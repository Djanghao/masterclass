# Take care, typo in generated framework code in Racket

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/3088003/](https://leetcode.com/problems/subrectangle-queries/solutions/3088003/)

---

# Intuition
Followed the framework.

# Approach
There were a typo in the framework provided by LeetCode `get-value` should be changed `getValue` and `update-subrectangle` to `updateSubrectangle`. Without it the substitution run-time error occurs.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
(define subrectangle-queries%
  (class object%
    (super-new)

    ; rectangle : (listof (listof exact-integer?))
    (init-field
      rectangle)
    
    ; update-subrectangle : exact-integer? exact-integer? exact-integer? exact-integer? exact-integer? -> void?
    (define/public (updateSubrectangle row1 col1 row2 col2 newValue)
        (define (change-rect l row1 col1 row2 col2 new-value)
         (for/list ([row l] [i (length l)])
             (for/list ([e row] [j (length row)])
                 (if (and (and (>= row2 i) (>= col2 j)) (and (<= row1 i) (<= col1 j) ) )
                     new-value
                     e))))
        (define rect (change-rect rectangle row1 col1 row2 col2 newValue))
        
        (set! rectangle rect)
      )
    ; get-value : exact-integer? exact-integer? -> exact-integer?
    (define/public (getValue row col)
        (list-ref (list-ref rectangle row) col)
      )))

;; Your subrectangle-queries% object will be instantiated and called as such:
;; (define obj (new subrectangle-queries% [rectangle rectangle]))
;; (send obj update-subrectangle row1 col1 row2 col2 new-value)
;; (define param_2 (send obj get-value row col))
```