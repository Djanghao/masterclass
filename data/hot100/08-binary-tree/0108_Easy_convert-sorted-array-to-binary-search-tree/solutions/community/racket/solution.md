# Racket Solution

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/1676229/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/1676229/)

---


```
(define (split-up nums)
  (let* ([middle-index (quotient (length nums) 2)]
         [left (take nums middle-index)]
         [right (list-tail nums (add1 middle-index))])
         (values left (list-ref nums middle-index) right)))

(define (sorted-array-to-bst nums)
  (if (empty? nums)
      #f
      (let-values ([(left middle right) (split-up nums)])
        (tree-node middle (sorted-array-to-bst left) (sorted-array-to-bst right)))))
```