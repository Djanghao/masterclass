# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/4982384/](https://leetcode.com/problems/bulls-and-cows/solutions/4982384/)

---

# Code
```
(define/contract (digit->int digit) 
    (-> char? exact-integer?)
    (- (char->integer digit) (char->integer #\\0))
)

(define/contract (get-hint secret guess)
  (-> string? string? string?)
  (let ([v (make-vector 10 0)]) 
  (let-values ([(bull filtered-lst)
    (for/fold 
        ([bull 0]
        [filtered-lst null])
        ([p (map cons (string->list secret) (string->list guess))])
        (if (char=? (car p) (cdr p)) 
            (values (add1 bull) filtered-lst)
            (begin 
                (vector-set! v (digit->int (car p)) (add1 (vector-ref v (digit->int (car p)))))
                (values bull (cons (cdr p) filtered-lst)))))])

    (let ([cow 
        (for/sum ([i filtered-lst])    
            (if (positive? (vector-ref v (digit->int i))) 
            (begin 
                (vector-set! v (digit->int i) (sub1 (vector-ref v (digit->int i)))) 
            1) 0))])
    (string-append (number->string bull) "A" (number->string cow) "B")))))
```