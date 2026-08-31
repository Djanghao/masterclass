# Racket Solution with Hashtables and Continutations

**Author:** rymaju
**Votes:** 10
**Link:** [https://leetcode.com/problems/two-sum/solutions/1066141/](https://leetcode.com/problems/two-sum/solutions/1066141/)

---

```scheme
(define/contract (two-sum nums target)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
    (define s (make-hash))
    
    (let/cc cc
        (for ([n nums]
              [i (range (length nums))])
            (let ([diff (- target n)])
                (if (hash-has-key? s diff)
                    (cc `(,i ,(hash-ref s diff)))
                    (hash-set! s n i))
            )
        )
        (error "No solution found.")
    )
  )