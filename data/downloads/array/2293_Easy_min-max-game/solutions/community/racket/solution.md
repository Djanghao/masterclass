# Racket brute-force

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-max-game/solutions/2112466/](https://leetcode.com/problems/min-max-game/solutions/2112466/)

---

```scheme
(define/contract (min-max-game nums)
  (-> (listof exact-integer?) exact-integer?)

  (let divide-conquer ([lst nums]
                       [op min])
    (let ([len (length lst)])
      (if (= 1 len) (car lst)
          (op
           (divide-conquer (take lst (/ len 2)) min)
           (divide-conquer (drop lst (/ len 2)) max))))))
```