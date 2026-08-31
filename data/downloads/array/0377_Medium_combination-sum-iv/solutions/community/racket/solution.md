# Racket DP Solution

**Author:** imakira
**Votes:** 0
**Link:** [https://leetcode.com/problems/combination-sum-iv/solutions/4020694/](https://leetcode.com/problems/combination-sum-iv/solutions/4020694/)

---



# Code
```
(define (memo procedure #:hash [hash-gen make-hash] #:key [extract-key identity])
  (let ((cache (hash-gen)))
    (lambda args
      (if (hash-has-key? cache (extract-key args))
          (hash-ref cache (extract-key args))
          (let ((result (apply procedure args)))
            (hash-set! cache (extract-key args) result)
            result)))))

(define/contract (combination-sum4 nums target)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  (let ((nums (sort nums <)))
    (define comb
      (memo #:hash make-hasheq
            #:key car
            (lambda (target)
              (if (= target 0)
                  1
                  (for/sum ((n nums)
                            #:break (> n target))
                    (comb (- target n)))))))
    (comb target)))

```