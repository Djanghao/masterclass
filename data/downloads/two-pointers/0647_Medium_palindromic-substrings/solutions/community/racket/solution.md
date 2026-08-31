# the first Racket solution without explanation

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindromic-substrings/solutions/4707714/](https://leetcode.com/problems/palindromic-substrings/solutions/4707714/)

---


# Code
```
(define (check-polin vec left right)
  (cond [(< left 0) 0]
        [(>= right (vector-length vec)) 0]
        [(not (eq? (vector-ref vec left) (vector-ref vec right))) 0]
        [else (add1 (check-polin vec (sub1 left) (add1 right)))]))

(define (count-substrings s)
  (let ([vec (list->vector (string->list s))]
        [len (string-length s)])
    (apply + (for/list ([i (range len)])
           (+ 1
                (check-polin vec (sub1 i) (add1 i))
                (check-polin vec (sub1 i) i))))))
```