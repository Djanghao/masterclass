# Racket solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4241259/](https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4241259/)

---

# Code
```
(define/contract (build-array target n)
  (-> (listof exact-integer?) exact-integer? (listof string?))
  (define s1 "Push")
  (define s2 "Pop")
  (define last 1)
  (define ans '())
  (for ([i (in-range (length target))])
    (define diff (- (list-ref target i) last))
    (for ([_ (in-range diff)])
      (set! ans (append ans (list s1 s2)))
      )
    (set! ans (append ans (list s1)))
    (set! last (+ (list-ref target i) 1))
    )
  ans)

```