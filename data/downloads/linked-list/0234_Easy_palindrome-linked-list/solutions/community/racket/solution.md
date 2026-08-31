# Racket Solution (Convert to List)

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/1774306/](https://leetcode.com/problems/palindrome-linked-list/solutions/1774306/)

---

The first helper function converts the linked list struct to a regular list
The second function just checks if the converted list is equal to its reverse

```racket
(define (linked-list->numbers ll)
  (if (not (list-node? ll))
      '()
      (append (list (list-node-val ll))
              (linked-list->numbers (list-node-next ll)))))


(define (is-palindrome head)
  (let ([numls (linked-list->numbers head)])
    (equal? numls (reverse numls))))
```