# Racket tree trimming solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3344387/](https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3344387/)

---

# Intuition

Brute force

# Approach

1. Find the minimum spanning tree of the coin nodes in the given tree
2. remove all edge nodes twice

# Complexity

- Time complexity: $O(n)$
- Space complexity: $O(n)$

where $n$ is the number of nodes.

# Code

The last line states the logic.

```
(define (collect-the-coins coins edges)
  (define has-coin?
    (let ([coin-set (mutable-set)])
      (for ([c coins]
            [i (in-naturals 0)])
        (when (= 1 c)
          (set-add! coin-set i)))
      (\u03BB (i) (set-member? coin-set i))))

  (define (adj-of tree i)
    (hash-ref (first tree) i '()))

  (define (build-tree edges)
    (define adj-list (make-hash))
    (for ([e edges])
      (hash-update! adj-list (first e) (\u03BB (old) (cons (second e) old)) '())
      (hash-update! adj-list (second e) (\u03BB (old) (cons (first e) old)) '()))
    (list adj-list edges))

  (define (remove-edge-nodes tree)
    (match-define (list adjs edges) tree)
    (define edge-nodes
      (for/set ([(k v) adjs]
                #:when (= 1 (length v)))
        k))
    (define new-edges
      (filter-not (\u03BB (e) (or (set-member? edge-nodes (first e))
                             (set-member? edge-nodes (second e))))
                  edges))
    (build-tree new-edges))

  (define (count-edges tree)
    (length (second tree)))

  (define (build-min-tree edges)
    (define min-tree-edges '())

    (define (gen-min-edges tree root from)
      (define has-coin-tree? (has-coin? root))
      (for ([adj (adj-of tree root)]
            #:when (not (= adj from)))
        (define has-coin-subtree? (gen-min-edges tree adj root))
        (when has-coin-subtree?
          (set! min-tree-edges (cons (list root adj) min-tree-edges)))
        (set! has-coin-tree? (or has-coin-tree? has-coin-subtree?)))
      has-coin-tree?)

    (define tree (build-tree edges))
    (for/first ([i (length coins)]
                #:when (has-coin? i))
      (gen-min-edges tree i -1))

    (build-tree min-tree-edges))

  (* 2 (count-edges (remove-edge-nodes (remove-edge-nodes (build-min-tree edges))))))

```