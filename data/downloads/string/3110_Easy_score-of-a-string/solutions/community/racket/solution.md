# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/score-of-a-string/solutions/5239641/](https://leetcode.com/problems/score-of-a-string/solutions/5239641/)

---

# Code
```racket
(define/contract (score-of-string s)
  (-> string? exact-integer?)
  (let ([lst (string->list s)])
    (let recur ([c (first lst)][lst (rest lst)])
        (if (empty? lst) 0 
            (+ (abs (- (char->integer c) (char->integer (first lst)))) 
                (recur (first lst) (rest lst)))))))
```