# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5443539/](https://leetcode.com/problems/average-waiting-time/solutions/5443539/)

---

# Code
```
(define/contract (average-waiting-time customers)
  (-> (listof (listof exact-integer?)) number?)
    (/ (let recur ([customers customers][current-time 0])
      (cond 
        [(empty? customers) 0]
        [else 
          (let* ([start-time (first (first customers))]
                 [duration (second (first customers))]
                 [new-curr-time (+ duration (max current-time start-time))])
            (+ (- new-curr-time start-time) (recur (rest customers) new-curr-time))) ])) 
    (length customers)))
```