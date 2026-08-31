# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/5112168/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/5112168/)

---

# Code
```racket
(define/contract (most-competitive nums k)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  (let recur ([acc empty][lst nums][n-remove (- (length nums) k)])
    (cond
      [(zero? n-remove) (foldl cons lst acc)]
      [(empty? lst) (reverse (list-tail acc n-remove))]
      [(and (not (empty? acc)) (> (first acc) (first lst))) (recur (rest acc) lst (sub1 n-remove))]
      [else (recur (cons (first lst) acc) (rest lst) n-remove)])))
```