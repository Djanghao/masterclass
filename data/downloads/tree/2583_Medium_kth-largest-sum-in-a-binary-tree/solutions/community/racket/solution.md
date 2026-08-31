# 22ms bfs

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/5954045/](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/5954045/)

---

# Code
```racket []
(define (kth-largest-level-sum root k)
  (let ([q (list root)]
        [res '()])
    (for ([level (in-naturals)]
          #:break (null? q))
      (let ([level-sum 0]
            [next-level '()])
        (for ([x (in-list q)])
          (when (tree-node-val x)
            (set! level-sum (+ level-sum (tree-node-val x)))
          (when (tree-node-left x)
              (set! next-level (cons (tree-node-left x) next-level)))
          (when (tree-node-right x)
              (set! next-level (cons (tree-node-right x) next-level)))))
        (set! res (cons level-sum res))
        (set! q (map identity next-level))))
    (if (< (length res) k)
        -1
        (list-ref (sort res >) (sub1 k)))))
```