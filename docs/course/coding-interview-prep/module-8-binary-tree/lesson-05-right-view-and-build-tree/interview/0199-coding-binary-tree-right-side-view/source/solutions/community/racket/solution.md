# Racket BFS level by level

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/4028806/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/4028806/)

---

# Approach
There is an outer iteration `iter-layers` which moves down the levels of the tree. For each level, there is an inner iteration `get-layer` which goes left to right, putting all of the nodes in a list. 

Whenever a layer is turned into a list, `iter-layers` appends the last value in the list (the right-most) to the results list.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
(define (get-layer level [queue '()])
  (if (empty? level)
      queue
      (match (first level)
        [(tree-node a #f #f)
         (get-layer (rest level) queue)]
        [(tree-node a b #f)
         (get-layer (rest level) (append queue (list b)))]
        [(tree-node a #f b)
         (get-layer (rest level) (append queue (list b)))]
        [(tree-node a b c)
         (get-layer (rest level)
                    (append queue (list b c)))])))

(define (iter-layers initial [results '()])
  (if (eq? initial '())
      results
      (let ([res (get-layer initial)])
        (if (empty? res)
            (reverse results)
            (iter-layers res (cons (tree-node-val (last res)) results))))))

(define (right-side-view root)
  (if (not (tree-node? root))
      '()
      (cons (tree-node-val root)
        (iter-layers (list root)))))

```