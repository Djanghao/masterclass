# Racket BFS solution

**Author:** rymaju
**Votes:** 1
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/1066143/](https://leetcode.com/problems/is-graph-bipartite/solutions/1066143/)

---

Using continutations to "return early" when we find a node with the wrong color, we also have define a mutable hash table to keep track of each node's color. List is converted into a vector for O(1) performance on lookup.

```scheme
(define/contract (is-bipartite graph)
  (-> (listof (listof exact-integer?)) boolean?)
  
  (define color-table (make-hash))

  (define g (list->vector graph))

  (define (bfs current color cc)
    (when (cons? current)
      (bfs (foldr (lambda (node frontier)
                    (when (and (hash-has-key? color-table node) 
                               (not (= (hash-ref color-table node) color)))
                      (cc #false))

                    (if (not (hash-has-key? color-table node))
                        (and (hash-set! color-table node color) (append (vector-ref g node) frontier))
                        frontier))
                  empty
                  current)
           (if (= color 0) 1 0) cc)))
    
  (let/cc cc
    (for ([i (range (length graph))])
      (when (not (hash-has-key? color-table i))
        (bfs (list i) 0 cc)))
    #t))
```