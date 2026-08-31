# racket with hash counter and for/sum comprehension

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-elements/solutions/4540659/](https://leetcode.com/problems/counting-elements/solutions/4540659/)

---

# Code

```scheme
(define (hash-table-counter ls)
  (let ([counts (make-hash)])
    (for-each (lambda (v) (hash-update! counts v add1 0)) ls)
    counts))

(define (count-elements arr)
  (let ([hsh (hash-table-counter arr)])
    (for/sum ([ele (remove-duplicates arr)]
              #:do [(define prev-val-count (hash-ref hsh (sub1 ele) #f))]
              #:when prev-val-count)
      prev-val-count)))

```