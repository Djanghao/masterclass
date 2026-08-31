# Racket

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/5837991/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/5837991/)

---



# Code
```racket []
(define (maximum-product nums)
  (let* ([nums (sort nums >)]
         [mx (take nums 3)]
         [mn (take-right nums 3)])
    (max (apply * mx)
         (apply * mn)
         (* (apply * (take mx 2)) (last mn))
         (* (first mx) (apply * (take-right mn 2))))))

```