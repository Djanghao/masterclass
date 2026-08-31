# 👍 in Racket

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5590743/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5590743/)

---

Have a good day

# Code
``` racket
(define (kth-distinct arr k)
    (let* ([h (make-immutable-hash)]
           [counted (foldl (lambda (x acc) (hash-set acc x (add1 (hash-ref acc x 0)))) h arr)]
           [uniq (filter (lambda (x) (= (hash-ref counted x) 1)) arr)]
           [len (length uniq)])
        (if (> k len) "" (list-ref uniq (sub1 k)))))
```