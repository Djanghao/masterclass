# Racket using list operations

**Author:** dr-neptune
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1807918/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1807918/)

---

Convert linked list to a list, then drop the nth from right and turn the resulting list back into a linked list

```
(define (linked-list->numbers ll)
  (if (not (list-node? ll))
      '()
      (append (list (list-node-val ll))
              (linked-list->numbers (list-node-next ll)))))

(define (numbers->linked-list numbers)
  (if (empty? numbers) #f (foldr list-node #f numbers)))

(define (drop-nth-right ls n)
  (append (take ls (- (length ls) n))
          (take-right ls (sub1 n))))

(define (remove-nth-from-end head n)
  (numbers->linked-list (drop-nth-right (linked-list->numbers head) n)))
```