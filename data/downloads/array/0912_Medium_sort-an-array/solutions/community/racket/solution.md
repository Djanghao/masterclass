# Solution with merge sort

**Author:** bigbag
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/5531310/](https://leetcode.com/problems/sort-an-array/solutions/5531310/)

---

# Intuition
To sort an array of integers in ascending order efficiently, we need an algorithm with a time complexity of $$O(n \\log n)$$. Merge Sort is a suitable choice for this task because it divides the array into smaller subarrays, sorts them, and then merges the sorted subarrays. This divide-and-conquer approach ensures that the sorting is done efficiently.

# Approach
1. **Divide**: Split the array into two halves until each subarray contains a single element.
2. **Conquer**: Recursively sort each half.
3. **Combine**: Merge the sorted halves to produce a single sorted array.

The `merge-sort` function handles the division and recursive sorting, while the `merge` function combines the sorted subarrays.

# Complexity
- **Time complexity**: 
  - The time complexity of Merge Sort is $$O(n \\log n)$$ because the array is repeatedly divided in half (logarithmic divisions) and each division requires linear time to merge the subarrays.
- **Space complexity**: 
  - The space complexity is $$O(n)$$ due to the additional space required for the temporary arrays used during the merge process.

# Code
```
(define/contract (sort-array nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  (merge-sort nums))

(define (merge-sort lst)
  (if (or (null? lst) (null? (cdr lst)))
      lst
      (let* ([mid (quotient (length lst) 2)]
             [left (take lst mid)]
             [right (drop lst mid)])
        (merge (merge-sort left) (merge-sort right)))))

(define (merge left right)
  (cond
    [(null? left) right]
    [(null? right) left]
    [else
     (if (< (car left) (car right))
         (cons (car left) (merge (cdr left) right))
         (cons (car right) (merge left (cdr right))))]))

```