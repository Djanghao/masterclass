# Racket BFS summing each level

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/4035323/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/4035323/)

---


# Code
```
;; for a tree, return a list of all the children nodes
(define (make-next-layer-node-list root)
  (match root
    [(tree-node a #f #f) '()]
    [#f '()]
    [(or (tree-node a b #f)
         (tree-node a #f b)) (list b)]
    [(tree-node a b c) (list b c)]))


;; returns a list of values at each level and depths
;; i.e. (((1 2 3 4 5) 0) ((6 7 8) 1) ((9 10 11) 2))
(define (get-layer-values tree)
  (let loop ([depth 1]
             [levels '()]
             [next-level (list tree)])
    (if (empty? next-level)
        (reverse levels)
        (loop (add1 depth)
              (cons (list (map tree-node-val next-level) depth) levels)
              (flatten (map make-next-layer-node-list next-level))))))

;; for a layer values list, apply proc to the values
(define (fold-tree-val-layer tree [proc +])
  (map (\u03BB (ls) (list (apply proc (car ls)) (cdr ls)))
       (get-layer-values tree)))

(define (max-level-sum root)
  (let* ([layer-sums-and-depths (fold-tree-val-layer root)]
         [layer-sums (map car layer-sums-and-depths)])
    (caadr
     (list-ref layer-sums-and-depths
               (apply min (indexes-of layer-sums
                                      (apply max layer-sums)))))))

```