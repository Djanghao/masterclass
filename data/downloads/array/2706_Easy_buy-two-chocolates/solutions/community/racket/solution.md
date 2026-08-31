# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4427204/](https://leetcode.com/problems/buy-two-chocolates/solutions/4427204/)

---

# Code
```
(define/contract (recur prices min1 min2)
    (-> (listof exact-integer?) exact-integer? exact-integer? exact-integer?)
    (cond 
        [(empty? prices) (+ min1 min2)]
        [else 
            (let ([i (first prices)] [r (rest prices)])
                (cond
                    [(< i min1) (recur r i min1)]
                    [(< i min2) (recur r min1 i)]
                    [else (recur r min1 min2)]
                )
            )
        ]
    )
)


(define/contract (buy-choco prices money)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
    (let ([result (recur prices 500 500)])
        (cond 
            [(> result money) money]
            [else (- money result)]
        )
    )
  )
```