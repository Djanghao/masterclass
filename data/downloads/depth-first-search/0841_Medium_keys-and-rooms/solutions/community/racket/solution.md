# racket hash updating dfs

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/4043764/](https://leetcode.com/problems/keys-and-rooms/solutions/4043764/)

---

# Approach
Make a hash table with (0 1). If a value is in the hash table, skip it, otherwise recurse on it. 

At the end, see if there is a hash entry for every room (by seeing if the lengths match up)

# Code
```
(define (can-visit-all-rooms rooms)
  (let ([seen-rooms (make-hash '((0 1)))])
    (define (dfs room)
      (map (\u03BB (key)
             (if (hash-has-key? seen-rooms key)
                 #f
                 (begin
                   (hash-update! seen-rooms key add1 0)
                   (dfs (list-ref rooms key)))))
           room))
    (begin
      (dfs (first rooms))
      (= (hash-count seen-rooms)
         (length rooms)))))
```