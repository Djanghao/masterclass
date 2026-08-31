# Using comparator

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3195027/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3195027/)

---

# Intuition
Use comparator

# Approach
Implement `less-than?` procedure based on indexing on $k$-th columns.

# Complexity
- Time complexity:
$$O(n\\,log (n))$$

- Space complexity:
$$O(n)$$

# Code
```
(define/contract (sort-the-students score k)
  (-> (listof (listof exact-integer?)) exact-integer? (listof (listof exact-integer?)))
    (sort score (lambda (x y) (> (list-ref x k) (list-ref y k)))))


```