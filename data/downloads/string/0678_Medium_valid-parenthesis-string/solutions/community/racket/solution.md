# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/4989792/](https://leetcode.com/problems/valid-parenthesis-string/solutions/4989792/)

---

# Code
```
(define/contract (recur lst leftMin leftMax)
    (-> (listof char?) exact-integer? exact-integer? boolean?)
    (cond 
        [(negative? leftMax) #f]
        [(empty? lst) (zero? leftMin)]
        [else 
            (let ([c (first lst)][r (rest lst)])
                (match c
                    [#\\( (recur r (add1 leftMin) (add1 leftMax))]
                    [#\\) (recur r (max (sub1 leftMin) 0) (sub1 leftMax))]
                    [#\\* (recur r (max (sub1 leftMin) 0) (add1 leftMax))]))]))

(define/contract (check-valid-string s)
  (-> string? boolean?)
    (recur (string->list s) 0 0))
```