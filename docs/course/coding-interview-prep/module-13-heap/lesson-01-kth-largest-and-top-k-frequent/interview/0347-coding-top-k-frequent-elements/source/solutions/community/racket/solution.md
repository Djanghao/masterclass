# racket hash table counter

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/4593175/](https://leetcode.com/problems/top-k-frequent-elements/solutions/4593175/)

---

# Code

```scheme
(define (hash-table-counter ls)
  (let ([counts (make-hash)])
    (for-each (\u03BB (v) (hash-update! counts v add1 0)) ls)
    counts))

(define (top-k-frequent nums k)
  (let ([counter (hash-table-counter nums)])
    (map car (take (sort (hash->list counter) #:key cdr >) k))))
```