# O(n) without mutation

**Author:** tifv
**Votes:** 0
**Link:** [https://leetcode.com/problems/daily-temperatures/solutions/5628874/](https://leetcode.com/problems/daily-temperatures/solutions/5628874/)

---

Reverse the list of temperatures and walk it back while maintaining the stack of \u201Cprevious\u201D higher temperatures with corresponding indices.

```
(define/contract (daily-temperatures temp)
    (-> (listof exact-integer?) (listof exact-integer?))
    (let make-answer
        ([i 0] [temp-rev (reverse temp)] [higher null] [answer null])
        (match temp-rev
            [(cons t temp-rev) (let* (
                [higher
                    (let eliminate<=t ([higher higher]) (match higher
                        [(cons (cons t1 _) higher) #:when (>= t t1) (eliminate<=t higher)]
                        [_ higher]))]
                [a (if (null? higher) 0 (- i (cdar higher)))] )
                (make-answer (add1 i) temp-rev (cons (cons t i) higher) (cons a answer)))]
            [(list) answer])))
```