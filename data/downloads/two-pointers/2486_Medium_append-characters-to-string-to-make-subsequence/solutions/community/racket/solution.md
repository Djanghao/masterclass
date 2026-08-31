# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249669/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249669/)

---

# Code
```racket
(define/contract (append-characters s t)
  (-> string? string? exact-integer?)
    (let recur ([lst-s (string->list s)] [lst-t (string->list t)])
    (cond
        [(or (empty? lst-s) (empty? lst-t)) (length lst-t)]
        [(char=? (first lst-s) (first lst-t)) (recur (rest lst-s) (rest lst-t))]
        [else (recur (rest lst-s) lst-t)])))
```