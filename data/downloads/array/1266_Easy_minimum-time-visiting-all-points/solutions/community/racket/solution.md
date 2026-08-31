# Straightforward Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4355908/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4355908/)

---

# Code
```
(define/contract (time-to-visit lst1 lst2)
 (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
 (max (abs (- (first lst1) (first lst2))) (abs (- (second lst1) (second lst2))))
)

(define/contract (min-time-to-visit-all-points points)
  (-> (listof (listof exact-integer?)) exact-integer?)
    (cond 
        [(empty? (rest points)) 0]
        [else (min-time-to-visit-all-points-recur points 0)]
    )
    
  )

(define/contract (min-time-to-visit-all-points-recur points acc)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer?)
    (cond 
        [(empty? (rest points)) acc]
        [else (min-time-to-visit-all-points-recur (rest points) (+ acc (time-to-visit (first points) (second points))))]
    )
  )


```