# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/4487982/](https://leetcode.com/problems/assign-cookies/solutions/4487982/)

---

# Code
```
(define/contract (recur g s acc)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer? exact-integer?)
  (cond
    [(or (empty? s) (empty? g)) acc]
    [(<= (first g) (first s)) (recur (rest g) (rest s) (add1 acc))]
    [else (recur g (rest s) acc)]
  ))

(define/contract (find-content-children g s)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  (recur (sort g <) (sort s <) 0))
```