# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/4734847/](https://leetcode.com/problems/maximum-subarray/solutions/4734847/)

---

# Code
```racket
(define/contract (recur nums)
    (-> (listof exact-integer?) pair?)
    (if (empty? nums) (cons 0 -1000000)
    (let* ([i (first nums)]
           [res (recur (cdr nums))]
           [currBest (car res)]
           [bestSofar (cdr res)]
           [currNew (max i (+ currBest i))]
           )
        (cons currNew (max bestSofar currNew)))))

(define/contract (max-sub-array nums)
  (-> (listof exact-integer?) exact-integer?)
  (cdr (recur nums)))
```