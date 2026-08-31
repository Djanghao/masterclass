# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4392566/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4392566/)

---

# Code
```
(define/contract (find-special-integer arr)
  (-> (listof exact-integer?) exact-integer?)
    (let* ([target (/ (length arr) 4)])
      (find-special-integer-recur arr target 0 -1)
      )
  )

(define/contract (find-special-integer-recur arr target acc prev-elem)
  (-> (listof exact-integer?) number? exact-integer? exact-integer? exact-integer?)
    (cond
      [(empty? arr) prev-elem]
      [(not (= (first arr) prev-elem)) (find-special-integer-recur (rest arr) target 1 (first arr))]
      [(> (add1 acc) target) (first arr)]
      [else (find-special-integer-recur (rest arr) target (add1 acc) prev-elem)]
      )
  )
```