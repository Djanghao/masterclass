# Racket no surprises

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum/solutions/5837817/](https://leetcode.com/problems/path-sum/solutions/5837817/)

---



# Code
```racket []
(define (has-path-sum root targetSum)
  (cond ((not root)
         #f)
        ((and (not (tree-node-left root))
              (not (tree-node-right root))
              (= targetSum (tree-node-val root)))
         #t)
        (else
         (for/or ([x (list (tree-node-left root)
                           (tree-node-right root))])
           (has-path-sum x (- targetSum (tree-node-val root)))))))
```