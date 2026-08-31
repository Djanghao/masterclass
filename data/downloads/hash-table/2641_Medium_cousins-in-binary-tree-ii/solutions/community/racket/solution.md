# 71ms? two-pass dfs

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5959695/](https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5959695/)

---

# Intuition
One dfs traversal to calculate level sums, and another to update values based on level sum and the values of the node's sibling.

# Code
```racket []
(define (replace-value-in-tree root)
  (let ([level-sums (calculate-level-sum root)])
    (let loop ([node root] [level 0] [sibling-val 0])
      (when (and node (number? (tree-node-val node)))
        (let ([left-child-val (if (and (tree-node-left node)
                                       (number? (tree-node-val
                                                 (tree-node-left node))))
                                  (tree-node-val (tree-node-left node))
                                  0)]
              [right-child-val (if (and (tree-node-right node)
                                       (number? (tree-node-val
                                                 (tree-node-right node))))
                                  (tree-node-val (tree-node-right node))
                                  0)])
          (if (< level 2)
              (set-tree-node-val! node 0)
              (set-tree-node-val! node (- (hash-ref level-sums level)
                                          (tree-node-val node)
                                          sibling-val)))
          (loop (tree-node-left node) (add1 level) right-child-val)
          (loop (tree-node-right node) (add1 level) left-child-val)))))
  root)

(define (calculate-level-sum tree)
  "DFS to calculate level sums."
  (let ([level-sums (make-hash)])
    (let loop ([node tree] [level 0])
      (when (and node (number? (tree-node-val node)))
        (hash-set! level-sums level (+ (tree-node-val node)
                                       (hash-ref level-sums level 0)))
        (loop (tree-node-left node) (add1 level))
        (loop (tree-node-right node) (add1 level))))
    level-sums))
```