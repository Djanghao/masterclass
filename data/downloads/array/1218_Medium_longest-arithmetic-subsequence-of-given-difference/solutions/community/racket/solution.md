# Racket using hash table

**Author:** nverno
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761530/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761530/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
(define/contract (longest-subsequence arr difference)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  (let ([cnt (make-hash)])
    (for/fold ([res 0])
              ([x arr])
      (let ([v (add1 (hash-ref cnt (- x difference) 0))])
        (hash-set! cnt x v)
        (max res v)))))

```