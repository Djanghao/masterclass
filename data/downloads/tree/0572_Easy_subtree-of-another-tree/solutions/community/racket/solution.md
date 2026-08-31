# Racket solution with match operator on structs

**Author:** tantivyMuckerMaffick
**Votes:** 0
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/3792719/](https://leetcode.com/problems/subtree-of-another-tree/solutions/3792719/)

---

# Intuition

Use a recursive `match` operator on each struct to confirm they are identical, and apply this check recursively on each subtree of the root input, comparing with the sub-root input.

# Code
```
(define/contract (same-tree? s t)
  (-> (or/c tree-node? #f) (or/c tree-node? #f) boolean?)
  (match `(,s ,t)
    [`(,x ,x) #t]
    [_        #f]))

(define/contract (is-subtree root sub-root)
  (-> (or/c tree-node? #f) (or/c tree-node? #f) boolean?)
  (or (same-tree? root sub-root)
      (and root
           (or (is-subtree (tree-node-left root) sub-root)
               (is-subtree (tree-node-right root) sub-root)))))
```