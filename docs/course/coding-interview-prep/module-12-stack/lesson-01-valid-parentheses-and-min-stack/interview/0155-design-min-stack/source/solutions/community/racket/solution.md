# O(1) for each operation

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-stack/solutions/4494835/](https://leetcode.com/problems/min-stack/solutions/4494835/)

---

# Intuition
Store a list of pairs `(value . min-when-value-was-added)`.

# Code
```
(define min-stack%
  (class object%
    (super-new)
    
    (define vals '())
    
    ; push : exact-integer? -> void?
    (define/public (push val)
        (let* ([cur-min (if (empty? vals) val (get-min))]
               [new-top (cons val (min cur-min val))])
            (set! vals (cons new-top vals))))

    ; pop : -> void?
    (define/public (pop)
      (define res (top))
      (set! vals (cdr vals))
      res)

    ; top : -> exact-integer?
    (define/public (top)
      (car (first vals)))

    ; get-min : -> exact-integer?
    (define/public (get-min)
      (cdr (first vals)))))

;; Your min-stack% object will be instantiated and called as such:
;; (define obj (new min-stack%))
;; (send obj push val)
;; (send obj pop)
;; (define param_3 (send obj top))
;; (define param_4 (send obj get-min))
```