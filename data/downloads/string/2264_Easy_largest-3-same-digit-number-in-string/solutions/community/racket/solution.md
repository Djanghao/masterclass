# Straightforward Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4361883/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4361883/)

---

# Code
```
(define/contract (largest-good-integer num)
  (-> string? string?)
    (let ([result (recur (string->list num) #\
ul)])
    (if (char=? result #\
ul) (make-string 0 #\
ul) (make-string 3 result)
    )
    )
  )

(define/contract (recur lst c)
  (-> (listof char?) char? char?)
  (cond 
    [(or (empty? lst) (empty? (rest lst)) (empty? (cddr lst)))
        c
    ]
    [else 
        (cond 
            [(and (equal? (first lst) (second lst)) (equal? (second lst) (third lst)))
                (recur (cddr lst) (if (char>? c (first lst)) c (first lst)))
            ]
            [else (recur (rest lst) c)]
        )
    ]
  )

)
```