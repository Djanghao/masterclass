# racket DFS

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/4024250/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/4024250/)

---


# Code
```
(define (longest-zig-zag root)
  (define (dfs node curr-sum dir)
    (if (not (tree-node? node))
        (sub1 curr-sum)
        (match dir
          ['l (dfs (tree-node-left node) (add1 curr-sum) 'r)]
          ['r (dfs (tree-node-right node) (add1 curr-sum) 'l)])))
  (define (outer root)
    (cond [(not (tree-node? root)) 0]
          [else (max (dfs root 0 'r)
                     (dfs root 0 'l)
                     (outer (tree-node-left root))
                     (outer (tree-node-right root)))]))
  (outer root))
```