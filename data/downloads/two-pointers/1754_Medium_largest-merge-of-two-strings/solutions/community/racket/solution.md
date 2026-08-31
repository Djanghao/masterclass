# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/5113174/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/5113174/)

---

# Code
```racket
(define/contract (largest-merge word1 word2)
  (-> string? string? string?)
  (list->string (let recur ([w1 (string->list word1)][w2 (string->list word2)])
  (cond
  [(empty? w1) w2]
  [(empty? w2) w1]
  [(or (char<? (first w1) (first w2)) (string<? (list->string w1) (list->string w2)))
   (cons (first w2) (recur w1 (rest w2)))]
  [else (cons (first w1) (recur (rest w1) w2))]))))
```