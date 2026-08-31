# Remove Duplicates From an Unsorted Linked List on Racket

**Author:** bigbag
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5468003/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5468003/)

---

# Intuition
The problem requires us to remove all nodes from a linked list that have values appearing more than once. The first thought is to traverse the list to count the occurrences of each value, and then traverse it again to remove the nodes with values that appear more than once. This approach ensures that we can efficiently identify and remove the duplicate nodes.

# Approach
- Data Structures:
Use a hash table to count the occurrences of each value in the linked list.
Use a dummy head node to simplify edge cases where the head node itself might need to be removed.
- Counting Occurrences:
Traverse the linked list and populate the hash table with the count of each value.
- Removing Duplicates:
Traverse the linked list again, this time using the hash table to skip nodes with values that appear more than once.
Use a dummy head node to handle cases where the head node needs to be removed, ensuring the list remains connected properly.

# Complexity
- Time complexity: O(n).
This is because we traverse the list twice: once for counting occurrences and once for removing duplicates.

- Space complexity: O(n) 
due to the hash table used to store the counts of each value. In the worst case, all values are unique, and the hash table will have n entries.

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

(define/contract (delete-duplicates-unsorted head)
  (-> (or/c list-node? #f) (or/c list-node? #f))
  (let ([value-counts (make-hash)] ; Hash table to count occurrences of each value
        [dummy-head (make-list-node 0)]) ; Dummy head to simplify edge cases
    (define (count-values node)
      (when (list-node? node)
        (hash-set! value-counts (list-node-val node)
                   (add1 (hash-ref value-counts (list-node-val node) 0)))
        (count-values (list-node-next node))))
    (define (remove-duplicates prev node)
      (cond
        [(not (list-node? node)) (list-node-next dummy-head)]
        [(> (hash-ref value-counts (list-node-val node)) 1)
         (set-list-node-next! prev (list-node-next node))
         (remove-duplicates prev (list-node-next node))]
        [else
         (remove-duplicates node (list-node-next node))]))
    (count-values head)
    (set-list-node-next! dummy-head head)
    (remove-duplicates dummy-head head)))
```