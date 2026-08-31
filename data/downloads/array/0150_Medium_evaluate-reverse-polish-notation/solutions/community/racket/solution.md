# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/4646530/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/4646530/)

---

# Code
```racket
(define/contract (eval-rpn-acc tokens acc)
  (-> (listof string?) (listof exact-integer?)  exact-integer?)
  (cond [(empty? tokens) (first acc)]
        [else (let* ([f (first tokens)]
                    [new-acc (cond [(string=? f "+") (cons (+ (second acc) (first acc)) (cddr acc))]
                      [(string=? f "-") (cons (- (second acc) (first acc)) (cddr acc))]
                      [(string=? f "*") (cons (* (second acc) (first acc)) (cddr acc))]
                      [(string=? f "/") (cons (quotient (second acc) (first acc)) (cddr acc))]
                      [else (cons (string->number f) acc)])])
                (eval-rpn-acc (rest tokens) new-acc))]))

(define/contract (eval-rpn tokens)
  (-> (listof string?) exact-integer?)
  (eval-rpn-acc tokens empty)
  )
```