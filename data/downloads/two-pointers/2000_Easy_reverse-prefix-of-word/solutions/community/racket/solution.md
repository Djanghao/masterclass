# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/5093547/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/5093547/)

---

# Code
```racket
(define/contract (reverse-prefix word ch)
  (-> string? char? string?)
  (let recur ([acc empty] [lst (string->list word)])
    (cond
      [(empty? lst) word]
      [(char=? (first lst) ch) (list->string (cons (car lst) (append acc (rest lst))))]
      [else (recur (cons (car lst) acc) (rest lst))]
  )))

```