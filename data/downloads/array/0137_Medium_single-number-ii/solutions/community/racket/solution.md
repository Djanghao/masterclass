# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/4727621/](https://leetcode.com/problems/single-number-ii/solutions/4727621/)

---

# Code
```racket
(define/contract (single-number nums)
  (-> (listof exact-integer?) exact-integer?)
    (car (foldl (lambda (i pair) 
        (let* ([once (car pair)]
              [twice (cdr pair)]
              [once-new (bitwise-and (bitwise-xor i once) (bitwise-not twice))])
                (cons once-new
                      (bitwise-and (bitwise-xor i twice) (bitwise-not once-new))))) 
        (cons 0 0) nums)))
```