# Racket Solution with Continuation

**Author:** gilbertsheng
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/3987813/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/3987813/)

---


# Complexity
- Time complexity: $$O(n)$$ 

- Space complexity: $$O(1)$$

# Code
```racket
(define/contract (smallest-equal nums)
  (-> (listof exact-integer?) exact-integer?)
  (call/cc
   (lambda (break)
     (let loop ([i 0]
                [ls nums])
       (cond [(null? ls) -1]
             [(= (car ls) (remainder i 10)) (break i)]
             [else (loop (add1 i)
                         (cdr ls))]))))
   
  )

```