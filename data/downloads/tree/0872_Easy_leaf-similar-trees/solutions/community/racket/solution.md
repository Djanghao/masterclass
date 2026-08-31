# Racket recursive

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/4016127/](https://leetcode.com/problems/leaf-similar-trees/solutions/4016127/)

---

# Approach
Recurse until you get to leaves, build up a list of leaves. Remove nulls. Then see if the lists for both trees are the same

# Code
```
(define (leaf-node? tree)
  (and (false? (tree-node-left tree))
       (false? (tree-node-right tree))))

(define (leaf-nodes tree)
  (filter number?
          (if (tree-node? tree)
              (cond [(leaf-node? tree) (list (tree-node-val tree))]
                    [else (append (leaf-nodes (tree-node-left tree))
                                  (leaf-nodes (tree-node-right tree)))])
              '())))

(define (leaf-similar root1 root2)
  (equal? (leaf-nodes root1)
          (leaf-nodes root2)))

```