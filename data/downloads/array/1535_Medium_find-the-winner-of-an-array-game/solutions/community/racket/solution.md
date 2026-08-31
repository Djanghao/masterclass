# Racket solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4254234/](https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4254234/)

---

# Code
```
(define/contract (get-winner arr k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  
  (define count 0)
  (define max-num (car arr)) ; Initialize maxNum with the first element of the list

  (define (update-max-num-and-count elem)
    (if (> elem max-num)
        (begin
          (set! max-num elem)
          (set! count 1))
        (set! count (+ count 1))))

  (define (find-winner lst)
    (cond
      [(null? lst) max-num]
      [(= count k) max-num]
      [else
       (update-max-num-and-count (car lst))
       (find-winner (cdr lst))]))

  (find-winner (cdr arr)) ; Start from the second element in the list
)

```