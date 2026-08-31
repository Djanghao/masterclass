# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4418539/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4418539/)

---

# Code\r
```\r
(define/contract (recur-max lst max1 max2)\r
    (-> (listof exact-integer?) exact-integer? exact-integer? exact-integer?)\r
    (if (empty? lst) (* max1 max2)\r
    (let ([i (first lst)] [r (rest lst)])\r
    (cond\r
        [(> i max1) (recur-max r i max1)]\r
        [(> i max2) (recur-max r max1 i)]\r
        [else (recur-max r max1 max2)]\r
    ))\r
    )\r
)\r
\r
(define/contract (recur-min lst min1 min2)\r
    (-> (listof exact-integer?) exact-integer? exact-integer? exact-integer?)\r
    (if (empty? lst)  (* min1 min2)\r
    (let ([i (first lst)] [r (rest lst)])\r
    (cond\r
        [(< i min2) (recur-min r min2 i)]\r
        [(< i min1) (recur-min r i min2)]\r
        [else (recur-min r min1 min2)]\r
    ))\r
    )\r
)\r
\r
(define/contract (max-product-difference nums)\r
  (-> (listof exact-integer?) exact-integer?)\r
    (- (recur-max nums 0 0) (recur-min nums 60000 60000))\r
  )\r
```