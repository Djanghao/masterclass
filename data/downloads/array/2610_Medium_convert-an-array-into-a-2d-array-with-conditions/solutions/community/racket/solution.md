# Racket/Scheme HashTable

**Author:** lolywk
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/3990002/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/3990002/)

---

**Time** :: O(n)

```
(define/contract (find-matrix nums)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
  (define ht 
    (let gen-hashtable ([ht (make-hash)]
                        [nums nums])
      (cond
        [(empty? nums) ht]
        [else
          (hash-set! ht (first nums) (+ (hash-ref ht (first nums) 0) 1))
          (gen-hashtable ht (rest nums))])))

  (let gen-matrix ([ht ht])
    (cond
      [(hash-empty? ht) '()]
      [else
        (cons (hash-map ht (lambda (k v)
                 (hash-set! ht k (- v 1))
                 (when (<= (- v 1) 0)
                       (hash-remove! ht k))
                 k))
               (gen-matrix ht))])))
```