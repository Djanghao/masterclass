# Racket pattern matching

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/4039759/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/4039759/)

---

# Approach
If val is < or >, then recurse building the tree.
If the val is equal to the root, then pattern match against it.
If the children are #f #f, return #f
If there is 1 child, return it
else get the next highest node value and use that

# Code
```
(define (delete-node root key)
  (if (not (tree-node? root))
      #f
      (match (tree-node-val root)
        [(? (curry eq? key))
         (match root
           [(tree-node a #f #f) #f]
           [(or (tree-node a #f b)
                (tree-node a b #f))
            b]
           [_ (let loop ([rhs (tree-node-right root)])
                (let ([rlhs (tree-node-left rhs)])
                  (if (tree-node? rlhs)
                      (loop rlhs)
                      (tree-node (tree-node-val rhs)
                                 (tree-node-left root)
                                 (delete-node (tree-node-right root) (tree-node-val rhs))))))])]
        [(? (curry < key)) (tree-node (tree-node-val root)
                                      (delete-node (tree-node-left root) key)
                                      (tree-node-right root))]
        [_ (tree-node (tree-node-val root)
                      (tree-node-left root)
                      (delete-node (tree-node-right root) key))])))

```