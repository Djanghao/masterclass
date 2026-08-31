# 100% simple and concise Racket solution

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/4391785/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/4391785/)

---

The comments prove that the code is correct.

The code and comments can be a little dense, so feel free to ask comments if anything is unclear. 

# Code
```
; (suffix-max '(n1 n2 ... nN)) = '((max n1 n2 ... nN) (max n1 n2 ... nN-1) ... (max n1))
(define (suffix-max lst)
  (foldl
    (lambda (x acc)
      (cons (max x (car acc)) acc))
    (list (car lst))
    (cdr lst)))

; (define prices '(p1 p2 ... pN))
; (profit pi) = (max 0 (- (max pi+1 pi+2 ... pN) pi))
; (max-profit '(p1 p2 ... pN)) = (max (profit p1) (profit p2) ... (profit pN))
;                              = (max 0 (- (max p2 p3 ... pN) p1) (- (max p3 p4 ... pN) p2) ... (- (max pN) pN-1))
;                              = (max 0 (argmax identity (map - (suffix-max (reverse (cdr prices))) (drop-right prices 1)))))
(define (max-profit prices)
  (if (= (length prices) 1) 0
  (max 0 (argmax identity (map - (suffix-max (reverse (cdr prices))) (drop-right prices 1))))))

```