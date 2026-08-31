# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5217686/](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5217686/)

---

# Code
```racket
(define/contract (special-array nums)
  (-> (listof exact-integer?) exact-integer?)
  (let ([sorted-nums (sort nums <)][n (length nums)]) 
    (if (>= (first sorted-nums) n) n
        (let recur ([lst sorted-nums][i 1])
          (cond
            [(empty? (rest lst)) -1]
            [(and (< (first lst) (- n i)) (>= (second lst) (- n i))) (- n i)]
            [else (recur (rest lst) (add1 i))])))))
```