# linked list -> list -> vector -> 2 pointers

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/4016107/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/4016107/)

---

# Approach
convert the linked list to a list, then to a vector. 
From there we can make the sums by moving up and down the vector at the same time. At the end we have a vector of sums, and we can take the max

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
(define (ll->ls ll)
  (let loop ([ll ll]
             [ls-vals '()])
    (if (list-node-next ll)
        (loop (list-node-next ll) (cons (list-node-val ll) ls-vals))
        (cons (list-node-val ll) ls-vals))))

(define (pair-sum head)
  (let* ([vec (list->vector (ll->ls head))]
         [v-len (vector-length vec)])
    (sequence-fold max 0
     (for/vector ([i (in-range (quotient (vector-length vec) 2))])
      (+ (vector-ref vec i)
         (vector-ref vec (- (sub1 v-len) i)))))))

```