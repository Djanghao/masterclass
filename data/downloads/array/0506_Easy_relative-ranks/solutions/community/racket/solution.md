# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5127736/](https://leetcode.com/problems/relative-ranks/solutions/5127736/)

---

```
(define/contract (find-relative-ranks scores)
  (-> (listof exact-integer?) (listof string?))
  (let ((enumerated-scores (enumerate-reverse (sort scores >))))
    (map
     (lambda (score)
       (let* ((pair (assoc score enumerated-scores))
              (rank (+ 1 (cdr pair))))
         (cond ((= 1 rank) "Gold Medal")
               ((= 2 rank) "Silver Medal")
               ((= 3 rank) "Bronze Medal")
               (else (number->string rank)))))
     scores)))

(define (enumerate-reverse lst . params)
  (let ((index (if (not (null? params)) (car params) 0)))
    (cond ((null? lst) '())
          (else (cons (cons (car lst)
                            index)
                      (enumerate-reverse (cdr lst) (+ 1 index)))))))
```