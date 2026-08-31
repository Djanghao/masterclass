# Racket (0ms?) single run, no splitting

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-sentence/solutions/5999029/](https://leetcode.com/problems/circular-sentence/solutions/5999029/)

---

# Code
```racket []
(define (is-circular-sentence s)
  (and
   (char=? (string-ref s 0) (string-ref s (sub1 (string-length s))))
   (for/and ([i (string-length s)])
     (or (not (char=? #\\Space (string-ref s i)))
         (char=? (string-ref s (sub1 i))
                 (string-ref s (add1 i)))))))
```