# Recursively traverse and add

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/3173392/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/3173392/)

---

# Intuition
Recursive traverse and add values located between zeros.

# Approach
Used pattern matching to check for condition if the next node is boolean (`#f`), then check if value of current node is zero and finally adding up the intermittant values to accumulator.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
; Definition for singly-linked list:
#|

; val : integer?
; next : (or/c list-node? #f)
(struct list-node
  (val next) #:mutable #:transparent)

; constructor
(define (make-list-node [val 0])
  (list-node val #f))

|#

(define/contract (merge-nodes head)
  (-> (or/c list-node? #f) (or/c list-node? #f))
    (traverse_collapse (make-list-node 0) (list-node-next head)))

(define (traverse_collapse acc cur)
 (let ([acc-val (list-node-val acc)]
       [cur-val (list-node-val cur)]
       [next (list-node-next cur)]
       [empty-node (make-list-node 0)])  
  (cond [(boolean? next) acc]
        [(zero? cur-val) 
          (struct-copy 
            list-node acc 
            [next (traverse_collapse empty-node next)])]
        [else
          (traverse_collapse 
            (struct-copy list-node acc [val (+ acc-val  cur-val)]) 
            next)])))









```