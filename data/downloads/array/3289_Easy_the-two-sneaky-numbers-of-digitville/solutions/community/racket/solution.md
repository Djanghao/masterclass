# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5990110/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5990110/)

---

```racket []
(define/contract (get-sneaky-numbers nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  (car (foldl
        (lambda (num acc)
          (let ((result (car acc))
                (seen (cdr acc)))
            (if (member num seen) ; if seen previously ...
                (cons (cons num result) seen) ; add to result
                (cons result (cons num seen))))) ; otherwise, add to seen
        '(() . ()) ; (result . seen)
        nums)))
```