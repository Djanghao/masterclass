# racket (~1000ms) O(n) prefix xor

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5983388/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5983388/)

---

# Intuition
Use xor to zero out pairs of vowels.

# Code
```racket []
(define (find-the-longest-substring s)
  (let* ([pre-or (let loop ([i 0] [cur 0])
                   (if (= i (string-length s))
                       '()
                       (begin
                         (when (set-member? (set #\\a #\\e #\\i #\\o #\\u)
                                            (string-ref s i))
                           (set! cur (bitwise-xor cur (char->integer
                                                       (string-ref s i)))))
                         (cons cur (loop (add1 i) cur)))))]
         [last-oc (for/hash ([n pre-or] [i (in-naturals)])
                    (values n i))])
    (let ([best 0] [prev 0])
      (for ([n pre-or] [i (in-naturals)])
        (set! best (max best (add1 (- (hash-ref last-oc prev -inf.0) i))))
        (set! prev n))
      (exact-truncate best))))
```