# Classic logn Binary Search in Racket

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search/solutions/4367563/](https://leetcode.com/problems/binary-search/solutions/4367563/)

---

# Complexity
- Time complexity:
$$O(\\log n)$$


# Code
```
(define (search nums target)
  (define (search-helper left right) ; sublist is given by '(nums[left] nums[left + 1] ... nums[right - 1])
    (if (<= right left) -1 ; if sublist is empty, then target is not contained in nums
      (let* 
        ([mid (+ left (quotient (- right left) 2))]
         [nums-mid (list-ref nums mid)]) 
          (cond
            [(= target nums-mid) mid]
            [(< target nums-mid) (search-helper left mid)]
            [(> target nums-mid) (search-helper (add1 mid) right)]))))
  (search-helper 0 (length nums)))
```