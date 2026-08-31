# First Racket Solution.

**Author:** tusharpatidar22
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/4662010/](https://leetcode.com/problems/course-schedule-ii/solutions/4662010/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
(define/contract (find-order numCourses prerequisites)
  (-> exact-integer? (listof (listof exact-integer?)) (listof exact-integer?))
  (define in-degrees (make-vector numCourses 0))
  (define adjacency-list (make-vector numCourses '()))
  
  ;; Build the adjacency list and calculate in-degrees
  (for-each
   (lambda (prereq)
     (define ai (car prereq))
     (define bi (cadr prereq))
     (vector-set! adjacency-list bi (cons ai (vector-ref adjacency-list bi)))
     (vector-set! in-degrees ai (+ 1 (vector-ref in-degrees ai))))
   prerequisites)
  
  ;; Queue for BFS
  (define queue (make-queue))
  (for ([i (in-range numCourses)])
    (when (= (vector-ref in-degrees i) 0)
      (enqueue! queue i)))
  
  ;; Perform topological sort
  (define order '())
  (define (bfs)
    (unless (queue-empty? queue)
      (define node (dequeue! queue))
      (set! order (cons node order))
      (for-each
       (lambda (adj-node)
         (vector-set! in-degrees adj-node (- (vector-ref in-degrees adj-node) 1))
         (when (= (vector-ref in-degrees adj-node) 0)
           (enqueue! queue adj-node)))
       (vector-ref adjacency-list node))
      (bfs)))
  
  (bfs)
  (if (= (length order) numCourses)
      (reverse order) ; Return the order in reverse since we're adding nodes to the front
      '())) ; Return empty list if impossible to finish all courses

```