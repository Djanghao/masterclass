# Using case dispatch

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/3109380/](https://leetcode.com/problems/design-parking-system/solutions/3109380/)

---

# Intuition
Changed values `big`, `medium` and `small` then checked if negative.

# Approach
Used `case` and `if ... then ... else` constructs

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
(define parking-system%
  (class object%
    (super-new)

    ; big : exact-integer?

    ; medium : exact-integer?

    ; small : exact-integer?
    (init-field
      big
      medium
      small)
    
    ; add-car : exact-integer? -> boolean?
    (define/public (add-car car-type)
       (case car-type
         [(1) (set! big (sub1 big)) (if (positive? (add1 big)) true false)]
         [(2) (set! medium (sub1 medium)) (if (positive? (add1 medium)) true false)]
         [(3)  (set! small (sub1 small)) (if (positive? (add1 small)) true false)]
         [else false])
       )
  ))

;; Your parking-system% object will be instantiated and called as such:
;; (define obj (new parking-system% [big big] [medium medium] [small small]))
;; (define param_1 (send obj add-car car-type))
```