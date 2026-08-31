# racket solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/1276580/](https://leetcode.com/problems/maximum-binary-tree/solutions/1276580/)

---

```scheme
(define (rec-search-maximum left right maximum)
  (if (= (length right) 0) maximum
      (let*
          ([next-right (cdr right)]
           [next-left (append left (list (car right)))]
           [maximum
            (if (> (car right) (car maximum))
                (list (car right) left next-right) maximum)])
        (rec-search-maximum next-left next-right maximum))))

(define (search-maximum lst)
  (rec-search-maximum (list) lst (list -1 (list) (list))))

(define (construct-tree lst)
  (if (= (length lst) 0) #f
      (let ([maximum (search-maximum lst)])
        (tree-node (first maximum)
                   (construct-tree (second maximum))
                   (construct-tree (third maximum))))))

(define/contract (construct-maximum-binary-tree nums)
  (-> (listof exact-integer?) (or/c tree-node? #f))
                 (construct-tree nums))
```